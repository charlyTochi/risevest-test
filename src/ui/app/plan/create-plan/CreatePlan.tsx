import React from 'react';
import {View, Text, StyleSheet, FlatList, Image, Pressable} from 'react-native';
import colors from '../../../../core/config/colors';
import AppBtn from '../../../components/AppBtn';
import routes from '../../../../routes/routes';

export const CreatePlan = props => {
  const {navigation} = props;

  const data = [
    {
      id: 0,
      name: 'Give us a few details',
      description:
        'Tell us what you want to achieve and we will help you get there',
      image: require('../../../../../assets/images/plan/question-mark.png'),
    },
    {
      id: 1,
      name: 'Turn on auto invest',
      description:
        'Tell us what you want to achieve and we will help you get there',
      image: require('../../../../../assets/images/plan/calender.png'),
    },
    {
      id: 2,
      name: 'Modify as you progress',
      description:
        'Tell us what you want to achieve and we will help you get there',
      image: require('../../../../../assets/images/plan/settings.png'),
    },
  ];

  const renderItem = ({item}) => {
    return (
      <View style={styles.itemContainers}>
        <Image source={item.image} style={styles.image} />
        <View style={styles.infoContainers}>
          <View style={styles.infoRows}>
            <Text style={styles.label}>{item.name}</Text>
          </View>
          <Text style={styles.desc}>{item.description}</Text>
        </View>
      </View>
    );
  };

  return (
    <>
      <View style={styles.parentDiv}>
        <Pressable
          onPress={() => navigation.navigate(routes.home)}
          style={styles.headerDiv}>
          <Image
            source={require('../../../../../assets/images/cancel.png')}
            style={{marginLeft: 20, marginTop: 10}}
          />
          <Text style={styles.headerText}>Create a plan</Text>
        </Pressable>
        <Text style={styles.subheading}>Reach your goals faster</Text>

        <Image
          source={require('../../../../../assets/images/plan/create-plan.png')}
          style={{marginTop: 50, alignSelf: 'center'}}
        />
      </View>

      <View style={styles.container}>
        <FlatList data={data} renderItem={renderItem} />
      </View>

      <View style={styles.footer}>
        <AppBtn
          title="Continue"
          moreButtonStyles={{width: 350}}
          onPress={() => {
            navigation.navigate(routes.planForm);
          }}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  parentDiv: {
    backgroundColor: 'white',
  },
  image: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
    marginRight: 10,
  },
  headerDiv: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 30,
    marginBottom: 30,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: colors.offWhite,
    padding: 15,
  },

  backIcon: {
    marginTop: 10,
    marginHorizontal: 30,
  },

  modalIcon: {
    marginTop: 5,
    marginHorizontal: 30,
  },
  headerText: {
    fontSize: 24,
    marginTop: 15,
    fontFamily: 'Hanken Grotesk Bold',
    color: colors.black,
    marginLeft: 60,
  },

  subheading: {
    fontSize: 15,
    fontFamily: 'DMSans Regular',
    color: colors.darkGrey,
    textAlign: 'center',
  },

  modalLabel: {
    fontSize: 20,
    fontFamily: 'Hanken Grotesk Medium',
    color: colors.black,
    marginLeft: 20,
  },
  description: {
    fontSize: 15,
    marginTop: 5,
    fontFamily: 'Hanken Grotesk Regular',
    color: colors.darkGrey,
    textAlign: 'center',
  },
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 40,
    backgroundColor: colors.white,
  },
  item: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    margin: 8,
    padding: 16,
    height: 200,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 1,
  },
  info: {
    marginTop: 20,
    marginBottom: 40,
    fontSize: 11,
    color: colors.darkGrey,
    fontFamily: 'DMSans Regular',
    textAlign: 'center',
  },
  name: {
    fontSize: 15,
    color: colors.white,
    marginTop: 90,
    fontFamily: 'DMSans Regular',
  },
  amount: {
    fontSize: 18,
    color: colors.white,
    fontFamily: 'DMSans Regular',
  },
  scrollViewMainLocation: {
    paddingHorizontal: 18,
  },

  pressable: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
  },

  infoContainer: {
    flexDirection: 'column',
  },
  infoRow: {
    flexDirection: 'column',
  },
  accountNumber: {
    fontSize: 15,
    color: colors.black,
    fontFamily: 'DMSans Regular',
    fontWeight: '400',
    marginRight: 3,
  },
  bankName: {
    fontSize: 13,
    color: colors.darkGrey,
    fontFamily: 'DMSans Regular',
    fontWeight: '400',
  },
  accountName: {
    marginTop: 5,
    fontSize: 15,
    color: colors.black,
    fontFamily: 'DMSans Regular',
    fontWeight: '400',
  },

  itemContainers: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
  },
  infoContainers: {
    flexDirection: 'column',
  },
  infoRows: {
    flexDirection: 'row',
  },
  label: {
    fontSize: 15,
    color: colors.black,
    fontFamily: 'DMSans Bold',
    fontWeight: '400',
    marginRight: 3,
  },
  bankNames: {
    fontSize: 15,
    color: colors.darkGrey,
    fontFamily: 'DMSans Regular',
    fontWeight: '400',
  },
  desc: {
    marginTop: 5,
    fontSize: 15,
    color: colors.darkGrey,
    fontFamily: 'DMSans Regular',
    fontWeight: '400',
  },
  footer: {
    position: 'absolute',
    bottom: 50,
    alignSelf: 'center',
  },
});
