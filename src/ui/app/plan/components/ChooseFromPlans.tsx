import React, {useContext, useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ImageBackground,
  Pressable,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import colors from '../../../../core/config/colors';
import routes from '../../../../routes/routes';
import {getEntry} from '../../../../core/services/dataGenerator';
import {UserAccountContext} from '../../../../core/context/UserAcccountContext';
import {useIsFocused} from '@react-navigation/native';

export const ChooseFromPlans = props => {
  const {navigation} = props;
  const [allPlans, setAllPlans] = useState([]);
  const isFocused = useIsFocused();
  const {users} = useContext(UserAccountContext) ?? {};

  useEffect(() => {
    getAllPlans();
  }, [isFocused]);

  const getAllPlans = () => {
    try {
      getEntry('plans', (res: any, err: any) => {
        if (!err) {
          const response = res;
          setAllPlans(response.data.items);
        }
      });
    } catch (error) {}
  };

  const renderItem = ({item}) => (
    <TouchableWithoutFeedback
      onPress={() => navigation.navigate(routes.viewPlan, {plan: item})}>
      <ImageBackground
        source={require('../../../../../assets/images/welcome/performance.png')}
        style={styles.item}
        imageStyle={{borderRadius: 8}}>
        <Text style={styles.name}>{item.plan_name}sdfds</Text>
        <Text style={styles.amount}>{item.target_amount}</Text>
      </ImageBackground>
    </TouchableWithoutFeedback>
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
            onPress={() => navigation.navigate(routes.home)}
          />
          <Text style={styles.headerText}>Choose From Plans</Text>
        </View>
        <Text style={styles.description}>
          Tap on any of the plans to select
        </Text>
      </View>

      <View style={styles.container}>
        {allPlans.length > 0 && (
          <FlatList
            data={allPlans}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            numColumns={2}
          />
        )}
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
    color: colors.primary,
    marginTop: 90,
    fontFamily: 'DMSans Regular',
  },
  amount: {
    fontSize: 18,
    color: colors.primary,
    fontFamily: 'DMSans Regular',
  },
});
