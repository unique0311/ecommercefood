import React from 'react';
import {StyleSheet, TouchableOpacity, Image, View} from 'react-native';
import Images from '../theme/Image';

const BackButton = ({onPress}) => {
  return (
    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
      <TouchableOpacity onPress={onPress}>
        <Image style={styles.backIcon} source={Images.backButton} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  backIcon: {
    width: 30,
    height: 30,
  },
});

export default BackButton;
