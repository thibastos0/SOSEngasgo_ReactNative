import { 
    View,} from 'react-native';

import { globalStyles } from '../theme/globalStyles';
import CustomEmergencyCard from '../components/CustomEmergencyCard';

import Header from '../components/Header';
import Footer from '../components/Footer';

export default function HomeScreen( props: any) {
    return (
        <View style={globalStyles.containerTop}>

            <Header
                title="SOS Engasgo"
                showMenu={true}
                showAuth={true}
            />

            <CustomEmergencyCard
                cardTitle="Emergência"
                cardSubTitle="Em caso de engasgo, pressione o botão abaixo imediatamente"
                navigateTo={props.navigation.navigate}
                targetScreen="ConfirmLocation"
                buttonText="Acionar"

                cardFooter="Toque para acionar socorro."
            />

            <Footer />
                    
        </View>
    );
}