import {
    View,
    Text,
    ScrollView,
    Alert,
    Platform,
    KeyboardAvoidingView,
} from 'react-native';

import { globalStyles } from '../theme/globalStyles';

import CustomButton from '../components/CustomButton';
import ManeuverCard from '../components/ManeuverCard';

import Footer from '../components/Footer';
import Header from '../components/Header';

export default function EmergencyScreen(props: any) {
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
                <View>
                    <Text style={globalStyles.title}>SOCORRO ACIONADO!</Text>
                    <Text style={globalStyles.descriptionText}>
                        Ajuda a caminho. Siga as orientações do assistente:
                    </Text>
                    <Text style={globalStyles.descriptionText}>
                        {props.route.params?.location ? 
                        `   Localização: 
                            ${  props.route.params.location.coords.latitude.toFixed(6)}, 
                            ${  props.route.params.location.coords.longitude.toFixed(6)}` : 
                            'Localização não disponível.'}
                        {props.route.params?.emergency ? 
                        `   Protocolo: 
                            ${  props.route.params.emergency.deviceId}, 
                            ${  props.route.params.emergency.createdAt}, 
                            ${  props.route.params.emergency.protocol}` :
                            'Protocolo não disponível.'}
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
