import React, {useState} from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import BackButton from "../components/BackButton";
import Images from "../theme/Image";
import Fonts from "../theme/Fonts";
import TextView from "../components/TextView";
import Button from "../components/Button";

const Setting = ({ navigation }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const onHomePageBackClick = () => {
    navigation.push('HomePage');
  }

  const onSignOutClick = () => {
    navigation.push('SignIn');
  }
  
  return (
    <View style = {{flex: 1, position: 'relative', backgroundColor: '#080808'}}>
      <Image style={styles.ellipes} source={Images.ellipes_blur} />
      <View style={{ flexDirection: 'row', position: 'relative', marginTop: 15, marginLeft: 10, alignItems: 'center'}}>
        <BackButton onPress={() => onHomePageBackClick()} />
        <Text style={{ color: '#ffffff', fontFamily: Fonts.RubikMedium, fontSize: 16, marginLeft: '30%'}}>Setting</Text>
      </View>

      <View style = {[styles.emailContainer, {marginTop: 170, marginLeft: 10, marginRight: 10}]}>
        <Text style = {styles.addressText}>Email Address</Text>
        <TextView
          placeholder="Loremipsum90@gmail.com"
          value={formData.email}
          placeholderTextColor="#EAEAEA80"
        />
      </View>
      <View style = {[styles.passwordContainer, {marginLeft: 10, marginRight: 10}]}>
        <Text style= {styles.passwordText}>Password</Text>
        <TextView
          placeholder="********************"
          value={formData.password}
          placeholderTextColor="#eaeaea80"
        />
        <Text style={{ color: '#08d9d6', fontFamily: Fonts.RubikMedium, fontSize: 10, paddingTop: 4, textAlign: 'right'}}>Change Password</Text>
      </View>
      <View style = {[styles.signInButtonStyle, {paddingLeft: 5, paddingRight: 5, marginTop: 150}]}>
          <Button
            title="Sign Out"
            backColor="#08D9D6"
            disabled={false}
            style={{ borderRadius: 7 }}
            onPress={() => onSignOutClick()}
            font = {Fonts.RubikMedium}
          />
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  ellipes: {
    position: "absolute",
    width: 338.17,
    height: 338.17,
    right: 0,
    top: 0,
  },
  emailContainer: {
    paddingTop: 32,
  },
  passwordContainer: {
    paddingTop: 16
  },
  passwordText: {
    color: '#ffffff',
    fontSize: 12.5,
    paddingBottom: 7,
    fontFamily: Fonts.RubikMedium
  },
  addressText: {
    color: '#ffffff',
    fontSize: 12.5,
    paddingBottom: 7,
    fontFamily: Fonts.RubikMedium
  },  
  signInButtonStyle: {
    paddingTop: 24
  },
})

export default Setting;