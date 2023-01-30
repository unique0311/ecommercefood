import React, { useEffect, useState } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

import TextView from '../components/TextView';
import CheckBox from '../components/CheckBox';
import Button from '../components/Button';
import Images from '../theme/Image';
import Fonts from '../theme/Fonts';

const SignUp = ({ navigation }) => {
  const [checked, setChecked] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const onSignInTextClick = () => {
    navigation.push('SignIn');
  }

  const onVerifyClick = () => {
    navigation.push('Verification');
  }
  return (  
    <View style = {{flex: 1, position: 'relative', backgroundColor: '#080808'}}>
      <Image style = {styles.ellipes} source = {Images.ellipes_blur} />
      <View style = {styles.signUpcontainer}>    
        <Image style = {styles.logoImg} source = {Images.main_logo} />
        <Text style = {styles.signInText}>Sign Up</Text>
        <Text style = {styles.signInDesText}>Create account to continue!</Text>
        <View style = {styles.emailContainer}>
          <Text style = {styles.addressText}>Email Address</Text>
          <TextView
            placeholder="Enter your email"
            value={formData.email}
            placeholderTextColor="#EAEAEA80"
          />
        </View>
        <View style = {styles.passwordContainer}>
          <Text style= {styles.passwordText}>Password</Text>
          <TextView
            placeholder="Enter your password"
            value={formData.password}
            placeholderTextColor="#eaeaea80"
          />
        </View>
        <View style = {styles.passwordContainer}>
          <Text style= {styles.passwordText}>Confirm Password</Text>
          <TextView
            placeholder="Enter your password"
            value={formData.password}
            placeholderTextColor="#eaeaea80"
          />
        </View>
        <View style={styles.rememberBox}>
          <CheckBox
            value={checked}
            onChange={selected => {
              setChecked(selected);
            }}
          />
          <Text style={styles.conditionBoxText}>I agree to terms and conditions</Text>
        </View>
        <View style = {styles.signInButtonStyle}>
          <Button
            title="Sign Up"
            backColor="#08D9D6"
            disabled={false}
            style={{ borderRadius: 7 }}
            onPress={() => onVerifyClick()}
            font = {Fonts.RubikMedium}
          />
        </View>
        <View style={styles.existAccountTextContainer}>
          <Text style={styles.existOneAccountText}>Already have an account?</Text>
          <Text style={styles.signInRedirectText} onPress = {() => onSignInTextClick()}>Sign In</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  signUpcontainer: {
    flex: 1,
    flexDirection: 'column',
    padding: 16,
    paddingTop: 210,
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

  forgotText: {
    color: '#08D9D6',
    fontSize: 10,
    textAlign: 'right',
    paddingTop: 2 
  },  

  addressText: {
    color: '#ffffff',
    fontSize: 12.5,
    paddingBottom: 7,
    fontFamily: Fonts.RubikMedium
  },  

  logoImg: {
    position: 'absolute',
    top: "23%",
    left: "58%",
    width: 130,
    height: 120,
    transform: [
      {translateX: -70},
      {translateY: -62}
    ],
  },

  ellipes: {
    position: "absolute",
    width: 338.17,
    height: 338.17,
    right: 0,
    top: 0,
  },

  signInText: {
    fontSize: 20,
    color: "#ffffff",
    fontFamily: Fonts.RubikMedium,
  },
  
  signInDesText: {
    fontSize: 12.5,
    color: '#EAEAEAD9',
    fontFamily: Fonts.RubikLight
  },

  rememberBox: {
    marginTop: 15,
    paddingLeft: 5,
    flexDirection: "row",
    alignItems: "center",
    alignContent:'center',
  },

  conditionBoxText: {
    paddingLeft: 4,
    textAlign: 'center',
    color: '#ffffff',
    fontSize: 12,
    fontFamily: Fonts.RubikRegular
  },

  signInButtonStyle: {
    paddingTop: 24
  },

  existAccountTextContainer: {
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: "center",
    paddingTop: 10,
  },

  existOneAccountText: {
    color: '#ffffff',
    fontSize: 11,
    fontFamily: Fonts.RubikMedium
  },

  signInRedirectText: {
    paddingLeft: 5,
    color: '#08D9D6',
    fontSize: 11,
    fontFamily: Fonts.RubikMedium
  }
})
export default SignUp;