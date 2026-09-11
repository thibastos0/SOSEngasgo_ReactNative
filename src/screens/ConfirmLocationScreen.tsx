import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../theme/colors';

export default function ConfirmLocationScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Confirmar Localização</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        padding: 24,
    },
    title: {
        marginTop: 20,
        color: colors.primary,
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});
