import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, Image } from 'react-native';
import { colors } from '../theme/colors';
import CustomButton  from '../components/CustomButton';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function WelcomeScreen () {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {/* Ícone de Coração / Pulso */}
        <View style={styles.logoContainer}>
          <MaterialCommunityIcons 
            name="heart-pulse"
            style={styles.logoPlaceholder} />
        </View>

        <Text style={styles.title}>Bem-vindo ao SOS Engasgo</Text>
        <Text style={styles.subtitle}>
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
  container: {
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: 'center',
    padding: 24,
  },
  content: {
    alignItems: 'center',
    width: '100%',
  },
  logoContainer: {
    marginBottom: 24,
  },
  logoPlaceholder: {
    color: colors.primary,
    fontSize: 100,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.textMain,
    marginBottom: 12,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    color: colors.textMuted,
    textAlign: 'center',
    marginBottom: 40,
    paddingHorizontal: 16,
    lineHeight: 20,
  },
  buttonContainer: {
    width: '100%',
    gap: 12,
  },
});