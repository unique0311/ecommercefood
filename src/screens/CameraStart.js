import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import Images from "../theme/Image";
import Fonts from "../theme/Fonts";
import BackButton from "../components/BackButton";
import ToggleButton from "../components/ToggleButton";
import LinearGradient from "react-native-linear-gradient";

const CameraStart = ({ navigation }) => {
  const [startButton, setStartButton] = useState(false);

  const onHomePageBackClick = () => {
    navigation.push('HomePage')
  }

  const setstartbutton = () => {
    setStartButton(!startButton);
  }

  // const generateBoxShadowStyle = (
  //   xOffset,
  //   yOffset,
  //   shadowColorIos,
  //   shadowOpacity,
  //   shadowRadius,
  //   elevation,
  //   shadowColorAndroid,
  // ) => {
  //   if (Platform.OS === 'ios') {
  //     styles.boxShadow = {
  //       shadowColor: shadowColorIos,
  //       shadowOffset: {width: xOffset, height: yOffset},
  //       shadowOpacity,
  //       shadowRadius,
  //     };
  //   } else if (Platform.OS === 'android') {
  //     styles.boxShadow = {
  //       elevation,
  //       shadowColor: shadowColorAndroid,
  //     };
  //   }
  // };

  return (
    <View style={{ backgroundColor: '#080808', flex: 1, position: 'relative' }}>
      <Image style={styles.cameraStartEllipes} source={Images.ellipes_blurActivity} />
      <View style={{ position: 'absolute', top: 15, left: 10}}>
        <BackButton onPress={() => onHomePageBackClick()} />
      </View>
      <View style={{ position: 'relative', alignItems: 'center', zIndex: 0, marginTop: 50 }}>
        {/* <View style={[styles.mainButtonContainer, styles.elevation]}></View> */}
        <Image style={styles.mainCameraStartImageSetting} source={Images.ellipes_startMainImage} />
        <TouchableOpacity style={{position: 'absolute', top: 95}} onPress={() => setstartbutton()}>
          <Text style={styles.cameraStartText}>{ !startButton ? "Start": "Stop"}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.deleteActivitySetting}>
        <View style={{ flexDirection: 'row', alignItems: 'center', paddingLeft: 10 }}>
          <Image style={{width: 25, height: 25}} source={Images.deleteImage} />
          <Text style={{color: '#ffffff', paddingLeft: 5, paddingRight: 25, fontFamily: Fonts.RubikRegular, fontSize: 14.5}}>Delete activity after 2 days</Text>
        </View>
        <ToggleButton />
      </View>
      <View style={[styles.deleteActivitySetting, {paddingTop: 83}]}>
        <Text style={{color: '#ffffff', paddingLeft: 25, fontFamily: Fonts.RubikRegular, fontSize: 15, fontWeight: "300"}}>Notification Setting</Text>
      </View>
      <View style={[styles.deleteActivitySetting, {borderBottomWidth: 0, paddingTop: 25}]}>
        <View style={{ flexDirection: 'row', alignItems: 'center', paddingLeft: 10 }}>
          <Image style={{width: 20, height: 17}} source={Images.vibrationImage} />
          <Text style={{color: '#ffffff', paddingLeft: 8, paddingRight: 25, fontFamily: Fonts.RubikRegular, fontSize: 14.5}}>Vibrate when is being used</Text>
        </View>
        <ToggleButton />
      </View>
      <View style={[styles.deleteActivitySetting, {borderBottomWidth: 0, paddingTop: 17}]}>
        <View style={{ flexDirection: 'row', alignItems: 'center', paddingLeft: 10 }}>
          <Image style={{width: 20, height: 20}} source={Images.notificationImage} />
          <Text style={{color: '#ffffff', paddingLeft: 8, paddingRight: 93, fontFamily: Fonts.RubikRegular, fontSize: 14.5}}>Push notification</Text>
        </View>
        <ToggleButton />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  cameraStartEllipes: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    width: 220,
    height: 470,
  },
  mainCameraStartImageSetting: {
    width: 230,
    height: 230,
  },
  cameraStartText: {
    color: '#ffffff',
    // position: 'absolute',
    // paddingTop: 125,
    fontSize: 36,
    fontFamily: Fonts.RubikMedium
  },
  deleteActivitySetting: {
    flexDirection: 'row',
    // backgroundColor: '#f4f4f4',
    marginLeft: 2,
    marginRight: 2,
    paddingBottom: 5,
    borderColor: '#08d9d6',
    borderBottomWidth: 1,
    alignItems: 'center',
    paddingTop: 37
  }
  // mainButtonContainer: {
  //   backgroundColor: '#121212',
  //   width: 190,
  //   height: 190,
  //   borderRadius: 300,
  //   marginTop: 60,
  //   borderWidth: 13,
  // },
  // elevation: {
  //   elevation: 10, 
  //   shadowColor: '#ffffff'
  // }
})

export default CameraStart; 