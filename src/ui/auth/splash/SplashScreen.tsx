import React from 'react';
import {Image, Text, View, StyleSheet} from 'react-native';
import colors from '../../../core/config/colors';

export const Splash = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../../../assets/images/logo.png')}
        style={styles.logo}
      />
      <Text style={styles.text}>Dollar investments that</Text>
      <Text style={styles.text}>help you grow</Text>
      <View style={styles.footer}>
        <Text style={styles.footerText}>All rights reserved</Text>
        <Text style={styles.footerText}>(c) 2021</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.teal,
    flex: 1,
    alignItems: 'center',
  },
  logo: {
    resizeMode: 'contain',
    width: '100%',
    marginTop: '20%',
  },
  text: {
    textAlign: 'center',
    fontFamily: 'Hanken Grotesk Regular',
    fontSize: 18,
    color: colors.white,
    fontWeight: '400',
  },
  footer: {
    position: 'absolute',
    bottom: 30,
  },
  footerText: {
    textAlign: 'center',
    fontFamily: 'Hanken Grotesk Regular',
    color: colors.white,
    fontSize: 12,
    fontWeight: '400',
  },
});
