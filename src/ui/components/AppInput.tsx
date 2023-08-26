import React, {useState} from 'react';
import {View, Text, TextInput, TextInputProps, StyleSheet} from 'react-native';
import colors from '../../core/config/colors';
import {globalStyles} from '../../core/config/global-styles';

interface OverlayTextProps {
  visible: boolean;
  text: string;
}

const OverlayText: React.FC<OverlayTextProps> = ({visible, text}) => {
  if (!visible) {
    return null;
  }

  return (
    <View style={styles.overlayContainer}>
      <Text style={styles.overlayText}>{text}</Text>
    </View>
  );
};

interface InputProps {
  isError?: boolean;
  isVisible: boolean;
  suffixIcon?: JSX.Element;
  error?: string;
  prefix?: JSX.Element;
  textInputProps: TextInputProps;
}

const Input: React.FC<InputProps> = ({
  isError,
  suffixIcon,
  error,
  textInputProps,
  prefix,
  isVisible,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleTextChange = (text: string) => {
    setInputValue(text);
  };

  const borderColor = isError
    ? colors.danger
    : isFocused
    ? colors.primary
    : colors.grey;

  const mainViewStyle = isError
    ? {...styles.mainViewIsError, borderColor}
    : {...styles.mainViewNoError, borderColor};

  return (
    <>
      <View style={mainViewStyle}>
        <View style={styles.prefix}>{prefix}</View>
        <TextInput
          placeholderTextColor={colors.black}
          returnKeyType={'done'}
          style={styles.textInput}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChangeText={handleTextChange}
          value={inputValue}
          {...textInputProps}
        />
        {suffixIcon}
      </View>
      {isError && <Text style={{color: colors.danger}}>{error}</Text>}
    </>
  );
};

export default Input;

const styles = StyleSheet.create({
  overlayContainer: {
    position: 'absolute',
    top: -8,
    left: 15,
    backgroundColor: colors.white,
    paddingHorizontal: 5,
  },
  overlayText: {
    color: colors.primary,
    fontSize: 10,
    fontFamily: 'DMSans Regular',
    fontWeight: '700',
  },
  prefix: {
    marginRight: 10,
  },
  textInput: {
    color: colors.black,
    flex: 1,
    fontFamily: 'DMSans Regular',
    fontWeight: '700',
  },
  mainViewIsError: {
    ...globalStyles.input,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 15,
    borderWidth: 1,
    borderRadius: 5,
  },
  mainViewNoError: {
    ...globalStyles.input,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 15,
    borderWidth: 1,
    borderRadius: 5,
  },
});
