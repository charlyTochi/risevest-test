import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import colors from '../../../core/config/colors';

export const FundPlan = () => {
  const data = [
    {
      key: 0,
      bank: 'GT Bank PLC',
      accountName: 'Bosun Olanrewaju',
      accountNumber: '012312422',
    },
    {
      key: 1,
      bank: 'Fidelity Bank',
      accountName: 'Bosun Olanrewaju',
      accountNumber: '315342134124',
    },
    {
      key: 2,
      bank: 'Keystone Bank PLC',
      accountName: 'Bosun Olanrewaju',
      accountNumber: '34564653463',
    },
  ];

  const renderItem = ({item}) => {
    return (
      <>
        <View style={styles.itemContainer}>
          <View style={styles.infoContainer}>
            <View style={styles.infoRow}>
              <Text style={styles.accountNumber}>{item.accountNumber} .</Text>
              <Text style={styles.bankName}>{item.bank}</Text>
            </View>
            <Text style={styles.accountName}>{item.accountName}</Text>
          </View>
          <FontAwesome name={'arrow-right'} size={30} color={colors.grey} />
        </View>
      </>
    );
  };

  return (
    <>
      <View>
        <View style={styles.parentDiv}>
          <View style={styles.headerDiv}>
            <FontAwesome
              name={'arrow-left'}
              size={20}
              color={colors.primary}
              style={styles.backIcon}
              onPress={() => console.log('nice')}
            />
            <Text style={styles.headerText}>Select Bank</Text>
          </View>
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={item => item.key.toString()}
            ItemSeparatorComponent={() => <View style={styles.separator} />}
          />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  parentDiv: {
    backgroundColor: 'white',
    height: '100%',
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
  infoContainer: {
    flexDirection: 'column',
  },
  infoRow: {
    flexDirection: 'row',
  },
  accountNumber: {
    fontSize: 15,
    color: colors.black,
    fontFamily: 'DMSans Regular',
    fontWeight: '400',
    marginRight: 3,
  },
  bankName: {
    fontSize: 15,
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
  separator: {
    height: 10,
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
});
