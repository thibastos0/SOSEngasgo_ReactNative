import {
    View,
    Text,
    ScrollView,
    Alert,
    Platform,
    KeyboardAvoidingView,
    Pressable,
    ActivityIndicator,
} from 'react-native';

import { useState, useEffect } from 'react';
import { MaterialIcons } from '@expo/vector-icons';

import { ref, onValue } from 'firebase/database';
import { db } from '../services/firebase';

import { File } from 'expo-file-system';
//import * as FileSystem from 'expo-file-system/legacy';

import {
  useAudioRecorder,
  AudioModule,
  RecordingPresets,
  setAudioModeAsync,
  useAudioRecorderState,
} from 'expo-audio';

import { globalStyles } from '../theme/globalStyles';

import CustomButton from '../components/CustomButton';
import ManeuverCard from '../components/ManeuverCard';
import { sendAudioToAI } from '../services/api';

import Footer from '../components/Footer';
import Header from '../components/Header';

export default function EmergencyScreen(props: any) {

    const emergencyData = props.route.params?.emergency;
    const locationData = props.route.params?.location;
    const protocolId = emergencyData?.protocol;
    const deviceId = emergencyData?.deviceId;

    const [status, setStatus] = useState<string >('SENT');
    const [sendingAudio, setSendingAudio] = useState<boolean>(false);
    const [aiResponse, setAIResponse] = useState<
        {   "protocol_id": string,
            "response_text": string | null,
            "maneuver": { 
            "title": string | null,
             "steps": string[] | null
             } 
        } | null>(null);

    const audioRecorder = useAudioRecorder({...RecordingPresets.HIGH_QUALITY, directory: 'document'});
    const recorderState = useAudioRecorderState(audioRecorder);

    useEffect((() => {
        if (!protocolId) return;
        if (!deviceId) return;

        const statusRef = ref(db, `emergencies/${deviceId}/${protocolId}/status`);
        if (!statusRef) return;

        const unsubscribe = onValue(statusRef, (snapshot) => {
            const data = snapshot.val();
            if (data) {
                setStatus(data);
            }
        });
        return () => {
            unsubscribe();
        };
    }), [protocolId]);

    const getStatusMessage = () => {
        switch (status) {
            case 'SENT':
                return 'Chamado enviado. Aguardando confirmação do socorro.';
            case 'DELIVERED':
                return 'Chamado entregue.';
            case 'READ':
                return 'Chamado lido pelo socorro.';
            case 'IN_PROGRESS':
                return 'Socorro a caminho.';
            case 'COMPLETED':
                return 'Socorro concluído.';
            default:
                return 'Processando...';
        }
    };

    async function handleStartRecording() {
        try {
            const permission = await AudioModule.requestRecordingPermissionsAsync();
            if (!permission.granted) {
                Alert.alert('Permissão de Áudio', 'Permissão para gravar áudio negada.');
                return;
            }

            // Configure audio for recording
            await setAudioModeAsync({
            allowsRecording: true,
            playsInSilentMode: true,
            interruptionMode: 'doNotMixPersistent'
            });
            
            await audioRecorder.prepareToRecordAsync();
            // audio em audioRecorder.uri
            audioRecorder.record();
            

        } catch (error) {
            console.error('Erro ao iniciar gravação:', error);
        }
    }

    async function handleStopAndSend() {

        if (!recorderState.isRecording) return;

        try {
            await audioRecorder.stop();
            await setAudioModeAsync({
                allowsRecording: false
            });

            if (!audioRecorder.uri) {
                console.error('URI do áudio não disponível.');
                return;
            }

            setSendingAudio(true);

            // Read the audio file as base64 para substituir o legacy FileSystem.readAsStringAsync
            const audio = await new File(
                audioRecorder.uri).base64();

            /*const base64Audio = await FileSystem.readAsStringAsync(audioRecorder.uri, {
                encoding: FileSystem.EncodingType.Base64,
            });*/

            if(!audio) {
                throw new Error('Não foi possível converter o áudio para base64.');
            }

            const aiResponse = await sendAudioToAI({
                audio_base64: audio,
                protocol_id: protocolId || 'unknown_protocol',
                device_id: deviceId || 'unknown_device',
            });
            
            setAIResponse(aiResponse);
            console.log('Resposta da AI:', aiResponse);

        } catch (error) {
            console.error('Erro ao parar gravação:', error);
            Alert.alert('Erro', 'Falha ao enviar áudio para o Agente IA. Tente novamente.');
        } finally {
            setSendingAudio(false);
        }

    }

    const handleFinish = () => {
        const confirmMessage = 'Deseja realmente encerrar o atendimento de emergência?';

        if (Platform.OS === 'web') {
            if (window.confirm(confirmMessage)) {
                props.navigation.navigate('Home');
            }
        } else {
            Alert.alert(
                'Encerrar Atendimento',
                confirmMessage,
                [
                    { text: 'Não', style: 'cancel' },
                    {
                        text: 'Sim, Encerrar',
                        style: 'destructive',
                        onPress: () => props.navigation.navigate('Home'),
                    },
                ]
            );
        }
    };

    return (
        <KeyboardAvoidingView
            style={globalStyles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        >
            <Header
                title="Socorro em Andamento"
                showBack={true}
            />

            <ScrollView contentContainerStyle={globalStyles.scrollContent}>
                <View style={globalStyles.cardStatus}>
                    
                    <Text style={globalStyles.title}>SOCORRO ACIONADO!</Text>

                    <View style={globalStyles.badgeContainer}>
                        <Text style={globalStyles.badgeText}>
                            {getStatusMessage()}
                        </Text>
                    </View>

                    <Text style={globalStyles.protocolText}>
                        Protocolo: {protocolId || 'Não disponível'}
                    </Text>
                    <Text style={globalStyles.protocolText}>
                        Dispositivo: {deviceId || 'Não disponível'}
                    </Text>

                    <Text style={globalStyles.locationText}>
                        Localização: {locationData ? `${locationData.coords.latitude.toFixed(6)}, ${locationData.coords.longitude.toFixed(6)}` : 'Não disponível'}
                    </Text>

                </View>

                <ManeuverCard
                    title={aiResponse?.maneuver?.title || 'Manobra de Heimlich'}
                    text={aiResponse?.response_text || 'Descrição não disponível.'}
                    instruction={aiResponse?.maneuver?.steps ? aiResponse.maneuver.steps.join('\n') : 'Instruções não disponíveis.'}
                    // imageSource={require('../../assets/heimlich_step1.png')}
                />

                <View style={globalStyles.micArea}>
                    <Text style={globalStyles.micText}>
                        {recorderState.isRecording
                            ? '🔴 Gravando... Solte para enviar'
                            : sendingAudio
                            ? '⏳ Enviando áudio para a IA...'
                            : 'Hold to talk (Segure para falar)'}
                    </Text>

                    <Pressable
                        style={[
                            globalStyles.micButton,
                            recorderState.isRecording && globalStyles.micButtonRecording,
                        ]}
                        onPressIn={handleStartRecording}
                        onPressOut={handleStopAndSend}
                        disabled={sendingAudio} // Desabilita o botão enquanto o áudio está sendo enviado
                    >
                        {sendingAudio ? (
                            <ActivityIndicator color="#ffffff" />
                        ) : (
                            <MaterialIcons
                                style={globalStyles.micIcon}
                                name={recorderState.isRecording ? 'mic' : 'mic-none'}                                
                            />
                        )}
                    </Pressable>

                </View>

                <View style={globalStyles.buttonContainer}>
                    <CustomButton
                        title="Socorro Chegou / Encerrar"
                        variant="primary"
                        navigateTo={handleFinish}
                    />
                </View>
            </ScrollView>

            <Footer />
        </KeyboardAvoidingView>
    );
}
