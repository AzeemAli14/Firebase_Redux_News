import React, {Component, useContext, useState} from 'react';
import {
  Alert,
  View,
  Text,
  TouchableOpacity,
  Image,
  StatusBar,
  Platform,
  StyleSheet,
  ScrollView,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import SocialButton from '../components/SocialButton';
import { COLOR_WHITE } from '../constants/Colors';

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  handleEmailChange = email => this.setState({email});

  handlePasswordChange = password => this.setState({password});

  // handleButtonPress = () => {
  //   const {email, password} = this.state;
  //   Auth.signIn(email, password);
  // };

  signIn = async() => {
    const {email, password} = this.state;
    if (!email || !password) {
      Alert.alert('Error', 'Please enter all fields');
    }

    return await auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {})
      .catch(err => Alert.alert(err.code, err.message));
  };

  render() {
    const navigation = this.props.navigation;
    const {email, password} = this.state; // For managing the state of email and password in labelValue.
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#fff" translucent = {true}/>
        <Image source={require('../assets/login.png')} style={styles.logo} />
        <Text style={styles.text}>Welcome Back</Text>

        <FormInput
          labelValue={email}
          onChangeText={this.handleEmailChange}
          placeholderText="Email"
          iconType="user"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
        />

        <FormInput
          labelValue={password}
          onChangeText={this.handlePasswordChange}
          placeholderText="Password"
          iconType="lock"
          secureTextEntry={true}
        />

        <FormButton buttonTitle="Sign In" onPress={this.signIn} />

        <TouchableOpacity style={styles.forgotButton} onPress={() => navigation.navigate("Forgot")}>
          <Text style={styles.navButtonText}>Forgot Password?</Text>
        </TouchableOpacity>

        {Platform.OS === 'android' ? (
          <View>
            <SocialButton
              buttonTitle="Sign In with Facebook"
              btnType="sc-facebook"
              color="#4867aa"
              backgroundColor="#e6eaf4"
              onPress={() => fbLogin()}
            />

            <SocialButton
              buttonTitle="Sign In with Google"
              btnType="sc-google-plus"
              color="#de4d41"
              backgroundColor="#f5e7ea"
              onPress={() => googleLogin()}
            />
          </View>
        ) : null}

        <TouchableOpacity
          style={styles.forgotButton}
          onPress={() => navigation.navigate("SignUp")}>
          <Text style={styles.navButtonText}>
            Don't have an acount? Create here
          </Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

// const mapStateToProps = ()) => ({
//   user: user
// });

// const mapDispatchToProps = {
//   login: loginUser
// };

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(LoginScreen);

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    paddingTop: 50,
    backgroundColor: COLOR_WHITE,
  },
  logo: {
    height: 250,
    width: 250,
    resizeMode: 'cover',
  },
  text: {
    fontFamily: 'Kufam-SemiBoldItalic',
    fontSize: 28,
    marginBottom: 10,
    color: '#051d5f',
    fontWeight: 'bold',
  },
  navButton: {
    marginTop: 15,
  },
  forgotButton: {
    marginVertical: 35,
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#2e64e5',
    fontFamily: 'Lato-Regular',
  },
});
