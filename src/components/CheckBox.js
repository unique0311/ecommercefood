import React from 'react';
import {StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import Images from '../theme/Image';

const CheckBox = ({value, onChange}) => {
  return (
    <View>
      <TouchableOpacity onPress={() => onChange(!value)}>
        {value ? (
          <Image style={styles.checkBoxIcon} source={Images.checkedBox} />
        ) : (
          <Image style={styles.checkBoxIcon} source={Images.checkingBox} />
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  checkBoxIcon: {
    width: 14,
    height: 14,
  },
});

export default CheckBox;
