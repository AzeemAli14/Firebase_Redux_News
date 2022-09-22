import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen'
import Business from '../screens/Business'
import HealthScreen from '../screens/HealthScreen'
import SportsScreen from '../screens/SportsScreen'
import TechScreen from '../screens/TechScreen'
import ProfileScreen from '../screens/ProfileScreen'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { COLOR_WHITE } from '../constants/Colors';

const TabStack = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator initialRouteName='Home' screenOptions={{headerShown: false, statusBarColor: "#fff"}}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Business"
          component={Business}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="trending-down" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Health"
          component={HealthScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="sick" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Sports"
          component={SportsScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="sports-cricket" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Tech"
          component={TechScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="api" color={color} size={size} />
            ),
          }}
        />
         <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="person" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
  );
};

export default TabStack;

const styles = StyleSheet.create({});
