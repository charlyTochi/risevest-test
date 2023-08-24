import * as React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import colors from '../../../../../core/config/colors';
import AppBtn from '../../../../components/AppBtn';

export const ViewPlan = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerDiv}>
        <Image
          source={require('../../../../../../assets/images/back-button.png')}
          style={styles.headerImage}
        />
        <Text style={styles.headerText}>Start a business</Text>
      </View>
      <ScrollView
        keyboardShouldPersistTaps={'handled'}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollView}>
        <View style={{marginBottom: 50}}>
          <Text style={styles.centeredText}>Plan Balance</Text>
          <Text style={styles.totalBalanceAmount}>$0.00</Text>
          <Text style={styles.centeredText}>~ ₦ 0.00</Text>
          <Text style={styles.gains}>Gains</Text>
          <Text style={styles.percentage}>+$5,000.43 • +12.4% </Text>

          <View style={styles.rowContainer}>
            <Text style={styles.estimatedTxt}>Total earnings</Text>
            <Text style={styles.dateTxt}>$500,000</Text>
          </View>

          <View style={styles.rowContainer}>
            <Text style={styles.estimatedTxt}>Current earnings</Text>
            <Text style={styles.dateTxt}>$120,000</Text>
          </View>
          <View style={styles.rowContainer}>
            <Text style={styles.estimatedTxt}>Deposit value</Text>
            <Text style={styles.dateTxt}>$100,000</Text>
          </View>

          <View style={styles.rowContainer}>
            <Text style={styles.estimatedTxt}>Balance in Naira (* 505)</Text>
            <Text style={styles.dateTxt}>$190,000</Text>
          </View>

          <View style={styles.rowContainer}>
            <Text style={styles.estimatedTxt}>Plan created on </Text>
            <Text style={styles.dateTxt}>$400,000</Text>
          </View>

          <View style={styles.rowContainer}>
            <Text style={styles.estimatedTxt}>Maturity date</Text>
            <Text style={styles.dateTxt}>$300,000</Text>
          </View>
        </View>

        <AppBtn
          moreButtonStyles={[styles.button]}
          color={colors.offWhite}
          icon={'plus'}
          textColor={colors.primary}
          title="Fund plan"
          onPress={() => console.log('bire')}
        />

        <Image
          source={require('../../../../../../assets/images/plan/plan-details.png')}
          style={{alignSelf: 'center'}}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  headerDiv: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 30,
    marginBottom: 30,
  },
  headerImage: {
    marginLeft: 20,
    marginTop: 10,
  },
  headerText: {
    fontSize: 24,
    marginTop: 15,
    fontFamily: 'Hanken Grotesk Bold',
    color: colors.black,
    marginLeft: 80,
  },
  scrollView: {
    flexGrow: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 20,
  },

  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  estimatedTxt: {
    fontSize: 15,
    fontFamily: 'Hanken Grotesk Regular',
    color: colors.darkGrey,
    textAlign: 'center',
    marginTop: 15,
  },
  dateTxt: {
    fontSize: 15,
    fontFamily: 'Hanken Grotesk Regular',
    color: colors.black,
    textAlign: 'center',
    marginTop: 15,
  },
  button: {
    marginHorizontal: 20,
    marginBottom: 30,
  },
  centeredText: {
    fontSize: 15,
    textAlign: 'center',
    fontFamily: 'DMSans Regular',
  },
  totalBalanceAmount: {
    fontSize: 32,
    fontFamily: 'Hanken Grotesk Regular',
    color: colors.black,
    textAlign: 'center',
    marginTop: 10,
  },
  gains: {
    fontSize: 15,
    fontFamily: 'DMSans Regular',
    color: colors.black,
    textAlign: 'center',
    marginTop: 20,
  },
  percentage: {
    fontSize: 16,
    fontFamily: 'DMSans Regular',
    color: colors.green,
    textAlign: 'center',
    marginTop: 20,
  },
});
