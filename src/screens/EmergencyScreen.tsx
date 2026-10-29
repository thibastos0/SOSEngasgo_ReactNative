import {
    View,
    Text,
    ScrollView,
    Alert,
    Platform,
    KeyboardAvoidingView,
} from 'react-native';

import { useState, useEffect } from 'react';
import { ref, onValue } from 'firebase/database';
import { db } from '../services/firebase';

import { globalStyles } from '../theme/globalStyles';

import CustomButton from '../components/CustomButton';
import ManeuverCard from '../components/ManeuverCard';

import Footer from '../components/Footer';
import Header from '../components/Header';

export default function EmergencyScreen(props: any) {

    const emergencyData = props.route.params?.emergency;
    const locationData = props.route.params?.location;
    const protocolId = emergencyData?.protocol;

    const [status, setStatus] = useState<string >('SENT');

    useEffect((() => {
        if (!protocolId) return;
    
        const statusRef = ref(db, `emergencies/${protocolId}/status`);
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

                    <Text style={globalStyles.locationText}>
                        Localização: {locationData ? `${locationData.coords.latitude.toFixed(6)}, ${locationData.coords.longitude.toFixed(6)}` : 'Não disponível'}
                    </Text>

                </View>

                <ManeuverCard
                    title="Manobra de Heimlich"
                    instruction={"1. Posicione-se atrás da criança...\n2. Feche a mão e pressione a região abdominal."}
                    // imageSource={require('../../assets/heimlich_step1.png')}
                />

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
