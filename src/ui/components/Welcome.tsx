import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import colors from '../../core/config/colors';
import {welcomeScreenContents} from '../../core/constants/welcome-screen-contents';
import AppBtn from './AppBtn';
import routes from '../../routes/routes';

export const Welcome = (props: any) => {
  const {
    slideImage,
    heading,
    subHeading,
    bg,
    textColor,
    pageIndex,
    navigation,
    onNextButtonPress,
    onPrevButtonPress,
    isPrevButtonEnabled,
  } = props;

  const activeSliderBg = welcomeScreenContents[pageIndex]?.textColor;

  return (
    <View style={[{backgroundColor: bg}, styles.wrapper]}>
      <View>
        <View style={styles.sliderImgView}>
          <Image source={slideImage} />
        </View>

        <View style={styles.paginationWrapper}>
          {welcomeScreenContents?.map((slider: any, index: number) => (
            <View
              style={[
                styles.paginationDots,
                {
                  backgroundColor:
                    pageIndex === index ? activeSliderBg : colors.grey,
                },
              ]}
              key={index}
            />
          ))}
        </View>

        <Text style={[{color: textColor}, styles.headerTxt]}>{heading}</Text>
        <Text style={styles.subHeading}>{subHeading}</Text>

        {pageIndex !== 2 && (
          <View style={styles.container}>
            <Pressable
              disabled={!isPrevButtonEnabled}
              style={[styles.button, styles.iconButton]}
              onPress={() => onPrevButtonPress()}>
              <Text style={styles.buttonText}>Prev</Text>
            </Pressable>

            <Pressable
              style={[styles.button, styles.iconButton]}
              onPress={() => onNextButtonPress()}>
              <Text style={[{color: textColor}, styles.buttonText]}>Next</Text>
              <Text style={styles.buttonText} />
            </Pressable>
          </View>
        )}

        {pageIndex === 2 && (
          <View style={styles.buttonContainer}>
            <AppBtn
              title="Sign Up"
              onPress={() => {
                navigation.navigate(routes.homeScreen);
              }}
              color={colors.primary}
              textColor={colors.white}
            />
            <View style={styles.signInView}>
              <AppBtn
                title="Sign In"
                onPress={() => {
                  navigation.navigate(routes.homeScreen);
                }}
                color={colors.offWhite}
                textColor={colors.teal}
              />
            </View>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    paddingHorizontal: 20,
    marginTop: 60,
  },
  signInView: {
    marginTop: 10,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    marginTop: 60,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginRight: 10,
  },
  iconButton: {
    backgroundColor: colors.offWhite,
    padding: 15,
  },

  buttonText: {
    marginLeft: 5,
    fontFamily: 'DMSans Regular',
    fontSize: 15,
    fontWeight: '700',
  },

  wrapper: {
    flex: 1,
    paddingTop: 30,
  },
  paginationWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 50,
  },
  imageStyle: {
    marginBottom: 20,
  },
  paginationDots: {
    height: 8,
    width: 8,
    borderRadius: 10 / 2,
    marginLeft: 10,
  },

  sliderImgView: {
    marginBottom: 25,
    alignItems: 'center',
    marginTop: 30,
  },
  headerTxt: {
    marginBottom: 20,
    fontFamily: 'Hanken Grotesk Medium',
    fontSize: 20,
    marginHorizontal: 20,
  },
  subHeading: {
    color: colors.black,
    fontFamily: 'DMSans Regular',
    marginHorizontal: 20,
    fontWeight: '400',
  },
});
