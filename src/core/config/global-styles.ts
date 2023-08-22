import {StyleSheet} from 'react-native';
import colors from './colors';
import {RFPercentage} from 'react-native-responsive-fontsize';

export const globalStyles = StyleSheet.create({
  input: {
    height: 53,
    paddingHorizontal: 15,
    borderRadius: 8,
    marginTop: 20,
  },
  header: {
    fontSize: RFPercentage(3.0),
    fontFamily: 'Hanken-Grotesk-Medium',
    fontWeight: '600',
  },

  description: {
    fontSize: RFPercentage(1.9),
    fontFamily: 'Hanken-Grotesk-Medium',
    fontWeight: '400',
  },
  textDark: {
    color: colors.black,
  },
});
