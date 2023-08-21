import {StyleSheet} from 'react-native';
import colors from './colors';
export const globalStyles = StyleSheet.create({
  input: {
    height: 53,
    backgroundColor: colors.primary,
    paddingHorizontal: 15,
    borderRadius: 8,
    marginTop: 20,
  },

  textDark: {
    color: colors.black,
  },
});
