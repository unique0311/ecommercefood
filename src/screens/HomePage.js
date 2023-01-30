import React, {useState} from "react";
import { View, StyleSheet, Image, Text,TouchableOpacity } from "react-native";
import Images from "../theme/Image";
import Fonts from "../theme/Fonts";
import Button from "../components/Button";
import MainButton from "../components/MainButton";

const HomePage = ({ navigation }) => {
  const onSeeActivityClick = () => {
    navigation.push('Loading');
  }

  const onCameraStartClick = () => {
    navigation.push('CameraStart');
  }

  const onMicrophoneStartClick = () => {
    navigation.push('MicrophoneStart');
  }

  const onLocationStartClick = () => {
    navigation.push('LocationStart');
  }

  const onSettingClick = () => {
    navigation.push('Setting');
  }

  const onCancelSubscriptionClick = () => {
    navigation.push('CancelSubscription')
  }

  const [navbarShow, setNavbarShow] = useState(false)

  const setnavbarshow = () => {
    setNavbarShow(!navbarShow)
  }
  return (
    <View style={{ flex: 1, position: 'relative',backgroundColor: "#080808"}}>
      <Image style={styles.ellipesHomePage} source={Images.ellipes_blurhomepage} />
      <View style={styles.homepageContainer}>
        <TouchableOpacity style={styles.naviconTouchableContainer} onPress={() => setnavbarshow()}>
          <View style={styles.naviconContainer} />
          <View style={styles.naviconContainer} />
          <View style={styles.naviconContainer} />
        </TouchableOpacity>
        <View style={styles.homepageSubContainer}>
          <Text style={styles.activityStyle}>Activity</Text>
          <Text style={styles.semiActivityStyle}>No camera activity yet.</Text>
          <Text style={styles.semiActivityStyle}>No microphone activity yet.</Text>
          <Text style={styles.semiActivityStyle}>No location activity yet.</Text>
        </View>
        <View style={styles.seeActivityButtonStyle}>
          <Button
            title="SEE ACTIVITY"
            backColor="#08d9d6"
            style={{ borderRadius: 15 }}
            font={Fonts.RubikSemiBold}
            onPress={() => onSeeActivityClick()}
          />
        </View>
        <View style={{paddingTop: 70}}>
          <MainButton
            icon='camera'
            title='Camera'
            style={{width: 35, height: 35}}
            onPress={() => onCameraStartClick()}
          />
          <MainButton
            icon='microphone'
            title='Microphone'
            style={{width: 35, height: 35}}
            onPress={() => onMicrophoneStartClick()}
          />
          <MainButton
            icon='location'
            title='Location'
            style={{width: 35, height: 35}}
            onPress={() => onLocationStartClick()}
          />
        </View>
      </View>

      <TouchableOpacity style={[styles.backDrop, !navbarShow ? { display: 'none'} : {}]} onPress={() => setnavbarshow()} />
      <View style={[styles.sideDrawer, !navbarShow ? { display: 'none' } : {}]}>
        <Image style={styles.sideBarImageSetting} source={Images.sideBarImage} />
        <TouchableOpacity style={styles.naviconTouchableSidebarContainer} onPress={() => setnavbarshow()}>
          <View style={styles.naviconSidebarContainer} />
          <View style={styles.naviconSidebarContainer} />
          <View style={styles.naviconSidebarContainer} />
        </TouchableOpacity>
        <Image style={styles.sideBarLogoSetting} source={Images.sideBarLogoImage} />
        <View style={[ {borderBottomWidth: 1, borderColor: '#08d9d6', marginLeft: 2, marginRight: 2, paddingBottom: 15, marginTop: 175}]}>
          <TouchableOpacity style={styles.SidebarSettingText} onPress={() => onSettingClick()}>
            <Image style={{ width: 25, height: 25 }} source={Images.mainSettingImage} />
            <Text style={{ color: '#ffffff', fontFamily: Fonts.RubikRegular, paddingLeft: 10, fontSize: 20 }}>Setting</Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.SidebarSettingText, {paddingTop: 18}]}>
          <Image style={{width: 25, height: 25}} source={Images.mainShareImage} />
          <Text style={{color: '#ffffff', fontFamily: Fonts.RubikRegular, paddingLeft: 10, fontSize: 20}}>Share</Text>
        </View>
        <View style={[styles.SidebarSettingText, {paddingTop: 18}]}>
          <Image style={{width: 25, height: 25}} source={Images.mainStarImage} />
          <Text style={{color: '#ffffff', fontFamily: Fonts.RubikRegular, paddingLeft: 10, fontSize: 20}}>Rate</Text>
        </View>
        <View style={[styles.SidebarSettingText, {paddingTop: 18}]}>
          <Image style={{width: 22.5, height: 25.5}} source={Images.mainPolicyImage} />
          <Text style={{color: '#ffffff', fontFamily: Fonts.RubikRegular, paddingLeft: 10, fontSize: 20}}>Privacy Policy</Text>
        </View>
        <View style={[ { paddingTop: 18 }]}>
          <TouchableOpacity style={styles.SidebarSettingText} onPress={() => onCancelSubscriptionClick()}>
            <Image style={{width: 22, height: 22}} source={Images.mainCloseImage} />
            <Text style={{ color: '#d22626', fontFamily: Fonts.RubikRegular, paddingLeft: 10, fontSize: 19 }}>Cancel Subscription</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  homepageContainer: {
    padding: 10
  },
  ellipesHomePage: {
    position: 'absolute',
    top: -20,
    left: 0,
    height: 280,
    width: 300
  },
  // homepageContainer: {
  //   padding: 5
  // },
  homepageSubContainer: {
    // alignItems: 'center',
    padding: 30,
    justifyContent: 'flex-start'
  },
  activityStyle: {
    color: '#ffffff',
    fontFamily: Fonts.RubikBold,
    fontWeight: 'bold',
    fontSize: 24
  },
  semiActivityStyle: {
    color: '#ffffff',
    fontFamily: Fonts.RubikLight,
    paddingTop: 7,
    fontSize: 16
  },
  seeActivityButtonStyle: {
    paddingLeft: 10,
    paddingRight: 10,
    
  },
  naviconContainer: {
    height: 3,
    width: 25,
    backgroundColor: "#ffffff",
    marginBottom: 5
  },
  naviconSidebarContainer: {
    height: 2,
    width: 20,
    backgroundColor: "#ffffff",
    marginBottom: 4.5
  },
  naviconTouchableContainer: {
    paddingTop: 10,
    paddingLeft: 5,
    width: 33,
  },
  naviconTouchableSidebarContainer: {
    position: 'absolute',
    right: 0,
    top: 17,
    width: 33,
  },
  sideDrawer: {
    width: '80%',
    height: '100%',
    backgroundColor: '#171717',
    position: "absolute",
    top: 0,
    left: 0,
  },
  sideBarImageSetting: {
    position: 'absolute',
    left: 0,
    top: 0, 
    width: '100%',
    height: '23.5%'
  },
  sideBarLogoSetting: {
    position: 'absolute',
    left: 22,
    top: 32,
    width: 101,
    height: 92
  },
  backDrop: {
    width: '20%',
    height: '100%',
    position: 'absolute',
    right: 0,
    top: 0,
    backgroundColor: '#000000',
    opacity: 0.2
  },
  SidebarSettingText: {
    flexDirection: 'row',
    // paddingTop: 175,
    alignItems: 'center',
    paddingLeft: 15
  }
})

export default HomePage;