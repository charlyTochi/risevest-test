import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, Pressable} from 'react-native';
import colors from '../../../../../core/config/colors';
import AppBtn from '../../../../components/AppBtn';
import Input from '../../../../components/AppInput';
import {Formik} from 'formik';
import {createEntry} from '../../../../../core/services/dataGenerator';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {ModalSelect} from '../../../../components/ModalSelect';

export const PlanForm = props => {
  const [currentStep, setCurrentStep] = useState(1);

  const placeholders = ['Investment', 'Amount', 'Date'];
  const fieldNames = ['investment', 'amount', 'date'];
  const [isBusy, setIsBusy] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isDatePickerOpen, setDatePickerOpen] = useState(false);

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

  const validate = formValues => {
    if (!formValues.investment) {
      // Add your validation logic here
    }
  };

  const handleSubmit = async values => {
    try {
      setIsBusy(true);

      const payload = {
        plan_name: values.investment,
        target_amount: values.amount,
        maturity_date: values.date,
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
    console.log(parsedDate);
    setSelectedDate(parsedDate);

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
            <Image
              source={require('../../../../../../assets/images/cancel.png')}
              style={{marginLeft: 20, marginTop: 10}}
            />
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
                  formikprops.errors[fieldNames[currentStep - 1]] ? true : false
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

              <AppBtn
                title={currentStep === 3 ? 'Finish' : 'Next'}
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
});
