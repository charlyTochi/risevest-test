import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Platform,
  StatusBar,
  Image,
  ImageBackground,
} from 'react-native';
import colors from '../../../core/config/colors';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AppBtn from '../../components/AppBtn';
import {PlanList} from './components/Plan/PlanList';

export const HomeScreen = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={styles.container}>
      <ScrollView
        keyboardShouldPersistTaps={'handled'}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollView}>
        <View style={styles.absoluteView}>
          <ImageBackground
            source={require('../../../../assets/images/Home/bg-gradient.png')}
            style={styles.imageBackground}
          />
        </View>
        <View style={styles.header}>
          <View style={styles.greetingContainer}>
            <View style={styles.greetingRow}>
              <Text style={styles.greetingText}>Good morning</Text>
              <FontAwesome
                name={'sun-o'}
                size={20}
                color={colors.primary}
                style={styles.sunIcon}
              />
            </View>
            <Text style={styles.userName}>Deborah</Text>
          </View>
          <View style={styles.bonusContainer}>
            <Text style={styles.bonusText}>Earn 3% bonus</Text>
          </View>
          <View style={styles.bellContainer}>
            <FontAwesome
              name={'bell'}
              size={30}
              color={colors.primary}
              style={styles.bellIcon}
            />
          </View>
        </View>
        <View style={styles.totalBalanceContainer}>
          <View style={styles.totalBalanceRow}>
            <Text style={styles.totalBalanceText}>Total Balance</Text>
            <FontAwesome
              name={!showPassword ? 'eye-slash' : 'eye'}
              size={20}
              color={colors.primary}
              onPress={() => setShowPassword(!showPassword)}
            />
          </View>
          <Text style={styles.totalBalanceAmount}>$0.00</Text>
          <View style={styles.separator} />
          <View style={styles.totalGainsRow}>
            <Text style={styles.totalGainsText}>Total Gains</Text>
            <Image
              source={require('../../../../assets/images/Home/top-right.png')}
              style={styles.totalGainsImage}
            />
            <Text style={styles.totalGainsPercentage}>0.00%</Text>
            <Image
              source={require('../../../../assets/images/Home/arrow-right.png')}
              style={styles.totalGainsArrow}
            />
          </View>
          <Image
            source={require('../../../../assets/images/Home/indicator.png')}
            style={styles.indicatorImage}
          />
        </View>
        <AppBtn
          title="Add money"
          type="outline"
          textColor={colors.primary}
          borderColor={colors.offWhite}
          icon={'plus'}
          moreButtonStyles={styles.doneTxt}
        />

        <View style={styles.planContainer}>
          <View style={styles.planHeader}>
            <Text style={styles.planHeaderText}>Create Plan</Text>
            <Text style={styles.viewAllText}>View all plans</Text>
          </View>
          <Text style={styles.planDescription}>
            Start your investment journey by creating a plan
          </Text>
          <PlanList />
        </View>

        <View style={styles.helpContainer}>
          <View style={styles.helpTextContainer}>
            <Image
              source={require('../../../../assets/images/Home/question.png')}
              style={styles.helpIcon}
            />
            <Text style={styles.helpText}>Need help</Text>
          </View>
          <AppBtn title="Contact us" moreButtonStyles={styles.contactBtn} />
        </View>

        <View style={styles.quoteContainer}>
          <Text style={styles.quoteTitle}>TODAY'S QUOTE</Text>
          <View style={styles.quoteSeparator} />
          <Text style={styles.quoteText}>
            We have no intention of rotating capital out of strong multi-year
            investments because they’ve recently done well or because ‘growth’
            has outperformed ‘value’.
          </Text>
          <View style={styles.authorRow}>
            <Text style={styles.authorName}>Car Sagar</Text>
            <Image
              source={require('../../../../assets/images/Home/share.png')}
              style={styles.shareIcon}
            />
          </View>
        </View>
        <Image
          source={require('../../../../assets/images/Home/rise-grey.png')}
          style={styles.indicatorImage}
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
  scrollView: {
    flexGrow: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
  },
  greetingContainer: {
    flexDirection: 'column',
  },
  greetingRow: {
    flexDirection: 'row',
  },
  greetingText: {
    fontSize: 15,
    fontWeight: '400',
    fontFamily: 'DMSans Regular',
    color: colors.black,
  },
  sunIcon: {
    marginLeft: 4,
  },
  userName: {
    fontSize: 20,
    fontFamily: 'DMSans Regular',
    color: colors.black,
    fontWeight: '400',
  },
  bonusContainer: {
    flexDirection: 'column',
    marginLeft: 40,
    backgroundColor: colors.primary,
    padding: 10,
    borderRadius: 50,
  },
  bonusText: {
    color: colors.white,
    fontSize: 12,
    fontWeight: '400',
    padding: 5,
    fontFamily: 'DMSans Regular',
  },
  bellContainer: {
    flexDirection: 'column',
  },
  bellIcon: {
    marginLeft: 4,
    marginTop: 5,
  },
  absoluteView: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: 250,
  },
  imageBackground: {
    flex: 1,
    justifyContent: 'center',
  },
  totalBalanceContainer: {
    backgroundColor: colors.white,
    marginTop: 20,
    borderRadius: 10,
    marginHorizontal: 20,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderColor: '#f1f3fa',
  },
  totalBalanceRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  totalBalanceText: {
    fontSize: 15,
    fontFamily: 'DMSans Regular',
    color: colors.darkGrey,
    marginRight: 10,
  },
  totalBalanceAmount: {
    fontSize: 32,
    fontFamily: 'Hanken Grotesk Regular',
    color: colors.black,
    textAlign: 'center',
    marginTop: 30,
  },
  separator: {
    marginTop: 20,
    borderWidth: 1,
    width: '40%',
    alignSelf: 'center',
    borderColor: colors.offWhite,
  },
  totalGainsRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 15,
  },
  totalGainsText: {
    fontSize: 15,
    fontFamily: 'DMSans Regular',
    color: colors.darkGrey,
    marginRight: 5,
  },
  totalGainsImage: {
    alignSelf: 'center',
    marginRight: 3,
  },
  totalGainsPercentage: {
    color: colors.green,
    marginRight: 5,
    fontSize: 16,
  },
  totalGainsArrow: {
    alignSelf: 'center',
    marginRight: 3,
  },
  indicatorImage: {
    alignSelf: 'center',
    marginTop: 25,
    marginBottom: 20,
  },
  doneTxt: {
    width: '90%',
    marginTop: 40,
    marginHorizontal: 10,
    alignSelf: 'center',
  },
  planContainer: {
    marginHorizontal: 20,
    marginTop: 30,
  },
  planHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  planHeaderText: {
    fontSize: 18,
    fontWeight: '400',
    color: colors.black,
  },
  viewAllText: {
    fontSize: 15,
  },
  planDescription: {
    fontSize: 15,
    fontFamily: 'DMSans Regular',
    marginTop: 10,
    marginBottom: 15,
  },
  helpContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginHorizontal: 20,
    justifyContent: 'space-between',
    marginTop: 40,
    padding: 15,
    borderRadius: 10,
    backgroundColor: colors.white,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  helpTextContainer: {
    flexDirection: 'row',
    marginTop: 15,
  },
  helpIcon: {
    marginRight: 10,
  },
  helpText: {
    fontSize: 15,
    fontWeight: '400',
    fontFamily: 'DMSans Regular',
  },
  contactBtn: {
    width: 140,
  },
  quoteContainer: {
    backgroundColor: colors.primary,
    borderRadius: 10,
    marginHorizontal: 20,
    marginTop: 40,
    padding: 15,
    elevation: 5,
    shadowColor: colors.primary,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  quoteTitle: {
    color: colors.white,
    fontFamily: 'DMSans Bold',
  },
  quoteSeparator: {
    width: 50,
    borderWidth: 1,
    borderColor: colors.white,
    marginTop: 20,
  },
  quoteText: {
    color: colors.white,
    marginTop: 25,
    fontSize: 15,
    fontWeight: '400',
    fontFamily: 'DMSans Regular',
  },
  authorRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
  },
  authorName: {
    marginTop: 15,
    fontSize: 15,
    fontFamily: 'DMSans Bold',
    color: colors.white,
  },
  shareIcon: {
    alignSelf: 'center',
  },
});
