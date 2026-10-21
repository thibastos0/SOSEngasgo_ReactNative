import {
    KeyboardAvoidingView,
    View,
    Text,
    Platform,
    ScrollView,
    Keyboard,
    Alert,
} from 'react-native';
import { useState } from 'react';

import CustomButton from '../components/CustomButton';
import CustomInput from '../components/CustomInput';

import Footer from '../components/Footer';
import Header from '../components/Header';

import { globalStyles } from '../theme/globalStyles';

export default function RegisterScreen(props: any) {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');

    const handleRegister = () => {
        Keyboard.dismiss();

        if (!nome.trim() || !email.trim() || !senha.trim() || !confirmarSenha.trim()) {
            const errorMsg = 'Por favor, preencha todos os campos.';
            if (Platform.OS === 'web') {
                window.alert(errorMsg);
            } else {
                Alert.alert('Atenção', errorMsg);
            }
            return;
        }

        if (senha !== confirmarSenha) {
            const errorMsg = 'As senhas não coincidem.';
            if (Platform.OS === 'web') {
                window.alert(errorMsg);
            } else {
                Alert.alert('Atenção', errorMsg);
            }
            return;
        }

        const successMsg = 'Usuário cadastrado com sucesso!';
        if (Platform.OS === 'web') {
            window.alert(successMsg);
        } else {
            Alert.alert('Sucesso', successMsg);
        }

        props.navigation.goBack();
    };

    return (
        <KeyboardAvoidingView
            style={globalStyles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        >
            <Header
                title="Cadastro"
                showBack={true}
            />

            <ScrollView
                keyboardShouldPersistTaps="handled"
                contentContainerStyle={globalStyles.scrollContent}
            >
                <Text style={globalStyles.title}>Cadastrar Usuário</Text>

                <CustomInput
                    placeholder="Nome Completo"
                    value={nome}
                    onChangeText={setNome}
                />
                <CustomInput
                    placeholder="nome@exemplo.com"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                    textContentType="emailAddress"
                    autoComplete="email"
                    value={email}
                    onChangeText={setEmail}
                />
                <CustomInput
                    placeholder="Sua senha"
                    secureTextEntry
                    textContentType="password"
                    autoComplete="password"
                    value={senha}
                    onChangeText={setSenha}
                />
                <CustomInput
                    placeholder="Confirme sua senha"
                    secureTextEntry
                    textContentType="password"
                    autoComplete="password"
                    value={confirmarSenha}
                    onChangeText={setConfirmarSenha}
                />

                <View style={globalStyles.buttonContainer}>
                    <CustomButton
                        variant="primary"
                        title="Salvar"
                        navigateTo={handleRegister}
                    />

                    <CustomButton
                        title="Cancelar"
                        variant="outline"
                        navigateTo={() => {
                            Keyboard.dismiss();
                            props.navigation.goBack();
                        }}
                    />
                </View>
            </ScrollView>

            <Footer />
        </KeyboardAvoidingView>
    );
}
