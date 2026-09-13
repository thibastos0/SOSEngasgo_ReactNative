import { StyleSheet } from 'react-native';
import { colors } from './colors';

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        padding: 24,
        justifyContent: 'center',
    },
    containerTop: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 16,
    paddingTop: 40,
},
    containerSpaceBetween: {
        flex: 1,
        backgroundColor: colors.background,
        padding: 24,
        justifyContent: 'space-between',
    },
    containerScroll: {
        flexGrow: 1,
        backgroundColor: colors.background,
        padding: 20,
        alignItems: 'center',
    },
     title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: colors.primary,
        textAlign: 'center',
        marginBottom: 32,
    },
    titleMain: {
        fontSize: 24,
        fontWeight: 'bold',
        color: colors.textMain,
        textAlign: 'center',
        marginBottom: 12,
    },
    subtitle: {
        fontSize: 14,
        color: colors.textMuted,
        textAlign: 'center',
        marginBottom: 40,
        paddingHorizontal: 16,
        lineHeight: 20,
    },
    card: {
        backgroundColor: colors.cardBackground,
        borderRadius: 16,
        padding: 20,
        alignItems: 'center',
        width: '100%',
        elevation: 3,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 6,
        marginBottom: 16,
    },
    logoPlaceholder: {
        color: colors.primary,
        fontSize: 100,
        textAlign: 'center',
        marginBottom: 32,
    },
    linkContainer: {
        marginTop: 20,
        alignItems: 'center',
    },
    linkText: {
        color: colors.textMuted,
        fontSize: 14,
    },
});