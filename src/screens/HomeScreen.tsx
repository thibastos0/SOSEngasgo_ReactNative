import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { colors } from '../theme/colors';

export default function HomeScreen({ navigation }: any) {
    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <Text style={styles.headerLogo}>➕</Text>
                <Text style={styles.headerTitle}>SOS Engasgo</Text>
            </View>

            {/* Cartão Central */}
            <View style={styles.card}>
                <Text style={styles.cardTitle}>Emergência</Text>
                <Text style={styles.cardSub}>Em caso de engasgo, pressione o botão abaixo imediatamente</Text>

                <Pressable 
                    style={styles.botaoAcionar}
                    onPress={() => navigation.navigate('ConfirmLocation')}
                >
                    <Text style={styles.textoAcionar}>ACIONAR</Text>
                </Pressable>

                <Text style={styles.cardFooter}>Toque para acionar socorro.</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({container: {
        flex: 1,
        backgroundColor: colors.background,
        padding: 16,
        paddingTop: 40,
    },
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