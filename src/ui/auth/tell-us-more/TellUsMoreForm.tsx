import React, {useContext, useEffect, useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Formik} from 'formik';
import colors from '../../../core/config/colors';
import AppBtn from '../../components/AppBtn';
import showToastUtil from '../../../core/utils/show-toast.util';
import {ResponseType} from '../../../core/enums/response-type.enum';
import Input from '../../components/AppInput';
import PhoneCodeDropdown from '../../components/PhoneCodeDropdown';
import {Countries} from '../../../core/constants/countries';
import ModalSelect from '../../components/ModalSelect';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {UserRegistrationContext} from '../../../core/context/UserRegistrationContext';
import {createEntryNoHeader} from '../../../core/services/dataGenerator';

export const TellUsMoreForm = (props: any) => {
  const {navigation} = props;
  const [isBusy, setIsBusy] = useState(false);
  const [dialCode, setDialCode] = useState<any>();
  const [selectedLocation, setSelectedLocation] = useState<any>();
  const {regFormData = {}} = useContext(UserRegistrationContext);
  const [locations] = useState(Countries);

  const handleSubmit = async (data: any) => {
    try {
      setIsBusy(true);

      const payload = {
        first_name: data.firstName,
        last_name: data.lastName,
        email_address: regFormData.email,
        password: regFormData.password,
        date_of_birth: '02-03-1992',
        phone_number: selectedLocation.diallingCode + data.phoneNumber,
      };

      createEntryNoHeader('users', payload, (res: any, err: any) => {
        if (!err) {
          const response = res;
          console.log('response', response);
          showToastUtil(ResponseType.success, 'Good to go');

          setIsBusy(false);
        } else {
          setIsBusy(false);
          showToastUtil(ResponseType.error, err);
          console.log('fsafdsa', err);
        }
      });
    } catch (error: any) {
      showToastUtil(ResponseType.error);
      setIsBusy(false);
      return error;
    }
    setIsBusy(false);
  };

  const validate = formValues => {
    const errors = {};
    if (!formValues.firstName) {
      errors['firstName'] = 'Legal first name is a requred field';
    }
    if (!formValues.lastName) {
      errors['lastName'] = 'Legal last name is a requred field';
    }
    return errors;
  };

  return (
    <>
      <Formik
        validateOnChange={false}
        validate={values => validate(values)}
        initialValues={{
          firstName: '',
          lastName: '',
          nickName: '',
          phoneNumber: '',
        }}
        onSubmit={values => {
          handleSubmit(values);
        }}>
        {formikprops => (
          <View style={styles.mainView}>
            <Input
              textInputProps={{
                placeholder: 'Legal First Name',
                onChangeText: formikprops.handleChange('firstName'),
                value: formikprops.values.firstName,
              }}
              isError={formikprops.errors.firstName ? true : false}
              error={formikprops.errors.firstName}
              isVisible={formikprops.values.firstName.length > 0}
            />
            <Input
              textInputProps={{
                placeholder: 'Legal Last Name',
                onChangeText: formikprops.handleChange('lastName'),
                value: formikprops.values.lastName,
              }}
              isError={formikprops.errors.lastName ? true : false}
              error={formikprops.errors.lastName}
              isVisible={formikprops.values.lastName.length > 0}
            />

            <Input
              textInputProps={{
                placeholder: 'Nick name',
                onChangeText: formikprops.handleChange('nickName'),
                value: formikprops.values.nickName,
              }}
              isError={formikprops.errors.nickName ? true : false}
              error={formikprops.errors.nickName}
              isVisible={formikprops.values.nickName.length > 0}
            />

            <Input
              prefix={
                <PhoneCodeDropdown
                  selectedCountry={locations.find(
                    location => location.name === 'Nigeria',
                  )}
                  onSelect={(location: any) => {
                    setDialCode(location);
                    setSelectedLocation(location);
                  }}
                  children={undefined}
                  isDisabled={undefined}
                />
              }
              textInputProps={{
                placeholder: 'Phone Number',
                keyboardType: 'phone-pad',
                returnKeyType: 'done',
                onChangeText: formikprops.handleChange('phoneNumber'),
                value: formikprops.values.phoneNumber,
              }}
              isVisible={true}
            />

            <Input
              textInputProps={{
                placeholder: 'Date of Birth',
                onChangeText: formikprops.handleChange('nick-name'),
                value: formikprops.values.nickName,
              }}
              isError={formikprops.errors.nickName ? true : false}
              error={formikprops.errors.nickName}
              isVisible={formikprops.values.nickName.length > 0}
              suffixIcon={
                <FontAwesome
                  name={'calendar'}
                  size={20}
                  color={colors.primary}
                />
              }
            />

            <View style={styles.createAccountView}>
              <AppBtn
                title="Continue"
                onPress={formikprops.handleSubmit}
                isBusy={isBusy}
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

  createAccountView: {
    marginTop: 20,
  },
});
