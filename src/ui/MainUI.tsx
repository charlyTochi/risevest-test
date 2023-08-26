import React, {useContext, useState} from 'react';
import Toast from 'react-native-toast-message';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import appRouter from '../routes/router/app-router';
import routes from '../routes/routes';
import {UserAccountContext} from '../core/context/UserAcccountContext';
import authRouter from '../routes/router/auth-router';

const Stack = createStackNavigator();

export const Main = () => {
  const {loginUserToken} = useContext(UserAccountContext);

  const [initialRouteName] = useState(
    loginUserToken ? routes.home : routes.splashScreen,
  );

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
