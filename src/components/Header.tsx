import { 
    View, 
    Text, 
    Pressable, 
    StyleSheet } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';

import { colors } from '../theme/colors';
import { globalStyles } from '../theme/globalStyles';

export default function Header(props: any) {
    const title = props.title || 'SOS Engasgo';

    return (
        <View style={[globalStyles.headerContainer, styles.container]}>
            <View style={styles.sideContainer}>
                {props.showMenuButton ? (
                    <Pressable onPress={() => props.navigation?.openDrawer()}>
                        <MaterialCommunityIcons
                            name="menu"
                            size={28}
                            color={colors.primary}
                        />
                    </Pressable>
                ) : (
                    <MaterialCommunityIcons
                        name="heart-pulse"
                        size={28}
                        color={colors.primary}
                    />
                )}
            </View>

            <Text style={globalStyles.headerTitle}>{title}</Text>

            <View style={[styles.sideContainer, styles.rightSide]}>
                {props.showAuthButton && (
                    <Pressable onPress={() => props.navigation?.navigate('Login')}>
                        <MaterialCommunityIcons
                            name="account-circle-outline"
                            size={28}
                            color={colors.primary}
                        />
                    </Pressable>
                )}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    sideContainer: {
        width: 36,
         justifyContent: 'center',
        alignItems: 'flex-start',
    },
    rightSide: {
        alignItems: 'flex-end',
    },
});

