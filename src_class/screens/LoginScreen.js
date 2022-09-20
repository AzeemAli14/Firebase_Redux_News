import React, {useContext, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Platform,
  StyleSheet,
  ScrollView,
} from 'react-native';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import SocialButton from '../components/SocialButton';
import {AuthContext} from '../navigation/AuthProvider';
import TopBar from '../components/TopBar';

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    state = {
      email: '',
      password: '',
    };
  }

  render() {
    
    const {login} = this.Context(AuthContext);

    const navigation = navigation();

    const { email, password } = this.state;

    handleEmailChange = email => this.setState({email});

    handlePasswordChange = password => this.setState({password});

    handleButtonPress = () => {
      const {email, password} = this.state;
      this.props.onButtonPress(login(email, password));
    };

    return (
      <ScrollView contentContainerStyle={styles.container}>
        <TopBar />
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

        <FormButton buttonTitle="Sign In" onPress={this.handleButtonPress} />

        <TouchableOpacity style={styles.forgotButton} onPress={() => {}}>
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
          onPress={() => navigation.navigate('Signup')}>
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
//   login: loginUser,
//   restore: restoreSession
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
    backgroundColor: '#fff',
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