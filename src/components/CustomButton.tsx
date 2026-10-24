import { Pressable, Text, StyleSheet } from "react-native";
import { colors } from "../theme/colors";


export default function CustomButton(props: any) {
    const isPrimary = props.variant === 'primary';

    return (
        <Pressable 
            style={[styles.botao, isPrimary ? styles.primario : styles.outline]} 
            onPress={() => {
                if (props.navigateTo && props.targetScreen) {
                    props.navigateTo(props.targetScreen, 
                        props.data.emergencyProtocol ? { 
                            emergency: props.data.emergencyProtocol, 
                            location: props.data.location } : undefined);
                } else if (props.navigateTo) {
                    props.navigateTo();
                }
            }}
        >
            <Text style={[styles.textoBotao, isPrimary ? styles.textoPrimario : styles.textoOutline]}>
                {props.title}
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