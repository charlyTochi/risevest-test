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
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {UserRegistrationContext} from '../../../core/context/UserRegistrationContext';
import {createEntryNoHeader} from '../../../core/services/dataGenerator';
import {ModalSelect} from '../../components/ModalSelect';
import moment from 'moment';
import routes from '../../../routes/routes';

export const TellUsMoreForm = (props: any) => {
  const {navigation} = props;
  const [isBusy, setIsBusy] = useState(false);
  const [userDate, setUserDate] = useState(false);
  const [isDateSelected, setIsDateSelected] = useState(false);
  const [dialCode, setDialCode] = useState<any>();
  const [DOB, setDOB] = useState<any>('');
  const [selectedLocation, setSelectedLocation] = useState<any>();
  const {regFormData = {}} = useContext(UserRegistrationContext);
  const [locations] = useState(Countries);

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isDatePickerOpen, setDatePickerOpen] = useState(false);

  const handleDateChange = (
    date: string | number | React.SetStateAction<Date>,
  ) => {
    setSelectedDate(date);
    const parsedDate = new Date(date);
    console.log(parsedDate);

    // Input date string
    var inputDateString = parsedDate;

    // Create a Date object from the input string
    var inputDate = new Date(inputDateString);

    // Extract year, month, and day components
    var year = inputDate.getUTCFullYear();
    var month = (inputDate.getUTCMonth() + 1).toString().padStart(2, '0'); // Months are zero-based, so add 1
    var day = inputDate.getUTCDate().toString().padStart(2, '0');

    // Create the formatted date string
    var formattedDate = month + '-' + day + '-' + year;

    console.log(formattedDate);

    setDOB(formattedDate);
    setIsDateSelected(true);

    const dobString = parsedDate;

    const dob = new Date(dobString);

    // Calculate the current date
    const currentDate = new Date();

    // Calculate the difference in years between the current date and the date of birth
    let age = currentDate.getFullYear() - dob.getFullYear();

    // Adjust age based on the months and days
    if (
      currentDate.getMonth() < dob.getMonth() ||
      (currentDate.getMonth() === dob.getMonth() &&
        currentDate.getDate() < dob.getDate())
    ) {
      age--;
    }

    // Check if the calculated age is 18 or above
    if (age >= 18) {
      setUserDate(true);
    } else {
      setUserDate(false);
    }
  };

  const openDatePicker = () => {
    setDatePickerOpen(true);
  };

  const closeDatePicker = () => {
    setDatePickerOpen(false);
  };

  const handleSubmit = async (data: any) => {
    try {
      setIsBusy(true);

      const payload = {
        first_name: data.firstName,
        last_name: data.lastName,
        email_address: regFormData.email,
        password: regFormData.password,
        date_of_birth: DOB,
        phone_number: selectedLocation.diallingCode + data.phoneNumber,
      };

      createEntryNoHeader('users', payload, (res: any, err: any) => {
        if (!err) {
          navigation.navigate(routes.successPage, {
            user: res,
            screen: 'auth',
            title: 'You just created your Rise account',
            description: 'Welcome to Rise, let`s take you home',
          });
          setIsBusy(false);
        } else {
          setIsBusy(false);
          showToastUtil(ResponseType.error, 'An Error Occured');
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
    if (!userDate) {
      errors['dob'] = 'You must be at least 18 years old';
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
          dob: '',
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
                value: isDateSelected
                  ? moment(selectedDate).format('MMMM Do YYYY')
                  : '',
              }}
              isError={formikprops.errors.dob ? true : false}
              error={formikprops.errors.dob}
              isVisible={true}
              suffixIcon={
                <FontAwesome
                  name={'calendar'}
                  size={20}
                  color={colors.primary}
                  onPress={() => openDatePicker()}
                />
              }
            />

            <View style={styles.createAccountView}>
              <AppBtn
                title="Continue"
                onPress={formikprops.handleSubmit}
                isBusy={isBusy}
                isDisabled={isBusy}
              />
            </View>
          </View>
        )}
      </Formik>

      <ModalSelect
        date={selectedDate}
        onDateChange={handleDateChange}
        open={isDatePickerOpen}
        onClose={closeDatePicker}
      />
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
