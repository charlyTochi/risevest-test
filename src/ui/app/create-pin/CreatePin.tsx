import React, {useState, useEffect} from 'react';
import {
  View,
  Pressable,
  Text,
  TextInput,
  StyleSheet,
  Image,
} from 'react-native';
import colors from '../../../core/config/colors';
import {globalStyles} from '../../../core/config/global-styles';
import routes from '../../../routes/routes';

export const CreatePin = props => {
  const {navigation} = props;

  const [otp, setOtp] = useState('');

  const handleNumberPress = (number: string) => {
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

  const verifyOtp = () => {
    navigation.navigate(routes.successPage, {
      screen: 'auth',
      title: 'You’ve created your PIN',
      description:
        'Keep your account safe with your secret PIN. Do not share this PIN with anyone.',
    });
  };

  useEffect(() => {
    if (otp.length === 6) {
      verifyOtp();
    }
  }, [otp]);

  const codeInputStyles = Array.from({length: 6}, (_, index) => {
    return otp.length > index
      ? {...styles.codeInput, borderColor: colors.primary}
      : {...styles.codeInput, borderColor: colors.offWhite};
  });

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
      <View style={styles.otpInput}>
        {codeInputStyles.map((inputStyle, index) => (
          <TextInput
            key={index}
            style={inputStyle}
            value={otp[index] || ''}
            secureTextEntry={true}
            keyboardType="numeric"
            maxLength={1}
          />
        ))}
      </View>
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
          <Image
            source={require('../../../../assets/images/delete.png')}
            style={{marginTop: 8}}
          />
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
    color: colors.black,
    borderRadius: 10,
    borderWidth: 2,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginHorizontal: 9,
    textAlign: 'center'
  },
  otpInput: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
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
    alignItems: 'center',
    backgroundColor: colors.offWhite,
  },
  nonClickableButton: {
    backgroundColor: '#EEE',
  },
  deleteButton: {
    padding: 10,
    margin: 5,
    width: '30%',
    borderRadius: 25,
    alignItems: 'center',
    backgroundColor: colors.offWhite,
  },
  numberButtonText: {
    fontSize: 30,
    color: colors.primary,
    fontWeight: '700',
  },
});
