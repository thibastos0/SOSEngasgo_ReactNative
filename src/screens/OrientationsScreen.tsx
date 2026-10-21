import { View, Text } from 'react-native';

import { globalStyles } from '../theme/globalStyles';

import Header from '../components/Header';
import Footer from '../components/Footer';

export default function OrientationsScreen(props: any) {
  return (
    <View style={globalStyles.container}>
      <Header
        title="Orientações"
        showMenu={true}
      />

      <View style={globalStyles.content}>
        <Text style={globalStyles.title}>Orientações</Text>
        <Text style={globalStyles.subtitle}>
          Guia rápido de orientações de primeiros socorros em desenvolvimento.
        </Text>
      </View>

      <Footer />
    </View>
  );
}
