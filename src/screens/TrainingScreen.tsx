import {
    View, 
    Text} from 'react-native';

import { globalStyles } from '../theme/globalStyles';

import Header from '../components/Header';
import Footer from '../components/Footer';

export default function TrainingScreen(props: any) {

  return (
    <View style={globalStyles.containerTop}>
      <Header
        title="Treinamentos"
        showMenu={true}
      />

      <View style={globalStyles.content}>
        <Text style={globalStyles.title}>Treinamento</Text>
        <Text style={globalStyles.subtitle}>
          Módulo de treinamento em desenvolvimento.
        </Text>
      </View>

      <Footer />
    </View>
  );
}