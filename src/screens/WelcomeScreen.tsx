import { View, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import CustomButton from '../components/CustomButton';
import Footer from '../components/Footer';
import { globalStyles } from '../theme/globalStyles';

export default function WelcomeScreen(props: any) {
  return (
    <View style={globalStyles.container}>
      <View style={globalStyles.logoContent}>
        <View style={globalStyles.logoContainer}>
          <MaterialCommunityIcons
            name="heart-pulse"
            style={globalStyles.logoPlaceholder}
          />
        </View>

        <Text style={globalStyles.title}>Bem-vindo ao SOS Engasgo</Text>
        <Text style={globalStyles.subtitle}>
          Um sistema pensado para emergências infantis — rápido, simples e seguro.
        </Text>

        <View style={globalStyles.buttonContainer}>
          <CustomButton
            variant="primary"
            title="Entrar"
            navigateTo={props.navigation.navigate}
            targetScreen="Login"
          />

          <CustomButton
            variant="outline"
            title="Criar cadastro"
            navigateTo={props.navigation.navigate}
            targetScreen="Register"
          />
        </View>
      </View>

      <Footer />
    </View>
  );
}
