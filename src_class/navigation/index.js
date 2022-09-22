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
    this.unsubscriber = null;
    this.state = {
      initializing: true,
      user: null,
    };
  }

  componentDidMount() {
    this.unsubscriber = auth().onAuthStateChanged(user => {
        this.setState({user});
      })
      .then(initializing => {
        this.setState({initializing: false});
      })
      .catch(err => {
        alert(err.message);
      });
  }

  componentWillUnmount() {
    if (this.unsubscriber) {
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

    componentDidMount() {
      const subscriber = auth().onAuthStateChanged(this.onAuthStateChanged);
      return subscriber;
      }

    componentDidUpdate() {
      GoogleSignin.configure({
        webClientId: '252242498020-7cir4bfg42tqloj3kq6vautcd43dtohg.apps.googleusercontent.com',
      });
     } // unsubscribe on unmount

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
