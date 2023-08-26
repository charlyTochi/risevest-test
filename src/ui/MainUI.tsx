import React, {useContext, useEffect, useState} from 'react';
import Toast from 'react-native-toast-message';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import appRouter from '../routes/router/app-router';
import routes from '../routes/routes';
import {UserAccountContext} from '../core/context/UserAcccountContext';
import authRouter from '../routes/router/auth-router';
import {STORAGE_KEYS} from '../core/enums/storage-keys';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createStackNavigator();

export const Main = () => {
  const {loginUserToken, users} = useContext(UserAccountContext);
  const [initialGuestScreen, setInitialGuestScreen] = useState(
    routes.splashScreen,
  );

  const [initialRouteName] = useState(
    loginUserToken ? routes.home : routes.splashScreen,
  );

  useEffect(() => {
    const fn = async () => {
      const notFirstLogin = await AsyncStorage.getItem(
        STORAGE_KEYS.NOT_FIRST_OPEN,
      );

      if (notFirstLogin) {
        setInitialGuestScreen(routes.welcomeScreen);
      } else {
        setInitialGuestScreen(routes.splashScreen);
      }
    };

    fn();
  }, [users]);

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={initialRouteName} screenOptions={{}}>
          {!loginUserToken
            ? authRouter.map((view, index) => (
                <Stack.Screen
                  key={index}
                  name={view.route}
                  component={view.component}
                  options={{headerShown: false}}
                />
              ))
            : appRouter.map((view, index) => (
                <Stack.Screen
                  key={index}
                  name={view.route}
                  component={view.component}
                  options={{headerShown: false}}
                />
              ))}
        </Stack.Navigator>
      </NavigationContainer>
      <Toast ref={ref => Toast.setRef(ref)} />
    </>
  );
};
