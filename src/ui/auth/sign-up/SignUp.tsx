import React from 'react';
import {
  Text,
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
} from 'react-native';
import colors from '../../../core/config/colors';
import {globalStyles} from '../../../core/config/global-styles';
import {SignUpForm} from './SignUpForm';

export const SignUp = (props: any) => {
  const {navigation} = props;
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.keyboardViewStyle}>
      <ScrollView
        keyboardShouldPersistTaps={'handled'}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewStyle}>
        <View style={styles.createAccountView}>
          <Text
            style={{
              ...globalStyles.header,
              color: colors.black,
            }}>
            Create an account
          </Text>

          <Text style={styles.description}>
            Start building your dollar-denominated investment portfolio{' '}
          </Text>
        </View>

        <SignUpForm navigation={navigation} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  keyboardViewStyle: {
    paddingTop: 40,
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: '#fff',
  },
  scrollViewStyle: {
    flexGrow: 1,
    paddingHorizontal: 18,
  },
  createAccountView: {
    marginVertical: 20,
  },
  description: {
    ...globalStyles.description,
    color: colors.darkGrey,
    width: '80%',
    marginTop: 10,
    lineHeight: 22,
  },
});
