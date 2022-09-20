import React from 'react';
import TabStack from './TabStack';
import {createStackNavigator} from '@react-navigation/stack';
import {COLOR_WHITE} from '../constants/Colors';
import {connect, Provider} from 'react-redux';
import configureStore from '../redux/store';

// const store = configureStore();
// const RouterRedux = connect()();

const MainStack = () => {
  const Stack = createStackNavigator();

  return (
    // <Provider store={store}>
    //   <RouterRedux
    //     tintColor="#ffffff">
        <Stack.Navigator
          screenOptions={{headerShown: false, statusBarColor: COLOR_WHITE}}
          initialRouteName="Tabs">
          <Stack.Screen name="Tabs" component={TabStack} />
        </Stack.Navigator>
  //     </RouterRedux>
  //   </Provider>
  );
};

export default MainStack;
