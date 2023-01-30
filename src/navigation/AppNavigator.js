import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//screens
import SplashScreens from '../screens/SplashScreens';
import SignInScreen from '../screens/SignIn';
import LoadingScreen from '../screens/Loading';
import SignUpScreen from '../screens/SignUp';
import VerificationScreen from '../screens/Verification';
import HomePageScreen from '../screens/HomePage';
import CameraStartScreen from '../screens/CameraStart';
import MicrophoneStartScreen from '../screens/MicrophoneStart';
import LocationStartScreen from '../screens/LocationStart';
import SettingScreen from '../screens/Setting';
import CancelSubscriptionScreen from '../screens/CancelSubscription';
// import ForgotPasswordScreen from '../screens/ForgotPassword';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreens">
        <Stack.Screen name='SplashScreens' component = {SplashScreens} options = {{headerShown: false, gestureEnabled: false}} />
        <Stack.Screen name='SignIn' component = {SignInScreen} options = {{headerShown: false, gestureEnabled: false}} />
        <Stack.Screen name='Loading' component = {LoadingScreen} options = {{headerShown: false, gestureEnabled: false}} />
        <Stack.Screen name='SignUp' component = {SignUpScreen} options = {{headerShown: false, gestureEnabled: false}} />
        <Stack.Screen name='Verification' component = {VerificationScreen} options = {{headerShown: false, gestureEnabled: false}} />
        <Stack.Screen name='HomePage' component = {HomePageScreen} options = {{headerShown: false, gestureEnabled: false}} />
        <Stack.Screen name='CameraStart' component = {CameraStartScreen} options = {{headerShown: false, gestureEnabled: false}} />
        <Stack.Screen name='MicrophoneStart' component = {MicrophoneStartScreen} options = {{headerShown: false, gestureEnabled: false}} />
        <Stack.Screen name='LocationStart' component = {LocationStartScreen} options = {{headerShown: false, gestureEnabled: false}} />
        <Stack.Screen name='Setting' component = {SettingScreen} options = {{headerShown: false, gestureEnabled: false}} />
        <Stack.Screen name='CancelSubscription' component = {CancelSubscriptionScreen} options = {{headerShown: false, gestureEnabled: false}} />
        {/* <Stack.Screen name='ForgotPassword' component = {ForgotPasswordScreen} options = {{headerShown: false, gestureEnabled: false}} /> */}
      </Stack.Navigator>
    </NavigationContainer>

  )
}

export default AppNavigator;