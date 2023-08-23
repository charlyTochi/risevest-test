import React from 'react';
import {View, Text, StyleSheet, FlatList, ImageBackground} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import colors from '../../../../core/config/colors';

export const ChooseFromPlans = () => {
  const data = [
    {
      key: 0,
      name: 'Plan some stuffs',
      amount: '$4,000',
      backgroundImage: require('../../../../../assets/images/welcome/quality-asset.png'),
    },
    {
      key: 1,
      name: 'Plan a wedding',
      amount: '$4,100',
      backgroundImage: require('../../../../../assets/images/welcome/quality-asset.png'),
    },
    {
      key: 2,
      name: 'Make Plans',
      amount: '$2,100',
      backgroundImage: require('../../../../../assets/images/welcome/quality-asset.png'),
    },
    {
      key: 4,
      name: 'Go for it',
      amount: '$3,000',
      backgroundImage: require('../../../../../assets/images/welcome/quality-asset.png'),
    },
  ];

  const renderItem = ({item}) => (
    <ImageBackground
      source={item.backgroundImage}
      style={styles.item}
      imageStyle={{borderRadius: 8}}>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.amount}>{item.amount}</Text>
    </ImageBackground>
  );

  return (
    <>
      <View style={styles.parentDiv}>
        <View style={styles.headerDiv}>
          <FontAwesome
            name={'arrow-left'}
            size={20}
            color={colors.primary}
            style={styles.backIcon}
            onPress={() => console.log('nice')}
          />
          <Text style={styles.headerText}>Choose From Plans</Text>
        </View>
        <Text style={styles.description}>
          Tap on any of the plans to select
        </Text>
      </View>

      <View style={styles.container}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          numColumns={2}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  parentDiv: {
    backgroundColor: 'white',
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
    marginTop: 20,
    marginHorizontal: 30,
  },
  headerText: {
    fontSize: 24,
    marginTop: 15,
    fontFamily: 'Hanken Grotesk Bold',
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
});
