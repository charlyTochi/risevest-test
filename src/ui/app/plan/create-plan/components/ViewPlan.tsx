import * as React from 'react';
import {
  FlatList,
  Image,
  ImageBackground,
  Platform,
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import colors from '../../../../../core/config/colors';
import AppBtn from '../../../../components/AppBtn';
import moment from 'moment';
import routes from '../../../../../routes/routes';

export const ViewPlan = ({route, navigation}) => {
  const {plan} = route.params;

  const datas = [
    {
      id: 1,
      date: 'July 2020',
      description: 'Received from Bank Account (BOSUN TONY ADEMOSU)',
      amount: '+$3,200',
      image: require('../../../../../../assets/images/plan/success-tr.png'),
    },
    {
      id: 2,
      date: 'April 2021',
      description: 'Sent to Bank Account (ADEBAYO MUSILIU JAGUN)',
      amount: '+$9,200',
      image: require('../../../../../../assets/images/plan/failure-tr.png'),
    },
  ];

  const renderItem = ({item}) => (
    <View style={styles.itemContainers}>
      <View style={styles.iconContainers}>
        <Image source={item.image} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.itemText}>{item.description}</Text>
        <Text style={styles.additionalText}>{item.date}</Text>
      </View>
      <View style={styles.iconContainers}>
        <Text style={styles.amount}>{item.amount}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../../../../../assets/images/plan/gradient.png')}>
        <View style={styles.headerDiv}>
          <Pressable onPress={() => navigation.navigate(routes.home)}>
            <Image
              source={require('../../../../../../assets/images/white-back-arrow.png')}
              style={styles.headerImage}
            />
          </Pressable>

          <Text style={styles.headerText}>Start a business</Text>
        </View>
        <Text style={styles.description}>{plan?.plan_name}</Text>
      </ImageBackground>

      <ScrollView
        keyboardShouldPersistTaps={'handled'}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollView}>
        <View style={{marginBottom: 50}}>
          <Text style={styles.centeredText}>{plan?.plan_name}</Text>
          <Text
            style={styles.totalBalanceAmount}>{`₦ ${plan.target_amount}`}</Text>
          <Text style={styles.centeredText}>~ ₦ 0.00</Text>
          <Text style={styles.gains}>Gains</Text>
          <Text style={styles.percentage}>+$5,000.43 • +12.4% </Text>

          <View style={styles.rowContainer}>
            <Text style={styles.estimatedTxt}>Total earnings</Text>
            <Text style={styles.dateTxt}>{`₦ ${plan.total_returns}`}</Text>
          </View>

          <View style={styles.rowContainer}>
            <Text style={styles.estimatedTxt}>Current earnings</Text>
            <Text style={styles.dateTxt}>0</Text>
          </View>
          <View style={styles.rowContainer}>
            <Text style={styles.estimatedTxt}>Deposit value</Text>
            <Text style={styles.dateTxt}>0</Text>
          </View>

          <View style={styles.rowContainer}>
            <Text style={styles.estimatedTxt}>Balance in Naira (* 505)</Text>
            <Text style={styles.dateTxt}>0</Text>
          </View>

          <View style={styles.rowContainer}>
            <Text style={styles.estimatedTxt}>Plan created on </Text>
            <Text style={styles.dateTxt}>
              {moment(plan.created_at).format('MMMM Do YYYY')}
            </Text>
          </View>

          <View style={styles.rowContainer}>
            <Text style={styles.estimatedTxt}>Maturity date</Text>
            <Text style={styles.dateTxt}>
              {moment(plan.maturity_date).format('MMMM Do YYYY')}
            </Text>
          </View>
        </View>

        <AppBtn
          moreButtonStyles={[styles.button]}
          color={colors.offWhite}
          icon={'plus'}
          textColor={colors.primary}
          title="Fund plan"
          onPress={() => navigation.navigate(routes.fundPlan)}
        />

        <Image
          source={require('../../../../../../assets/images/plan/plan-details.png')}
          style={{alignSelf: 'center'}}
        />

        <View style={styles.planHeader}>
          <Text style={styles.planHeaderText}>{'Recent transactions'}</Text>
          <Pressable
            style={styles.viewAllContainer}
            onPress={() => console.log('hi')}>
            <Text style={[styles.viewAllText]}>View all</Text>
            <Image
              source={require('../../../../../../assets/images/colored-arrow.png')}
              style={styles.totalGainsArrow}
            />
          </Pressable>
        </View>

        <View style={{marginTop: 30, marginBottom: 60}}>
          <FlatList
            data={datas}
            renderItem={renderItem}
            keyExtractor={item => item.id.toString()}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  viewAllContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerDiv: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 30,
  },
  totalGainsArrow: {
    alignSelf: 'center',
    marginRight: 20,
    width: 12,
    height: 12,
  },
  headerImage: {
    marginLeft: 20,
    marginTop: 23,
    height: 20,
    width: 20,
  },
  planHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  planHeaderText: {
    fontSize: 18,
    fontWeight: '400',
    color: colors.black,
    paddingHorizontal: 25,
  },
  viewAllText: {
    fontSize: 15,
    fontFamily: 'DMSans Regular',
    fontWeight: '400',
    marginRight: 10,
    color: colors.primary,
  },
  headerText: {
    fontSize: 24,
    marginTop: 15,
    fontFamily: 'Hanken Grotesk Bold',
    color: colors.white,
    marginLeft: 80,
  },
  description: {
    fontSize: 15,
    fontFamily: 'Hanken Grotesk Bold',
    color: colors.white,
    textAlign: 'center',
    marginBottom: 20,
    textTransform: 'capitalize',
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

  textContainer: {
    flex: 1,
    marginLeft: 10,
  },
  additionalText: {
    fontSize: 14,
    color: 'gray',
  },

  itemContainers: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  iconContainers: {
    marginRight: 10,
  },
  itemText: {
    flex: 1,
    fontSize: 16,
    width: 200,
    fontFamily: 'DMSans Regular',
    color: colors.black,
    marginTop: 20,
  },
  amount: {
    fontSize: 15,
    fontFamily: 'Hanken Grotesk Regular',
    color: colors.black,
    marginTop: 10,
  },
});
