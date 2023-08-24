import React, {useRef} from 'react';
import {View, Text, StyleSheet, FlatList, Pressable} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import colors from '../../../../core/config/colors';
import RBSheet from 'react-native-raw-bottom-sheet';
import AppBtn from '../../../components/AppBtn';

export const FundPlan = () => {
  const refRBSheet = useRef<RBSheet>(null);

  const data = [
    {
      key: 0,
      name: 'Plan some stuffs',
      amount: '$4,000',
      backgroundImage: require('../../../../../assets/images/welcome/quality-asset.png'), // Set your image path here
    },
    {
      key: 1,
      name: 'Plan a wedding',
      amount: '$4,100',
      backgroundImage: require('../../../../../assets/images/welcome/quality-asset.png'), // Set your image path here
    },
    {
      key: 2,
      name: 'Make Plans',
      amount: '$2,100',
      backgroundImage: require('../../../../../assets/images/welcome/quality-asset.png'), // Set your image path here
    },
    {
      key: 4,
      name: 'Go for it',
      amount: '$3,000',
      backgroundImage: require('../../../../../assets/images/welcome/quality-asset.png'), // Set your image path here
    },
  ];

  const bank = [
    {
      key: 0,
      name: 'USD Buy Rate',
      description: 'We buy US dollars at this rate',
      amount: '$4,000',
    },
    {
      key: 1,
      name: 'GPB Buy Rate',
      description: 'We buy GPB at this rate',
      amount: 'Ē4,100',
    },
  ];

  const datas = [
    {
      id: 0,
      key: 0,
      bank: 'GT Bank PLC',
      accountName: 'Bosun Olanrewaju',
      accountNumber: '012312422',
    },
    {
      id: 1,
      key: 1,
      bank: 'Fidelity Bank',
      accountName: 'Bosun Olanrewaju',
      accountNumber: '315342134124',
    },
    {
      id: 2,
      key: 2,
      bank: 'Keystone Bank PLC',
      accountName: 'Bosun Olanrewaju',
      accountNumber: '34564653463',
    },
  ];

  const renderItem = ({item}) => {
    return (
      <Pressable
        style={styles.itemContainers}
        onPress={() => refRBSheet.current?.open()}>
        <View style={styles.infoContainers}>
          <View style={styles.infoRows}>
            <Text style={styles.accountNumbers}>{item.accountNumber} .</Text>
            <Text style={styles.bankNames}>{item.bank}</Text>
          </View>
          <Text style={styles.accountNames}>{item.accountName}</Text>
        </View>
        <FontAwesome name={'arrow-right'} size={30} color={colors.grey} />
      </Pressable>
    );
  };

  const renderItems = ({item}) => {
    return (
      <>
        <View style={styles.itemContainer}>
          <View style={styles.infoContainer}>
            <View style={styles.infoRow}>
              <Text style={styles.accountNumber}>{item.name}</Text>
              <Text style={styles.bankName}>{item.description}</Text>
            </View>
          </View>
          <Text style={styles.accountName}>{item.amount}</Text>
        </View>
      </>
    );
  };
  return (
    <>
      <View style={styles.parentDiv}>
        <View style={styles.headerDiv}>
          <FontAwesome
            name={'times-circle'}
            size={30}
            color={colors.primary}
            style={styles.backIcon}
            onPress={() => console.log('nice')}
          />
          <Text style={styles.headerText}>Fund Wallet</Text>
        </View>
      </View>

      <View style={styles.container}>
        <FlatList data={datas} renderItem={renderItem} />

        <RBSheet
          ref={refRBSheet}
          height={450}
          customStyles={{
            container: {
              borderTopRightRadius: 30,
              borderTopLeftRadius: 30,
            },
            wrapper: {
              backgroundColor: 'rgba(0,0,0,.6)',
            },
            draggableIcon: {
              backgroundColor: '#000',
            },
          }}>
          <View style={styles.parentDiv}>
            <View style={styles.headerDiv}>
              <FontAwesome
                name={'close'}
                size={20}
                color={colors.primary}
                style={styles.modalIcon}
                onPress={() => refRBSheet.current?.close()}
              />
              <Text style={styles.modalLabel}>About Exchange Rates</Text>
            </View>
          </View>
          <View style={styles.scrollViewMainLocation}>
            <FlatList
              data={bank}
              renderItem={renderItems}
              keyExtractor={item => item.key.toString()}
              ItemSeparatorComponent={() => <View style={styles.separator} />}
            />

            <Text style={styles.info}>
              These exhange rates are provided by independent third parties who
              handle fund conversions at the prevailing parallel rates and are
              not set, or controlled or by Rise. They are subject to change
              based on market trends.
            </Text>

            <AppBtn
              title="Accept & Continue"
              onPress={() => console.log('sdfds')}
            />
          </View>
        </RBSheet>
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
    marginLeft: 20,
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
    borderBottomWidth: 1,
    borderBottomColor: colors.offWhite,
    padding: 15,
  },
  infoContainers: {
    flexDirection: 'column',
  },
  infoRows: {
    flexDirection: 'row',
  },
  accountNumbers: {
    fontSize: 15,
    color: colors.black,
    fontFamily: 'DMSans Regular',
    fontWeight: '400',
    marginRight: 3,
  },
  bankNames: {
    fontSize: 15,
    color: colors.darkGrey,
    fontFamily: 'DMSans Regular',
    fontWeight: '400',
  },
  accountNames: {
    marginTop: 5,
    fontSize: 15,
    color: colors.black,
    fontFamily: 'DMSans Regular',
    fontWeight: '400',
  },
});
