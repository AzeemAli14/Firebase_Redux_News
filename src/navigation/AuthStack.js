import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import SignupScreen from '../screens/SignupScreen';
import LoginScreen from '../screens/LoginScreen';

import FontAwesome from 'react-native-vector-icons/FontAwesome';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { COLOR_WHITE } from '../constants/Colors';

const Stack = createStackNavigator();

const AuthStack = () => {
  const [isFirstLaunch, setIsFirstLaunch] = useState(null);
  // Here we will set the state of the application.
  // This state will be used to determine whether the user is currently a new user or not.
  let routeName;

  useEffect(() => {
     // By mounting the state of the application, at the start of the first launch, we will determine 
    //whether the application has already been launched or not by using AsyncStorage.
    AsyncStorage.getItem('alreadyLaunched').then((value) => {
      if (value == null) {
        // From the AsyncStorage it will determine whether the application is already 
        //launched or not.
        AsyncStorage.setItem('alreadyLaunched', 'true'); // No need to wait for `setItem` to finish, although you might want to handle errors
        setIsFirstLaunch(true);
         // If the application was not launched before, we will set the state of the first launch to true.
      } else {
        setIsFirstLaunch(false);
        // If the application was launched before, we will set the state of the first launch to false.
      }
    }); // Add some error handling, also you can simply do setIsFirstLaunch(null)
  
    GoogleSignin.configure({
      webClientId: '252242498020-7cir4bfg42tqloj3kq6vautcd43dtohg.apps.googleusercontent.com',
    });
  
  }, []);

  if (isFirstLaunch === null) {
    return null; 
    // This is the 'tricky' part: The query to AsyncStorage is not finished, 
    //but we have to present something to the user. Null will just render nothing, 
    //so you can also put a placeholder of some sort, 
    //but effectively the interval between the first mount and AsyncStorage retrieving your data won't be 
    //noticeable to the user. But if you want to display anything then you can use a LOADER here
  } else if (isFirstLaunch == true) {
    // If the first launch state is true, then we will navigate the user to the registering
    routeName = 'Signup';
  } else {
    routeName = 'Login';
  }
  // If the first launch state is false, then we will navigate the user to the login page.

  return (
    <Stack.Navigator initialRouteName={routeName} screenOptions={{headerShown: false, statusBarColor: COLOR_WHITE}}>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
      />
      <Stack.Screen
        name="Signup"
        component={SignupScreen}
      />
    </Stack.Navigator>
    //Here we are navigation the user to the designated page.
  );
};

export default AuthStack;