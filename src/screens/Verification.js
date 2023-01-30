import React, { useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";

import Button from "../components/Button";
import BackButton from "../components/BackButton";
import Fonts from "../theme/Fonts";
import CodeInput from '../components/CodeInput';
import Images from "../theme/Image";

const Verification = ({ navigation }) => {
  const [confirmCode, setConfirmCode] = useState({
    first: '',
    second: '',
    third: '',
    fourth: '',
    fifth: ''
  })

  const onVerifyBackClick = () => {
    navigation.push('SignUp')
  }
  const onVerifyClick = () => {
    navigation.push('Loading')
  }
  return (
    <View style={{ flex: 1, position: 'relative', backgroundColor: '#080808', padding: 16, paddingTop: 32}}>
      <View style={styles.verificationContainer}>
        <View style={styles.verifyTopContainer}>
          <BackButton onPress={() => onVerifyBackClick()} />
          <Text style={styles.verifyTopText}>Verification</Text>
        </View>
        <View style={styles.verifyMainImage}>
          {/* <View style={styles.keyImageSet}>
            <Image style={styles.verifyKeyButton} source={Images.keyButton} />
          </View> */}
          <Image style={styles.verifyKeyButton} source={Images.verifyMainImage} />
        </View>
        <View style={styles.verifyMediumContainer}>
          <Text style={styles.verifyMediumTitle}>Enter OTP</Text>
          <Text style={styles.verifyMediumSubtitle}>Enter the OTP code we just sent </Text>
          <Text style={styles.verifyMediumSubtitle}>you on your registered Email/Phone number </Text>
        </View>
        <View style={{ paddingTop: 15, flexDirection: 'row', justifyContent: 'space-evenly'}}>
          <CodeInput value={confirmCode.first} onChange = {(value) => {setConfirmCode({ ...confirmCode, first: value})}} />
          <CodeInput value={confirmCode.second} onChange = {(value) => {setConfirmCode({ ...confirmCode, second: value})}} />
          <CodeInput value={confirmCode.third} onChange = {(value) => {setConfirmCode({ ...confirmCode, third: value})}} />
          <CodeInput value={confirmCode.fourth} onChange = {(value) => {setConfirmCode({ ...confirmCode, fourth: value})}} />
          <CodeInput value={confirmCode.fifth} onChange = {(value) => {setConfirmCode({ ...confirmCode, fifth: value})}} />
        </View>
        <Text style={styles.verificationTimer}>04:59</Text>
        <Text style={styles.verificationBelowText}>We send verification code to your</Text>
        <View style={{flexDirection: "row"}}>
          <Text style={styles.verificationBelowText}>email </Text>
          <Text style={styles.verificationBelowEmailText}>lor*****@gmail.com </Text>
          <Text style={styles.verificationBelowText}>. You can </Text>
        </View>
        <Text style={styles.verificationBelowText}>check your inbox</Text>
        <Text style={styles.verificationBelowResendText}>I didn't receive the code? Send again</Text>
        <Button
          title="Verify"
          backColor="#08d9d6"
          style={{ borderRadius: 8 }}
          font={Fonts.PoppinsRegular}
          onPress = {() => onVerifyClick() }
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  verificationTimer: {
    color: '#08d9d6',
    paddingTop: 10,
    fontFamily: Fonts.PoppinsLight,
    fontSize: 12,
    paddingBottom: 8
  },
  verificationBelowText: {
    color: '#ffffff',
    fontFamily: Fonts.PoppinsRegular,
    fontSize: 12
  },
  verificationBelowEmailText: {
    color: "#08d9d6",
    fontFamily: Fonts.PoppinsRegular,
    fontSize: 12
  },
  verificationBelowResendText: {
    color: "#08d9d6",
    paddingTop: 5,
    fontFamily: Fonts.PoppinsRegular,
    fontSize: 12,
    paddingBottom: 10,
    textDecorationLine: 'underline'
  },
  verifyMediumContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    // paddingTop: 5
  },
  verifyMediumTitle: {
    color: '#08D9D6',
    fontFamily: Fonts.PoppinsSemiBold,
    fontSize: 26
  },
  verifyMediumSubtitle: {
    color: '#ffffff',
    fontFamily: Fonts.PoppinsRegular,
    fontSize: 12,
  },  
  verificationContainer: {
    flexDirection: 'column'
  },
  verifyTopContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },

  verifyTopText: {
    color: '#ffffff',
    fontFamily: Fonts.RubikMedium,
    fontSize: 18,
    paddingLeft: '21%',
  },

  verifyMainImage: {
    // flex: 1,
    // backgroundColor: '#f4f4f4',
    justifyContent: 'center',
    paddingTop: 195,
    alignItems: 'center',
    position: 'relative'
  },

  // keyImageSet: {
  //   padding: 15,
  //   backgroundColor: '#151515',
  //   borderRadius: 26.33,
  //   shadowColor: '#08D9D6',
  //   elevation: 15,
  //   shadowOffset: {
  //     width: 0,
  //     height: 0
  //   },
  //   shadowRadius: 132,
  //   shadowOpacity: 0.5
  // },

  verifyKeyButton: {
    position: 'absolute',
    // top: 1,
    width: 304.38,
    height: 301.36,
  }
})

export default Verification;