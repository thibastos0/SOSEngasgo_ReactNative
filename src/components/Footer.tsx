import { View, Text, Pressable, Platform, Linking } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { globalStyles } from '../theme/globalStyles';
import { colors } from '../theme/colors';

export default function Footer(props: any) {
    const repoUrl = 'https://github.com/thibastos0/SOSEngasgo_ReactNative';

    const handleOpenRepo = () => {
        if (Platform.OS === 'web') {
            window.open(repoUrl, '_blank');
        } else {
            Linking.openURL(repoUrl);
        }
    };

    return (
        <View style={globalStyles.footerContainer}>
            <Pressable style={globalStyles.footerContent} onPress={handleOpenRepo}>
                <MaterialCommunityIcons
                    name="github"
                    size={18}
                    color={colors.githubIcon || '#333'}
                />
                <Text style={globalStyles.footerLinkText}>
                    Ver Repositório no GitHub
                </Text>
            </Pressable>

            <Text style={globalStyles.footerText}>
                © 2026 SOS Engasgo — Projeto Acadêmico FATEC
            </Text>
        </View>
    );
}

