import React, {useRef, useState} from 'react';
import {Dimensions, ScrollView, StyleSheet, View} from 'react-native';
import {welcomeScreenContents} from '../../core/constants/welcome-screen-contents';
import {Welcome} from '../components/Welcome';

export const WelcomeScreen = () => {
  const [sliderState, setSliderState] = useState({currentPage: 0});
  const {width} = Dimensions.get('window');
  const {currentPage: pageIndex} = sliderState;
  const scrollViewRef = useRef(null);
  const isPrevButtonEnabled = pageIndex !== 0; // Enable only if not on the first slide

  const setSliderPage = (event: any) => {
    const {currentPage} = sliderState;
    const {x} = event.nativeEvent.contentOffset;
    const indexOfNextScreen = Math.round(x / width);
    if (indexOfNextScreen !== currentPage) {
      setSliderState({
        ...sliderState,
        currentPage: indexOfNextScreen,
      });
    }
  };

  const handleNextButtonPress = () => {
    const nextIndex = pageIndex + 1;
    if (nextIndex < welcomeScreenContents.length) {
      scrollViewRef?.current.scrollTo({x: nextIndex * width, animated: true});
      setSliderState({...sliderState, currentPage: nextIndex});
    }
  };

  const handlePrevButtonPress = () => {
    const prevIndex = pageIndex - 1;
    if (prevIndex >= 0) {
      scrollViewRef?.current.scrollTo({x: prevIndex * width, animated: true});
      setSliderState({...sliderState, currentPage: prevIndex});
    }
  };

  return (
    <View style={styles.parentDiv}>
      <View style={styles.flex}>
        <ScrollView
          ref={scrollViewRef}
          style={styles.flex}
          horizontal={true}
          scrollEventThrottle={16}
          pagingEnabled={true}
          showsHorizontalScrollIndicator={false}
          onScroll={(event: any) => {
            setSliderPage(event);
          }}>
          {welcomeScreenContents?.map((slider: any, key: number) => (
            // eslint-disable-next-line react-native/no-inline-styles
            <View key={key} style={{width, flex: 1}}>
              <Welcome
                bg={slider.bg}
                textColor={slider.textColor}
                slideImage={slider.image}
                heading={slider.heading}
                subHeading={slider.subHeading}
                sliderState={sliderState}
                pageIndex={pageIndex}
                onNextButtonPress={handleNextButtonPress}
                onPrevButtonPress={handlePrevButtonPress}
                isPrevButtonEnabled={isPrevButtonEnabled}
              />
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  paginationWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  paginationDots: {
    height: 8,
    width: 8,
    borderRadius: 10 / 2,
    marginLeft: 10,
  },
  parentDiv: {
    flex: 1,
  },
  flex: {
    flex: 1,
  },
});
