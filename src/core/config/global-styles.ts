import {StyleSheet} from 'react-native';
import colors from './colors';
import {RFPercentage} from 'react-native-responsive-fontsize';
const regularFontFamily = 'NunitoSans-Regular';
const boldFontFamily = 'NunitoSans-Bold';
export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  paragraph: {
    fontSize: RFPercentage(1.8),
    fontFamily: regularFontFamily,
  },
  small: {
    fontSize: RFPercentage(1.6),
    fontFamily: regularFontFamily,
  },
  smaller: {
    fontSize: RFPercentage(1.2),
    fontFamily: regularFontFamily,
  },
  smallest: {
    fontSize: RFPercentage(0.9),
    fontFamily: regularFontFamily,
  },
  header: {
    fontSize: RFPercentage(3.9),
    fontFamily: 'NunitoSans-ExtraBold',
  },
  heading1: {
    fontSize: RFPercentage(2.9),
    fontFamily: regularFontFamily,
  },
  heading2: {
    fontSize: RFPercentage(2.7),
    fontFamily: regularFontFamily,
  },
  heading3: {
    fontSize: RFPercentage(2.5),
    fontFamily: regularFontFamily,
  },
  heading4: {
    fontSize: RFPercentage(2.3),
    fontFamily: regularFontFamily,
  },
  heading5: {
    fontSize: RFPercentage(2.1),
    fontFamily: regularFontFamily,
  },
  heading6: {
    fontSize: RFPercentage(2.0),
    fontFamily: regularFontFamily,
  },
  input: {
    height: 53,
    backgroundColor: colors.primary,
    paddingHorizontal: 15,
    borderRadius: 8,
    marginTop: 20,
  },
  fontWeightBold: {
    fontFamily: boldFontFamily,
  },
  fontWeightNormal: {
    fontFamily: regularFontFamily,
  },
  textDark: {
    color: colors.black,
  },
});
