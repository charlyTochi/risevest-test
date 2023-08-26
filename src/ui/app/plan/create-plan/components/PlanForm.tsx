import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, Pressable} from 'react-native';
import colors from '../../../../../core/config/colors';
import AppBtn from '../../../../components/AppBtn';
import Input from '../../../../components/AppInput';
import {Formik} from 'formik';
import {createEntry} from '../../../../../core/services/dataGenerator';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {ModalSelect} from '../../../../components/ModalSelect';
import routes from '../../../../../routes/routes';

export const PlanForm = props => {
  const {navigation} = props;

  const [currentStep, setCurrentStep] = useState(1);

  const placeholders = ['Investment', 'Amount', 'Date'];
  const fieldNames = ['investment', 'amount', 'date'];
  const [isBusy, setIsBusy] = useState(false);
  const [isValidDate, setIsValidDate] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isDatePickerOpen, setDatePickerOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleNextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePreviousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const validate = formValues => {};

  const handleSubmit = async values => {
    try {
      if (!isValidDate) {
        throw new Error('Error');
      }
      setIsBusy(true);
      console.log(selectedDate);

      const payload = {
        plan_name: values.investment,
        target_amount: values.amount,
        maturity_date: selectedDate,
      };

      createEntry('plans', payload, (res: any, err: any) => {
        if (!err) {
          const response = res;
          setIsBusy(false);
          console.log('good', response);
        } else {
          setIsBusy(false);
          console.log('error', err);
        }
      });
    } catch (error) {
      setIsBusy(false);
    }
  };

  const closeDatePicker = () => {
    setDatePickerOpen(false);
  };

  const handleDateChange = (
    date: string | number | React.SetStateAction<Date>,
  ) => {
    const parsedDate = new Date(date);

    const selectedMaturityDate = new Date(date);
    const currentDate = new Date();

    // Calculate one year from the current date
    const oneYearAhead = new Date(currentDate);
    oneYearAhead.setFullYear(currentDate.getFullYear() + 1);

    if (selectedMaturityDate >= oneYearAhead) {
      setIsValidDate(true);
      console.log('Selected maturity date is at least one year ahead.');
    } else {
      setIsValidDate(false);
      console.log('Selected maturity date is not one year ahead.');
    }

    const originalDate = new Date(date);

    const year = originalDate.getUTCFullYear();
    const month = (originalDate.getUTCMonth() + 1).toString().padStart(2, '0');
    const day = originalDate.getUTCDate().toString().padStart(2, '0');

    const convertedDate = `${year}-${month}-${day}`;
    console.log(convertedDate);
    setSelectedDate(parsedDate);
  };

  return (
    <>
      <View style={styles.parentDiv}>
        <View style={styles.headerDiv}>
          {currentStep !== 1 && (
            <Pressable
              onPress={() => handlePreviousStep()}
              disabled={currentStep === 1}>
              <Image
                source={require('../../../../../../assets/images/back-button.png')}
                style={{marginLeft: 20, marginTop: 10}}
              />
            </Pressable>
          )}

          {currentStep === 1 && (
            <Pressable onPress={() => navigation.navigate(routes.createPlan)}>
              <Image
                source={require('../../../../../../assets/images/cancel.png')}
                style={{marginLeft: 20, marginTop: 10}}
              />
            </Pressable>
          )}

          <Text style={styles.headerText}>Create a plan</Text>
        </View>
        <Text style={styles.subheading}>Question {currentStep} of 3 </Text>
      </View>
      <View style={styles.container}>
        <View style={styles.progressBarContainer}>
          <View
            style={[styles.progressBar, {width: `${(currentStep / 3) * 100}%`}]}
          />
        </View>
        {currentStep === 1 && (
          <>
            <Text style={styles.label}>What are we saving for</Text>
          </>
        )}
        {currentStep === 2 && (
          <>
            <Text style={styles.label}>How much do you need</Text>
          </>
        )}
        {currentStep === 3 && (
          <>
            <Text style={styles.label}>When do you want to withdraw</Text>
          </>
        )}

        <Formik
          validateOnChange={false}
          validate={values => validate(values)}
          initialValues={{
            investment: '',
            amount: '',
            date: '',
          }}
          onSubmit={values => {
            handleSubmit(values);
          }}>
          {formikprops => (
            <>
              <Input
                prefix={
                  currentStep === 2 ? (
                    <Text style={{color: colors.primary}}>₦</Text>
                  ) : null
                }
                textInputProps={{
                  keyboardType: currentStep === 2 ? 'phone-pad' : 'default',
                  placeholder: placeholders[currentStep - 1],
                  onChangeText: formikprops.handleChange(
                    fieldNames[currentStep - 1],
                  ),
                  value:
                    currentStep === 3
                      ? selectedDate.toDateString()
                      : formikprops.values[fieldNames[currentStep - 1]],
                }}
                isError={
                  currentStep === 3 &&
                  formikprops.errors[fieldNames[currentStep - 1]]
                }
                isVisible={
                  formikprops.values[fieldNames[currentStep - 1]].length > 0
                }
                error={formikprops.errors[fieldNames[currentStep - 1]]}
                suffixIcon={
                  currentStep === 3 ? (
                    <FontAwesome
                      name={'calendar'}
                      size={20}
                      color={colors.primary}
                      onPress={() => setDatePickerOpen(true)}
                    />
                  ) : null
                }
              />
              {!isValidDate && currentStep === 3 && (
                <Text style={styles.errorText}>
                  Maturity date must be at least one year ahead.
                </Text>
              )}
              {currentStep === 1 && formikprops.errors.investment && (
                <Text style={styles.errorText}>
                  {formikprops.errors.investment}
                </Text>
              )}
              <AppBtn
                title={currentStep === 3 ? 'Finish' : 'Next'}
                disabled={currentStep === 1 && !formikprops.values.investment}
                moreButtonStyles={{width: 350, marginTop: 30}}
                onPress={
                  currentStep !== 3 ? handleNextStep : formikprops.handleSubmit
                }
              />
            </>
          )}
        </Formik>

        <ModalSelect
          date={selectedDate}
          onDateChange={handleDateChange}
          open={isDatePickerOpen}
          onClose={closeDatePicker}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  parentDiv: {
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 25,
  },
  progressBarContainer: {
    width: '100%',
    height: 10,
    backgroundColor: colors.offWhite,
    borderRadius: 5,
    marginBottom: 10,
    marginTop: 20,
  },
  progressBar: {
    height: '100%',
    backgroundColor: colors.primary,
    borderRadius: 5,
  },
  headerDiv: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 30,
    marginBottom: 30,
  },
  headerText: {
    fontSize: 24,
    marginTop: 15,
    fontFamily: 'Hanken Grotesk Bold',
    color: colors.black,
    marginLeft: 60,
  },

  subheading: {
    marginTop: 20,
    fontSize: 15,
    fontFamily: 'DMSans Regular',
    color: colors.darkGrey,
    marginHorizontal: 25,
  },
  label: {
    marginTop: 60,
    fontSize: 17,
    fontFamily: 'Hanken Grotesk Bold',
    color: colors.black,
  },
  errorText: {
    color: colors.red,
    fontSize: 14,
    marginTop: 5,
  },
});
