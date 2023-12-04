import React from 'react';
import {StyleSheet, TextInput} from 'react-native';

import Fonts from '../theme/Fonts';

const CodeInput = ({value, onChange}) => {
  return (
    <TextInput
      maxLength={1}
      style={styles.codeInput}
      value={value}
      onChangeText={onChange}
    />
  );
};

const styles = StyleSheet.create({
  codeInput: {
    width: 45.5,
    height: 55,
    borderWidth: 2,
    borderColor: '#08d9d6',
    borderRadius: 11,
    color: '#ffffff',
    fontFamily: Fonts.PoppinsBold,
    fontSize: 28,
    textAlign: 'center',
    padding: 0,
  },
});

export default CodeInput;
