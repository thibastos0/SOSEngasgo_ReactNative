import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../theme/colors';

export default function ConfirmLocationScreen() {
    return (
        <><View style={styles.container}>
            <Text style={styles.title}>Confirmar Localização</Text>
        </View><Text style={styles.title}>Confirmar Localização</Text><View style={styles.mapBox}>
                <Text style={styles.mapText}>
                    [ Simulação do Google Maps ]
                </Text>
            </View><Text style={styles.description}>
                O socorro será enviado para o endereço detectado acima.
                Confirme para iniciar as instruções de primeiros socorros.
            </Text></>



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
    mapBox: {
    height: 180,
    backgroundColor: '#EAEAEA',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 16,
},
mapText: {
    color: colors.textMuted,
},
description: {
    color: colors.textMain,
    fontSize: 14,
    lineHeight: 20,
    textAlign: 'center',
    marginBottom: 20,
},

});
