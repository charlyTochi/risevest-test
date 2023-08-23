import React, {useEffect, useRef} from 'react';
import {useState} from 'react';
import {Image, Pressable, StyleSheet} from 'react-native';
import {View, Text} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import colors from '../../core/config/colors';
import {ScrollView} from 'react-native-gesture-handler';
import {Countries} from '../../core/constants/countries';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const PhoneCodeDropdown = (props: {
  selectedCountry: any;
  onSelect: any;
  children: any;
  isDisabled: any;
}) => {
  const {selectedCountry, onSelect, children} = props;
  const refRBSheet = useRef<RBSheet>(null);
  const [locationsList] = useState(Countries);

  const [currentCountry, setCurrentCountry] = useState(
    selectedCountry ? selectedCountry : locationsList[0],
  );

  useEffect(() => {
    onSelect(currentCountry);
  }, [currentCountry]);

  return (
    <View>
      {locationsList.length > 0 && (
        <Pressable
          onPress={() => {
            refRBSheet.current?.open();
          }}>
          {children ? (
            children
          ) : (
            <View style={styles.diallingCodeView}>
              <View style={styles.diallingCodeViewUrl}>
                <Image source={currentCountry.flagUrl} style={styles.img} />
                <Text
                  style={
                    styles.countryCodeTxt
                  }>{`${currentCountry?.diallingCode}`}</Text>
              </View>
            </View>
          )}
        </Pressable>
      )}
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={true}
        dragFromTopOnly={true}
        customStyles={{
          wrapper: {
            backgroundColor: 'rgba(0,0,0,.6)',
          },
          draggableIcon: {
            backgroundColor: '#000',
          },
        }}>
        <ScrollView>
          <View style={styles.scrollViewMainLocation}>
            {locationsList.map((location, index) => (
              <Pressable
                key={index}
                style={styles.pressable}
                onPress={() => {
                  onSelect(location);
                  setCurrentCountry(location);
                  refRBSheet.current?.close();
                }}>
                <View style={styles.locationView}>
                  <View style={styles.location}>
                    <Image source={location.flagUrl} style={styles.flagImg} />
                    <Text style={styles.diallingCode}>
                      {location.diallingCode}
                    </Text>
                  </View>
                  <View style={styles.locationLabelView}>
                    <Text>{location.locationLabel}</Text>
                  </View>
                </View>
                {location.diallingCode === currentCountry.diallingCode && (
                  <FontAwesome name="circle" size={25} color={colors.success} />
                )}
              </Pressable>
            ))}
          </View>
        </ScrollView>
      </RBSheet>
    </View>
  );
};

export default PhoneCodeDropdown;

const styles = StyleSheet.create({
  diallingCodeView: {
    display: 'flex',
    flexDirection: 'row',
    paddingRight: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRightWidth: 1,
    borderRightColor: colors.darkGrey,
  },

  diallingCodeViewUrl: {
    display: 'flex',
    flexDirection: 'row',
  },

  img: {
    width: 20,
    height: 16,
    resizeMode: 'contain',
    marginTop: 2,
    marginRight: 10,
  },

  scrollViewMainLocation: {
    paddingHorizontal: 18,
  },

  pressable: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
  },

  locationView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  location: {
    flexDirection: 'row',
  },

  flagImg: {
    width: 20,
    height: 16,
    resizeMode: 'contain',
    marginRight: 10,
  },

  diallingCode: {
    color: colors.black,
    marginRight: 10,
  },

  locationLabelView: {
    flexDirection: 'row',
  },
  countryCodeTxt: {
    color: colors.black,
    fontFamily: 'DMSans Regular',
    fontWeight: '700',
  },
});
