import React, {useContext} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {StyleSheet, View} from 'react-native';
import colors from '../../../core/config/colors';
import {HomeScreen} from './HomeScreen';
import {UserAccountContext} from '../../../core/context/UserAcccountContext';
import {PlanList} from './components/Plan/PlanList';
import {ChooseFromPlans} from '../plan/components/ChooseFromPlans';
import {FundPlan} from '../plan/fund-plan/FundPlan';
const Tab = createBottomTabNavigator();

export const Home = () => {

  return (
    <>
      <Tab.Navigator
        tabBarOptions={{
          safeAreaInsets: {
            bottom: 20,
          },
          style: {height: 80, borderTopColor: 'transparent'},
          labelStyle: {
            marginBottom: 10,
            marginTop: 0,
          },
          activeTintColor: colors.primary,
          iconStyle: {
            marginTop: 10,
          },
          allowFontScaling: true,
        }}
        initialRouteName="Home">
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({focused}) => (
              <View>
                <MaterialIcons
                  name="home"
                  color={focused ? colors.primary : colors.grey}
                  size={25}
                />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Plans"
          component={ChooseFromPlans}
          options={{
            tabBarIcon: ({focused}) => (
              <MaterialIcons
                name="ballot"
                color={focused ? colors.primary : colors.grey}
                size={25}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Wallet"
          component={FundPlan}
          options={{
            tabBarIcon: ({focused}) => (
              <Ionicons
                name="wallet"
                color={focused ? colors.primary : colors.grey}
                size={25}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Feed"
          component={ChooseFromPlans}
          options={{
            tabBarIcon: ({focused}) => (
              <MaterialIcons
                name="feed"
                color={focused ? colors.primary : colors.grey}
                size={25}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Account"
          component={HomeScreen}
          options={{
            tabBarIcon: ({focused}) => (
              <MaterialIcons
                name="person"
                color={focused ? colors.primary : colors.grey}
                size={25}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
};

const styles = StyleSheet.create({
  homeIcon: {
    backgroundColor: colors.primary,
    width: 70,
    height: 70,
    position: 'absolute',
    bottom: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 8,
    borderColor: '#fff',
    borderRadius: 50,
  },
});
