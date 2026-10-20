import { 
    Pressable,
     Text, 
     StyleSheet, 
     View } from "react-native";

import { colors } from "../theme/colors";

export default function CustomEmergencyCard(props: any) {

    return (
        <View style={styles.card}>
            <Text style={styles.cardTitle}>
                {props.cardTitle}
            </Text>
            <Text style={styles.cardSub}>{props.cardSubTitle}</Text>

            <Pressable 
                style={styles.botaoAcionar}
                onPress={() => {
                    if (props.navigateTo && props.targetScreen) {
                        props.navigateTo(props.targetScreen);
                    } else if (props.navigateTo) {
                        props.navigateTo();
                    }
                }}
            >                    
                <Text style={styles.textoAcionar}>{props.buttonText}</Text>
            </Pressable>

            <Text style={styles.cardFooter}>{props.cardFooter}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    headerLogo: {
        fontSize: 18,
        marginRight: 6,
        color: colors.primary,
    },
    headerTitle: {
        color: colors.primary,
        fontWeight: 'bold',
        fontSize: 16,
    },
    card: {
        backgroundColor: colors.cardBackground,
        borderRadius: 20,
        padding: 24,
        alignItems: 'center',
        elevation: 4,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 8,
        marginTop: 20,
    },
    cardTitle: {
        fontSize: 26,
        fontWeight: 'bold',
        color: colors.primary,
        marginBottom: 10,
    },
    cardSub: {
        fontSize: 14,
        color: colors.textMuted,
        textAlign: 'center',
        marginBottom: 30,
    },
    botaoAcionar: {
        width: 160,
        height: 160,
        borderRadius: 80,
        backgroundColor: colors.primaryDark,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 6,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 6,
        marginBottom: 16,
    },
    textoAcionar: {
        color: colors.white,
        fontSize: 22,
        fontWeight: 'bold',
    },
    cardFooter: {
        fontSize: 12,
        color: colors.textMuted,
    },
});