import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../theme/colors';
import { globalStyles } from '../theme/globalStyles';
import CustomEmergencyCard from '../components/CustomEmergencyCard';
import { MaterialCommunityIcons } from '@expo/vector-icons';


export default function HomeScreen({ navigation }: any) {
    return (
        <View style={globalStyles.containerTop}>
            <View style={ styles.header }>
                <MaterialCommunityIcons
                    name="hospital"
                    style={ styles.icon }
                />
                <Text style={[globalStyles.titleMain, styles.title]}>SOS Engasgo</Text>
            </View>

        <CustomEmergencyCard
            cardTitle="Emergência"
            cardSubTitle="Em caso de engasgo, pressione o botão abaixo imediatamente"
            
            onClick={() => navigation.navigate('ConfirmLocation')}        
            buttonText="Acionar"

            cardFooter="Toque para acionar socorro."
        />

            
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    icon: {
        color: colors.primary,
        marginRight: 10,
        fontSize: 50,
        marginBottom: 5,
    },
    title: {
        color: colors.primary,
        marginBottom: 0,
    },
});