import React, {useEffect, useState} from 'react';
import Toast from 'react-native-toast-message';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import appRouter from '../routes/router/app-router';
import routes from '../routes/routes';
import AsyncStorage from '@react-native-async-storage/async-storage';
import localStorageKeys from '../core/constants/local-storage-keys';

const Stack = createStackNavigator();

const Main = () => {
  const [initialRouteName, setinitialRouteName] = useState(
    routes.welcomeScreen,
  );

  const checkIsAppOpened = async () => {
    try {
      let value: any = await AsyncStorage.getItem(localStorageKeys.appOpened);
      value
        ? setinitialRouteName(routes.loginOptionsScreen)
        : setinitialRouteName(routes.welcomeScreen);
    } catch (error) {}
  };

  useEffect(() => {
    checkIsAppOpened();
  }, []);

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={initialRouteName} screenOptions={{}}>
          {appRouter.map((view, index) => (
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

export default Main;
