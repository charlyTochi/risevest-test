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
import {TellUsMoreForm} from './TellUsMoreForm';

export const TellUsMore = (props: any) => {
  const {navigation} = props;
  return (
    <KeyboardAvoidingView style={styles.keyboardViewStyle}>
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
            Tell Us More About You
          </Text>

          <Text style={styles.description}>
            Please use your name as it appears on your ID.
          </Text>
        </View>

        <TellUsMoreForm navigation={navigation} />

        <View style={styles.firstTextView}>
          <Text style={styles.tc1}>
            By clicking continue, you agree to our{' '}
          </Text>
          <Text style={styles.tc2}>
            <Text>Terms & Conditions</Text> <Text style={styles.tc1}>and</Text>{' '}
            <Text style={styles.tc2}>Privacy Policy</Text>
          </Text>
        </View>
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
    marginTop: 10,
    lineHeight: 22,
  },
  firstTextView: {
    marginTop: 20,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  tc1: {
    color: colors.black,
    fontFamily: 'DMSans Regular',
  },
  tc2: {
    color: colors.primary,
    fontFamily: 'DMSans Regular',
  },
});
