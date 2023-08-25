import React, {useContext} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {StyleSheet, View} from 'react-native';
import colors from '../../../core/config/colors';
import {HomeScreen} from './HomeScreen';
import {UserAccountContext} from '../../../core/context/UserAcccountContext';
const Tab = createBottomTabNavigator();

export const Home = () => {
  const {logout} = useContext(UserAccountContext) ?? {};

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
          name="."
          component={HomeScreen}
          options={{
            tabBarIcon: ({focused}) => (
              <View>
                <MaterialIcons
                  name="home"
                  color={focused ? colors.primary : colors.red}
                  size={25}
                  style={{transform: [{rotateZ: '45deg'}]}}
                />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Recipients"
          component={HomeScreen}
          options={{
            tabBarIcon: ({focused}) => (
              <Ionicons
                name="md-person-add"
                color={focused ? colors.primary : colors.red}
                size={25}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Recipiensts"
          component={HomeScreen}
          options={{
            tabBarIcon: ({focused}) => (
              <Ionicons
                name="md-person-add"
                color={focused ? colors.primary : colors.red}
                size={25}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Promotions"
          component={HomeScreen}
          options={{
            tabBarIcon: ({focused}) => (
              <FontAwesome
                name="group"
                color={focused ? colors.primary : colors.white}
                size={20}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Account"
          component={HomeScreen}
          options={{
            tabBarIcon: ({focused}) => (
              <Ionicons
                onPress={() => logout()}
                name="md-settings"
                color={focused ? colors.primary : colors.white}
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
