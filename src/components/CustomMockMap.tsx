import { 
    View, 
    Text, 
    StyleSheet } from 'react-native';
    
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { colors } from '../theme/colors';

export default function CustomMockMap(props: any) {
    return (

        <View>

            <View style={styles.mapBox}>
                <MaterialCommunityIcons
                    name="map-marker"
                    style={styles.mapIcon}
                />
                <Text style={styles.mapText}>
                    [ Simulação do Google Maps ]
                </Text>
            </View>

            <Text style={styles.description}>
                O socorro será enviado para o endereço detectado acima. Confirme para iniciar as instruções de primeiros socorros.
            </Text>

        </View>

    );
}

const styles = StyleSheet.create({
    title: {
        color: colors.primary,
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 16,
        marginBottom: 24,
    },
    mapBox: {
        height: 240,
        backgroundColor: '#EAEAEA',
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 16,
    },
    mapIcon: {
        color: colors.primary,
        fontSize: 40,
        marginBottom: 8,
    },
    mapText: {
        color: colors.textMuted,
        fontSize: 14,
    },
    description: {
        color: colors.textMain,
        fontSize: 14,
        lineHeight: 20,
        textAlign: 'center',
        marginTop: 8,
        marginBottom: 20,
    },
});
