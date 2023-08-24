import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Image,
  Pressable,
} from 'react-native';
import colors from '../../../../../core/config/colors';
import AppBtn from '../../../../components/AppBtn';
import Input from '../../../../components/AppInput';
import {Formik} from 'formik';

export const PlanForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [step1Value, setStep1Value] = useState('');
  const [step2Value, setStep2Value] = useState('');
  const [step3Value, setStep3Value] = useState('');

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

  const calculateProgressBarWidth = () => {
    if (currentStep === 1) {
      return '30%'; // Fills a little on first step
    } else if (currentStep === 2) {
      return '70%'; // Half filled on the second step
    } else {
      return '100%'; // Fully filled on the third step
    }
  };

  const validate = formValues => {
    if (!formValues.email) {
    }
  };

  const handleSubmit = async values => {
    console.log('sfsfd', values);
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
            style={[styles.progressBar, {width: calculateProgressBarWidth()}]}
          />
        </View>
        {currentStep === 1 && (
          <>
            <Text style={styles.label}>What are we saving for</Text>
            <Formik
              validateOnChange={false}
              validate={values => validate(values)}
              initialValues={{
                investment: '',
              }}
              onSubmit={values => {
                handleSubmit(values);
              }}>
              {formikprops => (
                <>
                  <Input
                    textInputProps={{
                      placeholder: 'Investment',
                      onChangeText: formikprops.handleChange('investment'),
                    }}
                    isError={formikprops.errors.investment ? true : false}
                    isVisible={formikprops.values.investment.length > 0}
                    error={formikprops.errors.investment}
                  />
                </>
              )}
            </Formik>
          </>
        )}
        {currentStep === 2 && (
          <>
            <Text style={styles.label}>How much do you need</Text>
            <Formik
              validateOnChange={false}
              validate={values => validate(values)}
              initialValues={{
                investment: '',
              }}
              onSubmit={values => {
                handleSubmit(values);
              }}>
              {formikprops => (
                <>
                  <Input
                    textInputProps={{
                      placeholder: 'Investment',
                      onChangeText: formikprops.handleChange('investment'),
                    }}
                    isError={formikprops.errors.investment ? true : false}
                    isVisible={formikprops.values.investment.length > 0}
                    error={formikprops.errors.investment}
                  />
                </>
              )}
            </Formik>
          </>
        )}
        {currentStep === 3 && (
          <>
            <Text style={styles.label}>When do you want to withdraw</Text>
            <Formik
              validateOnChange={false}
              validate={values => validate(values)}
              initialValues={{
                investment: '',
              }}
              onSubmit={values => {
                handleSubmit(values);
              }}>
              {formikprops => (
                <>
                  <Input
                    textInputProps={{
                      placeholder: 'Investment',
                      onChangeText: formikprops.handleChange('investment'),
                    }}
                    isError={formikprops.errors.investment ? true : false}
                    isVisible={formikprops.values.investment.length > 0}
                    error={formikprops.errors.investment}
                  />
                </>
              )}
            </Formik>
          </>
        )}

        <AppBtn
          title={currentStep === 3 ? 'Finish' : 'Next'}
          moreButtonStyles={{width: 350, marginTop: 30}}
          onPress={handleNextStep}
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
