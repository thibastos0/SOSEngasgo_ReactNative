import { View, Text, Pressable } from 'react-native';
import { useState } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import CustomButton from '../components/CustomButton';
import CustomInput from '../components/CustomInput';

import Header from '../components/Header';
import Footer from '../components/Footer';

import { globalStyles } from '../theme/globalStyles';

export default function LoginScreen(props: any) {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    return (
        <View style={globalStyles.container}>
            <Header
                title="Entrar"
                showBack={true}
            />

            <View style={globalStyles.content}>
                <MaterialCommunityIcons
                    name="heart-pulse"
                    style={globalStyles.logoPlaceholder}
                />

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

                <View style={globalStyles.buttonContainer}>
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
                </View>

                <Pressable
                    onPress={() => props.navigation.navigate('Register')}
                    style={globalStyles.linkContainer}
                >
                    <Text style={globalStyles.linkText}>
                        Ainda não tem conta? Clique aqui
                    </Text>
                </Pressable>
            </View>

            <Footer />
        </View>
    );
}
