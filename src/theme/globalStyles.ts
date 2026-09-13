import { StyleSheet } from 'react-native';
import { colors } from './colors';

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        padding: 24,
        justifyContent: 'center',
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
    },});