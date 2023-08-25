import React, {useContext, useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Formik} from 'formik';
import colors from '../../../core/config/colors';
import AppBtn from '../../components/AppBtn';
import showToastUtil from '../../../core/utils/show-toast.util';
import {ResponseType} from '../../../core/enums/response-type.enum';
import Input from '../../components/AppInput';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {createEntryNoHeader} from '../../../core/services/dataGenerator';
import {UserAccountContext} from '../../../core/context/UserAcccountContext';

export const LoginForm = (props: any) => {
  const {navigation} = props;
  const [showPassword, setShowPassword] = useState(false);
  const [isBusy, setIsBusy] = useState(false);
  const {
    setUsers = () => {},
    setLoginUserToken,
    setToken,
  } = useContext(UserAccountContext) ?? {};

  const handleSubmit = async (data: any) => {
    try {
      setIsBusy(true);

      createEntryNoHeader(
        'sessions',
        {email_address: data.email, password: data.password},
        (res: any, err: any) => {
          if (!err) {
            const response = res;
            setUsers(response.data);
            setToken(response.data.token);
            setLoginUserToken(response.data.token);
            setIsBusy(false);
          } else {
            setIsBusy(false);
            showToastUtil(ResponseType.error, 'Incorrect username or password');
          }
        },
      );
    } catch (error: any) {
      showToastUtil(ResponseType.error);
      setIsBusy(false);
      return error;
    }
    setIsBusy(false);
  };

  const validate = formValues => {
    const errors = {};
    if (!formValues.email) {
      errors['email'] = 'Required';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formValues.email)
    ) {
      errors['email'] = 'Invalid email address';
    }

    return errors;
  };

  return (
    <>
      <Formik
        validateOnChange={false}
        validate={values => validate(values)}
        initialValues={{
          email: '',
          password: '',
        }}
        onSubmit={values => {
          handleSubmit(values);
        }}>
        {formikprops => (
          <View style={styles.mainView}>
            <Input
              textInputProps={{
                placeholder: 'Email address',
                keyboardType: 'email-address',
                onChangeText: formikprops.handleChange('email'),
                value: formikprops.values.email,
              }}
              isError={formikprops.errors.email ? true : false}
              error={formikprops.errors.email}
              isVisible={formikprops.values.email.length > 0}
            />

            <Input
              textInputProps={{
                placeholder: 'Password',
                secureTextEntry: !showPassword,
                onChangeText: formikprops.handleChange('password'),
                value: formikprops.values.password.replace(/\s/g, ''),
              }}
              isError={formikprops.errors.password ? true : false}
              isVisible={formikprops.values.password.length > 0}
              error={formikprops.errors.password}
              suffixIcon={
                <FontAwesome
                  name={!showPassword ? 'eye-slash' : 'eye'}
                  size={20}
                  color={colors.primary}
                  onPress={() => setShowPassword(!showPassword)}
                />
              }
            />

            <View style={styles.createAccountView}>
              <AppBtn
                title="Sign In"
                onPress={formikprops.handleSubmit}
                isBusy={isBusy}
                isDisabled={
                  !formikprops.values.email ||
                  !formikprops.values.password ||
                  isBusy
                }
              />
            </View>

            <Text style={styles.passwordText}>I forgot my password</Text>
          </View>
        )}
      </Formik>
    </>
  );
};

const styles = StyleSheet.create({
  mainView: {
    marginVertical: 10,
  },
  passwordText: {
    marginBottom: 10,
    marginTop: 40,
    color: colors.primary,
    textAlign: 'center',
    fontFamily: 'DMSans Regular',
    fontWeight: '700',
    fontSize: 15,
  },
  instructionMainView: {
    marginTop: 20,
  },
  firstTextView: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
  },
  createAccountView: {
    marginTop: 20,
  },
});
