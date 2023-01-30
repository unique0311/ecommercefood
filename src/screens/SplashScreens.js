import React, { useEffect } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

import { SvgUri } from 'react-native-svg';
import Images from '../theme/Image';

const SplashScreens = ({ navigation }) => {
  useEffect(() => {
    setTimeout (
      () => {navigation.push('SignIn')}
      , 3000
    )
  }, []);

  return (  
    <View style = {{flex: 1, position: 'relative', backgroundColor: '#080808'}}>
      <Image style = {styles.ellipes} source = {Images.ellipes_blur} />    
      <Image style = {styles.logoImg} source = {Images.main_logo} />
    </View>
  )
}

const styles = StyleSheet.create({
  logoImg: {
    position: 'absolute',
    top: "47%",
    left: "53%",
    width: 130,
    height: 120,
    transform: [
      {translateX: -70},
      {translateY: -62}
    ],
  },

  ellipes: {
    position: "absolute",
    width: 268.17,
    height: 268.17,
    right: 0,
    top: 0,
  }
})
export default SplashScreens;