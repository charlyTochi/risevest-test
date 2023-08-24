import React from 'react';
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

export const Review = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerDiv}>
        <Image
          source={require('../../../../../../assets/images/back-button.png')}
          style={styles.headerImage}
        />
        <Text style={styles.headerText}>Review</Text>
      </View>
      <ScrollView
        keyboardShouldPersistTaps={'handled'}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollView}>
        <Text style={styles.centeredText}>Kate Ventures</Text>
        <Text style={styles.totalBalanceAmount}>$10,930.75</Text>
        <Text style={styles.dateTxt}>By June 2020</Text>
        <Image
          source={require('../../../../../../assets/images/plan/graph.png')}
          style={styles.fullWidthImage}
        />
        <View style={styles.rowContainer}>
          <Text style={styles.estimatedTxt}>Estimated monthly investment</Text>
          <Text style={styles.dateTxt}>$120</Text>
        </View>
        <View style={styles.itemContainers}>
          <Image
            source={require('../../../../../../assets/images/plan/info.png')}
            style={styles.image}
          />
          <View style={styles.infoContainers}>
            <View style={styles.infoRows}>
              <Text style={styles.label}>
                Returns not guaranteed. Investing involves risk. Read our
                Disclosures.
              </Text>
            </View>
          </View>
        </View>
        <Text style={styles.centeredText}>
          These are your starting settings, they can always be updated.
        </Text>
        <AppBtn
          moreButtonStyles={[styles.button, {marginTop: 50}]}
          title="Agree & Continue"
          onPress={() => console.log('bire')}
        />
        <AppBtn
          moreButtonStyles={[styles.button]}
          color={colors.offWhite}
          title="Start over"
          onPress={() => console.log('bire')}
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
    marginLeft: 100,
  },
  centeredText: {
    fontSize: 12,
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
  dateTxt: {
    fontSize: 15,
    fontFamily: 'Hanken Grotesk Regular',
    color: colors.black,
    textAlign: 'center',
    marginTop: 10,
  },
  fullWidthImage: {
    width: '100%',
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
    marginTop: 30,
  },
  itemContainers: {
    marginTop: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  infoContainers: {
    flexDirection: 'column',
  },
  infoRows: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    fontSize: 15,
    color: colors.darkGrey,
    fontFamily: 'DMSans Regular',
    fontWeight: '400',
    marginRight: 3,
  },
  image: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
    marginRight: 10,
  },
  button: {
    margin: 15,
  },
});
