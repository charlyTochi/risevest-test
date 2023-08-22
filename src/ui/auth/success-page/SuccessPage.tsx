import React from 'react';
import {Image, Text, View, StyleSheet} from 'react-native';
import colors from '../../../core/config/colors';
import AppBtn from '../../components/AppBtn';

export const SuccessPage = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../../../assets/images/onboarding/success.png')}
        style={styles.logo}
      />
      <Text style={styles.text}>You just created your {'\n'} Rise account</Text>
      <Text style={styles.desc}>
        Welcome to Rise, let's take {'\n'} you home
      </Text>
      <View style={styles.footer}>
        <AppBtn
          title="Okay"
          moreButtonStyles={{width: 350}}
          onPress={() => console.log('hiii')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
    alignItems: 'center',
  },
  logo: {
    resizeMode: 'contain',
    width: '100%',
    marginTop: '40%',
  },
  text: {
    textAlign: 'center',
    fontFamily: 'Hanken Grotesk Regular',
    fontSize: 20,
    color: colors.black,
    fontWeight: '400',
    marginTop: 30,
  },
  desc: {
    textAlign: 'center',
    fontFamily: 'Hanken Grotesk Regular',
    fontSize: 15,
    color: colors.darkGrey,
    fontWeight: '400',
    marginTop: 10,
  },
  footer: {
    position: 'absolute',
    bottom: 50,
    alignItems: 'center',
  },
  footerText: {
    textAlign: 'center',
    fontFamily: 'Hanken Grotesk Regular',
    color: colors.black,
    fontSize: 12,
    fontWeight: '400',
  },
});
