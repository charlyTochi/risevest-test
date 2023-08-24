import React, {useState} from 'react';
import Toast from 'react-native-toast-message';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import appRouter from '../routes/router/app-router';
import routes from '../routes/routes';

const Stack = createStackNavigator();

export const Main = () => {
  const [initialRouteName] = useState(routes.planForm);

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
