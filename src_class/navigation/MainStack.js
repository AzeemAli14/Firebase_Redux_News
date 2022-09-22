import React from 'react';
import TabStack from './TabStack';
import {createStackNavigator} from '@react-navigation/stack';
import {COLOR_WHITE} from '../constants/Colors';
import {connect, Provider} from 'react-redux';
import configureStore from '../redux/store';

// const store = configureStore();

const MainStack = () => {
  const Stack = createStackNavigator();

  return (
    // <Provider store={store}>
        <Stack.Navigator
          screenOptions={{headerShown: false, statusBarColor: "#fff"}}
          initialRouteName="Tabs">
          <Stack.Screen name="Tabs" component={TabStack} />
        </Stack.Navigator>
  //   </Provider>
  );
};

export default MainStack;
