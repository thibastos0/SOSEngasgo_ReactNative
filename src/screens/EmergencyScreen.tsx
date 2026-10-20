import {
    View,
    Text,
    ScrollView,
    Alert,
    Platform,
    KeyboardAvoidingView,
    StyleSheet,
} from 'react-native';

import { globalStyles } from '../theme/globalStyles';
import { colors } from '../theme/colors';

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
            style={globalStyles.containerTop}
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        >

            <Header
                title="Socorro em Andamento"
                showBack={true}
            />

            <ScrollView contentContainerStyle={{ flexGrow: 1, paddingBottom: 24 }}>
                <View>
                    <Text style={styles.alertTitle}>SOCORRO ACIONADO!</Text>
                    <Text style={styles.alertSubtitle}>
                        Ajuda a caminho. Siga as orientações do assistente:
                    </Text>
                </View>

                <ManeuverCard
                    title="Manobra de Heimlich"
                    instruction={"1. Posicione-se atrás da criança...\n2. Feche a mão e pressione a região abdominal."}
                    // imageSource={require('../../assets/heimlich_step1.png')}
                />

                <CustomButton
                    title="Socorro Chegou / Encerrar"
                    variant="primary"
                    navigateTo={handleFinish}
                />
            </ScrollView>
            <Footer />
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    alertTitle: {
        color: colors.primary,
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 16,
    },
    alertSubtitle: {
        color: colors.textMain,
        fontSize: 14,
        textAlign: 'center',
        marginBottom: 16,
    },
});

