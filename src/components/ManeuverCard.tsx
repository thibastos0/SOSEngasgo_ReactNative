import { View, Text, Image, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { colors } from '../theme/colors';
import { globalStyles } from '../theme/globalStyles';

export default function ManeuverCard(props: any) {
    return (
        <View style={[globalStyles.card, styles.card]}>
            <Text style={styles.title}>{props.title}</Text>

            {props.imageSource ? (
                <Image
                    source={props.imageSource}
                    style={styles.maneuverImage}
                    resizeMode="contain"
                />
            ) : (
                <View style={styles.imagePlaceholder}>
                    <MaterialCommunityIcons
                        name="medical-bag"
                        style={styles.placeholderIcon}
                    />
                    <Text style={styles.placeholderText}>
                        [ Ilustração da Manobra ]
                    </Text>
                </View>
            )}

            <View style={styles.instructionBox}>
                <Text style={styles.instructionText}>
                    {props.instruction}
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: colors.cardBackground,
        borderRadius: 16,
        padding: 16,
        marginVertical: 12,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: colors.textMain,
        marginBottom: 12,
    },
    maneuverImage: {
        height: 160,
        width: '100%',
        borderRadius: 10,
    },
    imagePlaceholder: {
        backgroundColor: '#F0F0F0',
        height: 160,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    placeholderIcon: {
        color: colors.primary,
        fontSize: 36,
        marginBottom: 8,
    },
    placeholderText: {
        color: colors.textMuted,
        fontSize: 14,
    },
    instructionBox: {
        backgroundColor: '#FFF8F8',
        borderLeftWidth: 4,
        borderLeftColor: colors.primary,
        padding: 12,
        borderRadius: 8,
        marginTop: 12,
    },
    instructionText: {
        fontSize: 15,
        color: colors.textMain,
        lineHeight: 22,
    },
});

