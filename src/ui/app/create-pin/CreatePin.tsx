import React, {useState} from 'react';
import {View, Pressable, Text, StyleSheet, Image} from 'react-native';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import colors from '../../../core/config/colors';
import {globalStyles} from '../../../core/config/global-styles';

export const CreatePin = () => {
  const [otp, setOtp] = useState('');

  const handleNumberPress = number => {
    if (number !== '.') {
      if (otp.length < 6) {
        setOtp(otp + number);
      }
    }
  };

  const handleDelete = () => {
    if (otp.length > 0) {
      setOtp(otp.slice(0, -1));
    }
  };

  const verifyOtp = value => {
    console.log(value);
  };

  return (
    <View style={styles.container}>
      <View style={styles.createAccountView}>
        <Text
          style={{
            ...globalStyles.header,
            color: colors.black,
          }}>
          Confirm 6-digit PIN
        </Text>

        <Text style={styles.description}>
          You’ll use this PIN to sign in and confirm transactions
        </Text>
      </View>
      <OTPInputView
        style={styles.otpInput}
        pinCount={6}
        autoFocusOnLoad={false}
        code={otp}
        codeInputFieldStyle={styles.codeInput}
        onCodeChanged={code => setOtp(code)}
        onCodeFilled={code => {
          verifyOtp(code);
        }}
      />
      <View style={styles.numberContainer}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, '.', 0].map(number => (
          <Pressable
            key={number}
            onPress={() => handleNumberPress(number)}
            style={[
              styles.numberButton,
              number === '.' && styles.nonClickableButton,
            ]}
            disabled={number === '.'}>
            <Text style={styles.numberButtonText}>{number}</Text>
          </Pressable>
        ))}
        <Pressable onPress={handleDelete} style={styles.deleteButton}>
          <Image source={require('../../../../assets/images/delete.png')} />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
  },
  createAccountView: {
    marginHorizontal: 20,
  },
  description: {
    ...globalStyles.description,
    color: colors.darkGrey,
    marginTop: 10,
    lineHeight: 22,
  },
  codeInput: {
    borderColor: colors.primary,
    color: colors.black,
  },
  otpInput: {
    width: '90%',
    height: 100,
    marginHorizontal: 20,
  },
  numberContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 80,
  },
  numberButton: {
    padding: 10,
    margin: 5,
    width: '30%',
    borderRadius: 100,
    borderWidth: 1,
    borderColor: '#000',
    alignItems: 'center',
  },
  nonClickableButton: {
    backgroundColor: '#EEE',
  },
  deleteButton: {
    padding: 10,
    margin: 5,
    width: '30%',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: colors.primary,
    alignItems: 'center',
  },
  numberButtonText: {
    fontSize: 18,
  },
});
