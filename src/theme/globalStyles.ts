import { StyleSheet } from 'react-native';
import { colors } from './colors';

export const globalStyles = StyleSheet.create({
    // 1. Contêineres de Layout
    container: {
        flex: 1,
        backgroundColor: colors.background,
        paddingTop: 40,
    },
    content: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 16,
    },
    containerSpaceBetween: {
        flex: 1,
        backgroundColor: colors.background,
        padding: 24,
        justifyContent: 'space-between',
    },
    badgeContainer: {
        backgroundColor: '#f0f9ff',
        borderColor: '#0284c7',
        borderWidth: 1,
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 20,
        marginVertical: 12,
    },
    scrollContent: {
        flexGrow: 1,
        paddingHorizontal: 20,
        paddingTop: 16,
        paddingBottom: 24,
        justifyContent: 'center',
    },

    // 2. Tipografia Padrão
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: colors.primary,
        textAlign: 'center',
        marginTop: 16,
        marginBottom: 24,
    },
    titleMain: {
        fontSize: 22,
        fontWeight: 'bold',
        color: colors.textMain,
        textAlign: 'center',
        marginBottom: 12,
    },
    subtitle: {
        fontSize: 14,
        color: colors.textMuted,
        textAlign: 'center',
        marginBottom: 24,
        paddingHorizontal: 16,
        lineHeight: 20,
    },
    descriptionText: {
        fontSize: 14,
        color: colors.textMain,
        textAlign: 'center',
        lineHeight: 20,
        marginBottom: 16,
    },

    // 3. Cartões e Superfícies
    card: {
        backgroundColor: colors.cardBackground,
        borderRadius: 16,
        padding: 20,
        marginVertical: 12,
        width: '100%',
        elevation: 3,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 6,
    },
    cardStatus: {
        backgroundColor: '#ffffff',
        padding: 16,
        borderRadius: 12,
        marginBottom: 16,
        alignItems: 'center',
        elevation: 2,
    },

    // 4. Ações e Envelopes de Botões
    buttonContainer: {
        width: '100%',
        marginVertical: 8,
        gap: 4,
    },

    // 5. Elementos de Autenticação e Links
    logoContainer: {
        marginBottom: 24,
    },
    logoContent: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        paddingHorizontal: 20,
    },
    logoPlaceholder: {
        color: colors.primary,
        fontSize: 100,
        textAlign: 'center',
        marginBottom: 24,
    },
    linkContainer: {
        marginTop: 20,
        alignItems: 'center',
    },
    linkText: {
        color: colors.textMuted,
        fontSize: 14,
    },

    // 6. Cabeçalho e Rodapé
    headerContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 12,
        backgroundColor: colors.background,
        borderBottomWidth: 1,
        borderBottomColor: '#E0E0E0',
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.primary,
        textAlign: 'center',
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
        marginTop: 'auto',
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

    // 7. Emergency Estilos
    badgeText: {
        color: '#0369a1',
        fontWeight: 'bold',
        fontSize: 16,
    },
    protocolText: {
        fontSize: 12,
        color: '#64748b',
    },
    locationText: {
        fontSize: 12,
        color: '#64748b',
        marginTop: 4,
    },

    // 8. Microfone e Áudio
    micArea: {
        alignItems: 'center',
        marginVertical: 20,
    },
    micText: {
        fontSize: 14,
        color: '#475569',
        marginBottom: 10,
        fontWeight: '600',
    },
    micButton: {
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: colors.notRecording,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 4,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    micButtonRecording: {
        backgroundColor: colors.recording,
        transform: [{ scale: 1.1 }],
    },
    micIcon: {
        fontSize: 24,
    },

});
