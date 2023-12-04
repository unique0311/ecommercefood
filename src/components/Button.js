import React from 'react';
import {TouchableOpacity, StyleSheet, Text, Image} from 'react-native';
import Images from '../theme/Image';

const Button = ({
  title,
  color,
  backColor,
  style,
  onPress,
  icon,
  disabled,
  font,
}) => {
  if (icon) {
    var iconImage = '';
  }

  return (
    <TouchableOpacity
      disabled={disabled}
      style={[
        style ? style : '',
        styles.buttonContainer,
        backColor ? {backgroundColor: backColor} : '',
        disabled ? {backgroundColor: '#bfbdd3'} : null,
        icon ? {position: 'relative'} : '',
      ]}
      onPress={onPress}>
      {icon ? <Image style={styles.buttonIcon} source={iconImage} /> : <></>}
      <Text
        style={[
          style ? style : '',
          styles.textLable,
          color ? {color: color} : '',
          disabled ? {color: '#9282b4'} : null,
          font ? {fontFamily: font} : null,
        ]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: 'center',
    shadowColor: '#08d9d6',
    elevation: 2,
  },
  buttonIcon: {
    position: 'absolute',
    left: 10,
    top: 5,
    width: 22,
    height: 22,
  },
  textLable: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 14,
    color: '#ffffff',
    padding: 10,
    borderWidth: 0,
  },
});

export default Button;
