import React from 'react';
import {StyleSheet, Text, Pressable, Keyboard, View} from 'react-native';
import colors from '../../core/config/colors';
import {Circle} from 'react-native-animated-spinkit';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const AppBtn = (props: any) => {
  const {
    onPress,
    title,
    isBusy,
    isDisabled,
    type,
    color,
    icon,
    moreButtonStyles,
    borderColor,
    textColor = colors.white,
  } = props;
  return (
    <>
      <Pressable
        onPress={() => {
          Keyboard.dismiss();
          onPress();
        }}
        accessible={true}
        accessibilityLabel="AppButton"
        style={
          type === 'outline'
            ? // eslint-disable-next-line no-sparse-arrays
              [
                moreButtonStyles,
                ,
                {
                  ...styles.btnOutline,
                  borderColor: borderColor,
                  opacity: isDisabled ? 0.5 : 1,
                },
              ]
            : [
                moreButtonStyles,
                {
                  ...styles.appButtonContainer,
                  opacity: isDisabled ? 0.5 : 1,
                  backgroundColor: color ? color : colors.primary,
                },
              ]
        }
        disabled={isDisabled}>
        {isBusy ? (
          <Circle size={16} color={type === 'outline' ? color : '#FFF'} />
        ) : (
          <>
            <View style={{flexDirection: 'row'}}>
              {icon && (
                <FontAwesome
                  name={icon}
                  size={20}
                  color={colors.primary}
                  style={{marginRight: 5}}
                />
              )}
              <Text
                style={{
                  fontFamily: 'DMSans Regular',
                  fontWeight: '700',
                  color: textColor,
                }}>
                {title}
              </Text>
            </View>
          </>
        )}
      </Pressable>
    </>
  );
};

const styles = StyleSheet.create({
  appButtonContainer: {
    borderRadius: 5,
    paddingHorizontal: 20,
    height: 53,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnOutline: {
    borderRadius: 8,
    paddingHorizontal: 20,
    height: 53,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1.5,
  },
});

export default AppBtn;
