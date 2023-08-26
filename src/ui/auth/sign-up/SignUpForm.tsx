import React, {useContext, useEffect, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {Formik} from 'formik';
import colors from '../../../core/config/colors';
import AppBtn from '../../components/AppBtn';
import showToastUtil from '../../../core/utils/show-toast.util';
import {ResponseType} from '../../../core/enums/response-type.enum';
import Input from '../../components/AppInput';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import routes from '../../../routes/routes';
import {UserRegistrationContext} from '../../../core/context/UserRegistrationContext';

export const SignUpForm = (props: any) => {
  const {navigation} = props;
  const [showPassword, setShowPassword] = useState(false);
  const [isBusy, setIsBusy] = useState(false);
  const {regFormData = {}, setRegFormData} = useContext(
    UserRegistrationContext,
  );

  const handleSubmit = async (data: any) => {
    try {
      setRegFormData(data); //here we persist out data in context
      navigation.navigate(routes.tellUsMore);
    } catch (error: any) {
      showToastUtil(ResponseType.error);
      setIsBusy(false);
      return error;
    }
    setIsBusy(false);
  };

  useEffect(() => {}, [regFormData]);

  const validate = formValues => {
    const errors = {};
    if (!formValues.email) {
      errors['email'] = 'Required';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formValues.email)
    ) {
      errors['email'] = 'Invalid email address';
    }
    if (formValues.password.length < 8) {
      errors['password'] = 'Password length must be more than eight';
    } else if (
      !/^(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~])(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/.test(
        formValues.password,
      )
    ) {
      errors['password'] =
        'Password must contain at least one special character, one uppercase letter, one lowercase letter, one digit, and be at least 8 characters long.';
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

            {/* <Text style={styles.passwordText}>* Minimum of 8 characters</Text> */}

            <View style={styles.createAccountView}>
              <AppBtn
                title="Sign Up"
                onPress={formikprops.handleSubmit}
                isBusy={isBusy}
                isDisabled={
                  !formikprops.values.email ||
                  !formikprops.values.password ||
                  isBusy
                }
              />
            </View>
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
    color: colors.black,
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
