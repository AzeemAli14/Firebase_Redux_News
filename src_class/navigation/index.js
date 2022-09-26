import React, {useState, useEffect, Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

// import navigators
import MainStack from './MainStack';
import AuthNavigator from './AuthNavigator';

// firebase auth
import auth from '@react-native-firebase/auth';

class AppContainer extends Component {
  constructor(props) {
    super(props);
    this.unsubscriber = null; // As the client Auth state is null. So, we declare unscriber as null.
    this.state = {
      initializing: true, 
      // Initializing state is used to determine, 
      // whether the state of the user authentication is initialized or not.
      user: null, // As the user is not initialinzed so we declare as null.
    };
  }
      // When this screen is rendered, the part which has to be mounted is in componentDidMount
  componentDidMount() {
    this.unsubscriber = auth().onAuthStateChanged(user => {
      //By using the onAuthStateChanged, it will determine the state of the user authentication
        this.setState({user});
         // and will update the state of the user authentication
      })
      .then(initializing => {
        this.setState({initializing: false});
        // After the user state is initialized.
    //we will update the state of the initialing and set it to the false value.
      })
      .catch(err => {
        // If any exception occurs we will show it in alert box.
        alert(err.message);
      });

      const subscriber = auth().onAuthStateChanged(this.onAuthStateChanged);
      // As the Auth state changed, So we will save the state of the user in subscribe.
      return subscriber;

      GoogleSignin.configure({
        webClientId: '252242498020-7cir4bfg42tqloj3kq6vautcd43dtohg.apps.googleusercontent.com',
      });
  }

  // After the component is being mounted, componentWillMount is used to check that component has been mounted or not
  componentWillUnmount() {
    if (this.unsubscriber) {
      // if the state of the user changed, unsubscriber value has been changed to true.
      this.unsubscriber();
    }
  }
  //     // Set an initializing state whilst Firebase connects

  //    // Handle user state changes
      onAuthStateChanged = (user) => {
        // const { user,initializing } = this.state;
      this.setState({ user, initializing: false });
      // if (initializing) {
      //   this.setState({initializing: false});
      // }
    }

      
     // unsubscribe on unmount

  //    if (initializing) {
  //     return null;
  //    }

    render() {
      return(
          <NavigationContainer>
              { this.state.user ? <MainStack /> : <AuthNavigator /> }
          </NavigationContainer>
      )
    }
}

export default AppContainer;
