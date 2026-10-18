import { TextInput, TextInputProps, StyleSheet, View } from 'react-native';
import { colors } from '../theme/colors';

export default function CustomInput({ placeholder, ...rest }: TextInputProps) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor={colors.borderInput}
        {...rest}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginVertical: 10,
  },
  input: {
    height: 48,
    borderBottomWidth: 1,
    borderBottomColor: colors.borderInput,
    fontSize: 16,
    color: colors.textMain,
    paddingHorizontal: 4,
    marginBottom: 16,
  },
});