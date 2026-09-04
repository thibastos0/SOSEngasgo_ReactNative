import { Pressable, Text, StyleSheet } from "react-native";
import { colors } from "../theme/colors";

interface ButtonProps {
    title: string;
    onClick?: () => void;
    variant?: 'primary' | 'outline';
}

export default function CustomButton({ title, onClick, variant = 'primary' }: ButtonProps) {
    const isPrimary = variant === 'primary';

    return (
        <Pressable 
            style={[styles.botao, isPrimary ? styles.primario : styles.outline]} 
            onPress={onClick}
        >
            <Text style={[styles.textoBotao, isPrimary ? styles.textoPrimario : styles.textoOutline]}>
                {title}
            </Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    botao: {
        height: 52,
        borderRadius: 26,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        marginVertical: 8,
    },
    primario: {
        backgroundColor: colors.primary,
    },
    outline: {
        backgroundColor: colors.white,
        borderWidth: 1.5,
        borderColor: colors.primary,
    },
    textoBotao: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    textoPrimario: {
        color: colors.white,
    },
    textoOutline: {
        color: colors.primary,
    },
});