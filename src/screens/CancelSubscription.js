import React, {useState} from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import BackButton from "../components/BackButton";
import Images from "../theme/Image";
import Fonts from "../theme/Fonts";

const CancelSubscription = ({ navigation }) => {
  const onHomePageBackClick = () => {
    navigation.push('HomePage');
  }
  
  return (
    <View style = {{flex: 1, position: 'relative', backgroundColor: '#080808'}}>
      <Image style={styles.ellipes} source={Images.ellipes_blur} />
      <View style={{ flexDirection: 'row', position: 'relative', marginTop: 15, marginLeft: 10, alignItems: 'center'}}>
        <BackButton onPress={() => onHomePageBackClick()} />
        <Text style={{ color: '#ffffff', fontFamily: Fonts.RubikMedium, fontSize: 16, marginLeft: '20%'}}>Subscription</Text>
      </View>     
      <View style={styles.subscriptionMainContainer}>
        <Image style={{ width: 60, height: 60 }} source={Images.activityWarningImage} />
        <Text style={{ color: '#ffffff', fontFamily: Fonts.RubikRegular, fontSize: 20, marginTop: 5 }}>Are you sure?</Text>
        <Text style={{ color: '#ffffff', fontFamily: Fonts.RubikRegular, paddingTop: 5 }}>You want to cancel your subscription?</Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={{backgroundColor: '#202020', padding: 9, paddingLeft: 15, paddingRight: 15, marginTop: 20, marginBottom: 10, borderRadius: 5}}>
            <Text style={{color: '#ffffff', fontFamily: Fonts.RubikRegular, fontSize: 11}}>Cancel</Text>
          </View>
          <View style={{backgroundColor: '#cd0000', padding: 9, paddingLeft: 25, paddingRight: 25, marginTop: 20, marginBottom: 10, borderRadius: 5, marginLeft: 30}}>
            <Text style={{color: '#ffffff', fontFamily: Fonts.RubikRegular, fontSize: 11}}>OK</Text>
          </View>
        </View>
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
  subscriptionMainContainer: {
    backgroundColor: '#171717',
    alignItems: 'center',
    borderRadius: 5,
    marginLeft: 15,
    marginRight: 15,
    paddingTop: 8,
    marginTop: 200
  }
})

export default CancelSubscription;