import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { 
    KeyboardAvoidingView, 
    Text, 
    Platform, 
    ScrollView, 
    Keyboard,
    Alert
} from 'react-native';
import CustomButton from '../components/CustomButton';
import CustomInput from '../components/CustomInput';
import { globalStyles } from '../theme/globalStyles';

export default function RegisterScreen() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');

    const navigation = useNavigation();

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

        navigation.goBack();
    };

    return (
        <KeyboardAvoidingView
            style={globalStyles.container}
            behavior={
                Platform.OS === 'ios' 
                    ? 'padding' 
                    : undefined
            }
        >
            <ScrollView
                keyboardShouldPersistTaps="handled"
                contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}
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
                    value={email}
                    onChangeText={setEmail}
                />
                <CustomInput
                    placeholder="Sua senha"
                    secureTextEntry
                    value={senha}
                    onChangeText={setSenha}
                />
                <CustomInput
                    placeholder="Confirme sua senha"
                    secureTextEntry
                    value={confirmarSenha}
                    onChangeText={setConfirmarSenha}
                />

                <CustomButton
                    title="Salvar"
                    onClick={handleRegister}
                />

                <CustomButton
                    title="Cancelar"
                    variant="outline"
                    onClick={() => {
                        Keyboard.dismiss();
                        navigation.goBack();
                    }}
                />
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

