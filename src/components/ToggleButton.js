
import React, { useState, useRef } from 'react';
import {
  View,
  StyleSheet,
  Animated,
  TouchableOpacity,
  Easing
} from 'react-native';


const ToggleButton = () => {

  const positionButton = useRef(new Animated.Value(0)).current;

  const [isOn, setIsOn] = useState(false);

  const startAnimToOff = () => {
    Animated.timing(positionButton,{
      toValue:0,
      duration: 100,
      useNativeDriver: false,
      easing:Easing.ease
    }).start()
  };

  const startAnimToOn = () => {
  Animated.timing(positionButton,{
      toValue:1,
      duration: 100,
      useNativeDriver: false,
      easing: Easing.ease
    }).start()
  };

  const positionInterPol = positionButton.interpolate({inputRange:[0,1],outputRange:[0,13]})

  const backgroundColorAnim = positionButton.interpolate({inputRange:[0,1],outputRange:["#acacac","#08d9d6"]})

  const initialOpacityOn = positionButton.interpolate({inputRange:[0,1],outputRange:[0,1]})

  const initialOpacityOff = positionButton.interpolate({inputRange:[0,1],outputRange:[1,0]})

  const onPress = () => {
    if (isOn) {
      startAnimToOff();
      setIsOn(false);
    } else {
      startAnimToOn();
      setIsOn(true);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={{height:20,width:35}}  activeOpacity={0.9} onPress={onPress} >
      <Animated.View style={[styles.mainStyes,{
        backgroundColor:backgroundColorAnim
      }]} >
        {/* <Animated.Text
          style={[
            styles.eahcStyles,
            {
              opacity: initialOpacityOn,
            },
          ]}>
          ON
        </Animated.Text>
        <Animated.Text
          style={[
            styles.eahcStylesOf,
            {
              opacity: initialOpacityOff,
            },
          ]}>
          OFF
        </Animated.Text> */}
        <Animated.View style={[styles.basicStyle,{
          transform:[{
            translateX:positionInterPol
          }]
        }]} />
          </Animated.View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: 'center',
    position: 'relative',
    // backgroundColor: '#ecf0f1',
    width: 35,
    height: 20
    // padding: 8,
  },
  basicStyle: {
    height: 17.5,
    width: 17.5,
    borderRadius: 20,
    backgroundColor: '#FFF',
    // marginTop: 5,
    // marginLeft: 5,
  },
  // eahcStyles: {
  //   fontSize: 14,
  //   color: '#f5dd4b',
  //   position: 'absolute',
  // },

  // eahcStylesOf: {
  //   fontSize: 14,
  //   color: '#f4f3f4',
  //   position: 'absolute',
  // },
  mainStyes: {
    borderRadius: 30,
    backgroundColor: '#81b0ff',
    height: 17,
    width: 30.5,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default ToggleButton;