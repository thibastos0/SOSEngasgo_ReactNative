import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text,Pressable } from 'react-native';
import { colors } from '../theme/colors';
import CustomButton from '../components/CustomButton';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import CustomInput from '../components/CustomInput';
import { globalStyles } from '../theme/globalStyles';

export default function LoginScreen() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const navigation = useNavigation();

    return (
        <View style={globalStyles.container}>
            <MaterialCommunityIcons 
            	name="heart-pulse"
            	style={globalStyles.logoPlaceholder} />
            
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

            <CustomButton 
                title="Entrar" 
                onClick={() => navigation.navigate('Home')} 
            />

            <CustomButton 
                title="Entrar com o Google" 
                variant="outline" 
                onClick={() => {}} 
            />

            <Pressable onPress={() => navigation.navigate('Register')} style={globalStyles.linkContainer}>
                <Text style={globalStyles.linkText}>Ainda não tem conta? Clique aqui</Text>
            </Pressable>
        </View>
    );
}

