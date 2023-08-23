import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Ionicons} from 'react-native-vector-icons/Ionicons';
import colors from '../../../../core/config/colors';

interface CustomTabBarProps {
  state: any;
  descriptors: any;
  navigation: any;
}

export const CustomTabBar: React.FC<CustomTabBarProps> = ({
  state,
  descriptors,
  navigation,
}) => {
  return (
    <View style={{flexDirection: 'row', height: 80, backgroundColor: 'white'}}>
      {state.routes.map((route: any, index: number) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined ? options.tabBarLabel : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TouchableOpacity
            key={route.key}
            onPress={onPress}
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Ionicons
              name={isFocused ? 'ios-home' : 'ios-home-outline'}
              size={25}
              color={isFocused ? colors.primary : 'gray'}
            />
            <Text style={{color: isFocused ? colors.primary : 'gray'}}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};
