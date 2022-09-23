import React, {Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import { COLOR_WHITE } from '../../src/constants/Colors';
import ForgotScreen from '../screens/ForgotScreen';
import AppContainer from '.';
import Routes from '../../src/navigation/Routes'

const Stack = createStackNavigator();

class AuthNavigator extends Component {
  render() {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: null,
          statusBarColor: "#fff"
        }}
        initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignupScreen} />
        <Stack.Screen name="Forgot" component={ForgotScreen} />
        <Stack.Screen name="Routes" component={Routes} />
        <Stack.Screen name="AppContainer" component={AppContainer} />
      </Stack.Navigator>
    );
  }
}

export default AuthNavigator;
