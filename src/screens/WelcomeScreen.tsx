import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../theme/colors';
import CustomButton  from '../components/CustomButton';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { globalStyles } from '../theme/globalStyles';

export default function WelcomeScreen () {

  const navigation = useNavigation();

  return (
    <View style={globalStyles.container}>
      <View style={globalStyles.logoContent}>
        {/* Ícone de Coração / Pulso */}
        <View style={globalStyles.logoContainer}>
          <MaterialCommunityIcons 
            name="heart-pulse"
            style={globalStyles.logoPlaceholder} />
        </View>

        <Text style={globalStyles.title}>Bem-vindo ao SOS Engasgo</Text>
        <Text style={globalStyles.subtitle}>
          Um sistema pensado para emergências infantis — rápido, simples e seguro.
        </Text>

        <View style={styles.buttonContainer}>
          <CustomButton
            title="Entrar"
            onClick={() => navigation.navigate('Login')}
          />
          <CustomButton
            title="Criar cadastro"
            variant="outline"
            onClick={() => navigation.navigate('Register')}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    width: '100%',
    gap: 4,
  },
});