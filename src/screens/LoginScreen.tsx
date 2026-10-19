import { 
    View, 
    Text,
    Pressable } from 'react-native';

import CustomButton from '../components/CustomButton';
import CustomInput from '../components/CustomInput';
import { globalStyles } from '../theme/globalStyles';

import { useState } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function LoginScreen( props: any ) {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

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
                variant="primary"
                title="Entrar" 
                navigateTo={props.navigation.navigate}
                targetScreen="Home"
            />

            <CustomButton 
                variant="outline" 
                title="Entrar com o Google" 
                navigateTo={() => {}} //TODO: Implementar login com Google
            />

            <Pressable 
                onPress={() => props.navigation.navigate('Register')} 
                style={globalStyles.linkContainer}>
                <Text style={globalStyles.linkText}>
                    Ainda não tem conta? Clique aqui
                </Text>
            </Pressable>
        </View>
    );
}

