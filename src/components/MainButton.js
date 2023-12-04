import React from 'react';
import {Image, StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import Images from '../theme/Image';
import Fonts from '../theme/Fonts';

const MainButton = ({icon, title, onPress, style}) => {
  if (icon) {
    var iconImage = '';
    switch (icon) {
      case 'camera':
        iconImage = Images.cameraImage;
        break;
      case 'microphone':
        iconImage = Images.microphoneImage;
        break;
      case 'location':
        iconImage = Images.locationImage;
        break;
      default:
        break;
    }
  }
  return (
    <TouchableOpacity style={[styles.mainButtonContainer]} onPress={onPress}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          position: 'relative',
          shadowColor: '#08d9d6',
        }}>
        <Image style={[style, styles.buttonMainIcon]} source={iconImage} />
        <Text style={styles.mainButtonTextLabel}>{title}</Text>
      </View>
      <Image style={styles.forwardButton} source={Images.forwardImage} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  mainButtonContainer: {
    flexDirection: 'row',
    padding: 15,
    backgroundColor: '#171717',
    borderRadius: 8,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    marginLeft: 8,
    marginRight: 8,
  },
  buttonMainIcon: {
    position: 'absolute',
  },
  mainButtonTextLabel: {
    color: '#ffffff',
    fontFamily: Fonts.RubikSemiBold,
    fontSize: 16,
    paddingLeft: 55,
  },
  forwardButton: {
    width: 10,
    height: 17.8,
  },
});

export default MainButton;
