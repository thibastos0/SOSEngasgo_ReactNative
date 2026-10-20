import { 
    View, 
    Platform, 
    Alert } from 'react-native';

import { globalStyles } from '../theme/globalStyles';
import CustomButton from '../components/CustomButton';
import CustomMockMap from '../components/CustomMockMap';
import Footer from '../components/Footer';

export default function ConfirmLocationScreen( props: any ) {

    const handleCancel = () => {
        const confirmMessage = 'Deseja realmente cancelar o acionamento de socorro?';

        if (Platform.OS === 'web') {
            if (window.confirm(confirmMessage)) {
                props.navigation.goBack();
            }
        } else {
            Alert.alert(
                'Cancelar Acionamento',
                confirmMessage,
                [
                    { text: 'Não', style: 'cancel' },
                    {
                        text: 'Sim, Cancelar',
                        style: 'destructive',
                        onPress: () => props.navigation.goBack(),
                    },
                ]
            );
        }
    };

    return (
        <View style={globalStyles.container}>

            <View style={globalStyles.containerSpaceBetween}>
            
                <CustomMockMap />

                <View style={globalStyles.buttonContainer}>
                    <CustomButton
                        title="Sim, Chamar Socorro"
                        variant="primary"
                        navigateTo={props.navigation.navigate}
                        targetScreen="EmergencyScreen"
                    />
                    <CustomButton
                        title="Não, Cancelar Acionamento"
                        variant="outline"
                        navigateTo={handleCancel}
                    />
                </View>

            </View>
            <Footer />
        </View>
    );
}


