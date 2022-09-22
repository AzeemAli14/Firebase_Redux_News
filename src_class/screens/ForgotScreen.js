import {
  View,
  StyleSheet,
  ScrollView,
  Image,
  Text,
  Alert,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import React, {Component} from 'react';
import {COLOR_WHITE} from '../constants/Colors';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import auth from '@react-native-firebase/auth';

class ForgotScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
    };
  }

  forgetPassword = async() => {
    const {email} = this.state
    if (!email) {
      Alert.alert('Error', 'Please enter email');
    }

    // if (!email.valid) {
    //   Alert.alert('Please enter a valid email');
    // }

    if (email) {
      Alert.alert('Success', 'Your password has been reset successfully');
    }

    return await auth().sendPasswordResetEmail(email);
  };

  handleInputChange = email => this.setState({email});

  render() {
    const navigation = this.props.navigation;
    const {email} = this.state;
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#fff" translucent = {true}/>
        <Image source={require('../assets/forgot.png')} style={styles.logo} />
        <Text style={styles.text}>Forgotten Password ?</Text>
        <Text style={styles.textref}>We have a solution</Text>
        <View style={styles.container2}>
          <FormInput
            labelValue={email}
            onChangeText={this.handleInputChange}
            placeholderText="Email"
            iconType="user"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
          />
        </View>
        <View style={styles.container2}>
          <FormButton buttonTitle="Confirm" onPress={this.forgetPassword} />
        </View>
        <View></View>
        <TouchableOpacity
          style={styles.forgotButton}
          onPress={() => navigation.navigate('Login')}>
          <Text style={styles.navButtonText}>Back to Login</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

export default ForgotScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    paddingTop: 50,
    backgroundColor: COLOR_WHITE,
  },
  container2: {
    flex: 1,
    marginTop: 50,
    alignItems: 'center',
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
    marginTop: 10,
    marginBottom: 10,
    color: '#051d5f',
    fontWeight: 'bold',
  },
  textref: {
    fontFamily: 'Kufam-SemiBoldItalic',
    fontSize: 20,
    marginTop: 5,
    marginBottom: 10,
    color: '#051d5f',
    fontWeight: 'bold',
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#2e64e5',
    fontFamily: 'Lato-Regular',
  },
});
