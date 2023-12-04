import React from 'react';
import {StyleSheet, TextInput} from 'react-native';
import Fonts from '../theme/Fonts';

const TextView = ({
  placeholder,
  onPressIn,
  value,
  onChangeText,
  placeholderTextColor,
  type = 'text',
}) => {
  return (
    <>
      {type === 'text' ? (
        <TextInput
          value={value}
          onPressIn={onPressIn}
          style={styles.inputStyle}
          placeholder={placeholder}
          onChangeText={onChangeText}
          placeholderTextColor={placeholderTextColor}
        />
      ) : null}
      {type === 'password' ? (
        <TextInput
          secureTextEntry={true}
          value={value}
          onPressIn={onPressIn}
          style={styles.inputStyle}
          placeholder={placeholder}
          placeholderTextColor={placeholderTextColor}
          onChangeText={onChangeText}
        />
      ) : null}
      {type === 'number' ? (
        <TextInput
          keyboardType={'numeric'}
          value={value}
          onPressIn={onPressIn}
          style={styles.inputStyle}
          placeholderTextColor={placeholderTextColor}
          placeholder={placeholder}
          onChangeText={onChangeText}
        />
      ) : null}
      {type === 'email' ? (
        <TextInput
          keyboardType={'email-address'}
          value={value}
          onPressIn={onPressIn}
          placeholderTextColor={placeholderTextColor}
          style={styles.inputStyle}
          placeholder={placeholder}
          onChangeText={onChangeText}
        />
      ) : null}
    </>
  );
};

const styles = StyleSheet.create({
  inputStyle: {
    fontSize: 12,
    color: '#ffffff',
    borderWidth: 1.5,
    borderColor: '#08D9D6',
    borderRadius: 9,
    padding: 3,
    paddingLeft: 12,
  },
});

export default TextView;
