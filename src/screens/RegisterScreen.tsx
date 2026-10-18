import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text } from 'react-native';
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
        // Mock de submissão de cadastro
        console.log('Dados cadastrados:', { nome, email });
    };

    return (
        <View style={globalStyles.container}>
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
                onClick={() => navigation.goBack()}
            />
        </View>
    );
}

