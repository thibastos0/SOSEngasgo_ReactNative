import { StyleSheet } from 'react-native';
import { colors } from './colors';

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        justifyContent: 'center',
    },
    content: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 20,
    },
    containerTop: {
        flex: 1,
        backgroundColor: colors.background,
        paddingTop: 40,
    },
    containerSpaceBetween: {
        flex: 1,
        backgroundColor: colors.background,
        padding: 24,
        justifyContent: 'space-between',
    },
    buttonContainer: {
        width: '100%',
        marginBottom: 8,
    },
    card: {
        backgroundColor: colors.cardBackground,
        borderRadius: 16,
        padding: 16,
        marginVertical: 12,
        width: '100%',
        elevation: 3,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 6,
    },
     title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: colors.primary,
        textAlign: 'center',
        marginBottom: 32,
    },
    titleMain: {
        fontSize: 16,
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
    logoContainer: {
        marginBottom: 32,
    },
    logoContent: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
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
    footerContainer: {
        width: '100%',
        paddingVertical: 12,
        paddingHorizontal: 16,
        backgroundColor: colors.footerBackground || '#F5E8E8',
        alignItems: 'center',
        justifyContent: 'center',
        borderTopWidth: 1,
        borderTopColor: '#E0E0E0',
        marginTop: 'auto', // Garante alinhamento na base em layouts flex
    },
    footerContent: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
        marginBottom: 4,
    },
    footerText: {
        fontSize: 12,
        color: colors.footerText || '#757575',
        textAlign: 'center',
    },
    footerLinkText: {
        fontSize: 12,
        fontWeight: 'bold',
        color: colors.primary,
    },
});