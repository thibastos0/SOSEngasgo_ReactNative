import { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Pressable } from 'react-native';
import { colors } from '../theme/colors';
import CustomButton from '../components/CustomButton';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import CustomInput from '../components/CustomInput';

export default function LoginScreen({ navigation }: any) {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    return (
        <View style={styles.container}>
            <MaterialCommunityIcons 
            	name="heart-pulse"
            	style={styles.logoPlaceHolder} />
            
            <CustomInput
                placeholder="Usuário (E-mail)"
                value={email}
                onChangeText={setEmail}
            />
            <CustomInput
                placeholder="Sua senha"
                secureTextEntry
                value={senha}
                onChangeText={setSenha}
            />

            <CustomButton title="Entrar" onClick={() => navigation.navigate('Home')} />
            <CustomButton title="Entrar com o Google" variant="outline" onClick={() => {}} />

            <Pressable onPress={() => navigation.navigate('Register')} style={styles.linkContainer}>
                <Text style={styles.linkText}>Ainda não tem conta? Clique aqui</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        justifyContent: 'center',
        padding: 24,
    },
    logoPlaceHolder: {
    	color: colors.primary,
    	fontSize: 100,
        textAlign: 'center',
        marginBottom: 32,
    },
    linkContainer: {
        marginTop: 20,
        alignItems: 'center',
    },
    linkText: {
        color: colors.textMuted,
        fontSize: 14,
    },
});