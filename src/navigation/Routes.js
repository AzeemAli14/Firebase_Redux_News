import React, {useContext, useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import {AuthContext} from './AuthProvider';

import AuthStack from './AuthStack'; // From AuthStack we will import the LOGIN and Signup routes.
import MainStack from './MainStack'; // From MainStack we will import the iternal routes.

const Routes = () => {
  const {user, setUser} = useContext(AuthContext);
  // By using the Context API we can determine the state of the user authentication
  // wheter the user is registered or not
  const [initializing, setInitializing] = useState(true);
// Initializing state is used to determine, 
// whether the state of the user authentication is initialized in the context API or not.

 // Here we will receive the user value
  const onAuthStateChanged = (user) => {
    //By using the onAuthStateChanged, it will determine the state of the user authentication
    setUser(user);
    // and will update the state of the user authentication in the context API
    if (initializing) setInitializing(false);
    // After the user state is initialized in Context API
    //we will update the state of the initialing and set it to the false value.
  };

  useEffect(() => {
    //Subscribe will be used for the client aunthentication state
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    //When the Route function runs, it will authomatically 
    //subscribe to the client aunthentication state
    return subscriber; // unsubscribe on unmount
    // will return the client aunthentication state
  }, []);

  if (initializing) return null;
  //If the initializing state is set to true, then we will return null.
// Because at that time, we didn't know if the initializing state has established the connection with the Firebase.
// So we don't want to display any information at the initializing state.

  return (
    <NavigationContainer>
      {user ? <MainStack /> : <AuthStack />}
    </NavigationContainer>
  );
  // In the NavigationContainer, if the value of the user is defined (means the user is aunthenticated)
      // then will will navigate the user to the MainStack otherwise will navigate to the AuthStack.
};

export default Routes;