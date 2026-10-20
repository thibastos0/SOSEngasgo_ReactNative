import { View, Text, Pressable } from 'react-native';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { colors } from '../theme/colors';
import { globalStyles } from '../theme/globalStyles';

export default function Header(props: any) {
    const navigation = useNavigation<any>();

    const handleOpenDrawer = () => {
        navigation.dispatch(DrawerActions.openDrawer());
    };

    return (
        <View style={globalStyles.headerContainer}>
            {props.showBack ? (
                <Pressable onPress={() => navigation.goBack()}>
                    <MaterialCommunityIcons
                        name="arrow-left"
                        size={24}
                        color={colors.primary}
                    />
                </Pressable>
            ) : props.showMenu ? (
                <Pressable onPress={handleOpenDrawer}>
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

            <Text style={globalStyles.headerTitle}>
                {props.title || 'SOS Engasgo'}
            </Text>

            {props.showAuth ? (
                <Pressable onPress={() => navigation.navigate('Login')}>
                    <MaterialCommunityIcons
                        name="account-circle-outline"
                        size={28}
                        color={colors.primary}
                    />
                </Pressable>
            ) : (
                <View style={{ width: 24 }} />
            )}
        </View>
    );
}
