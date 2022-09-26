import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {Component} from 'react';
import FormButton from '../components/FormButton';
import {COLOR_WHITE} from '../constants/Colors';

class SplashScreen extends Component {
  constructor(props) {
    super(props);
    // navigation = this.props.navigation;
  }

  // buttonFunctional() {
  //   this.navigation.navigate("Routes");
  // }

  // buttonClass() {
  //   this.navigation.navigate("AppContainer");
  // }

  render() {
    const navigation  = this.props.navigation;
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <StatusBar
          barStyle="dark-content"
          hidden={false}
          backgroundColor="#fff"
          translucent={true}
        />
        <Image source={require('../assets/news.png')} style={styles.logo} />
        <Text style={styles.text}>News App</Text>
        <Text style={styles.textref}>Let's get started</Text>
        <View style={styles.container2}>
          <View>
            <FormButton
              buttonTitle="Functional Components"
              onPress={() => navigation.navigate("Forgot")}
            />
          </View>
          <View>
            <FormButton
              buttonTitle="Class Components"
              onPress={() => navigation.navigate("AppContainer")}/>
          </View>
        </View>
        <View style={styles.textPrivate}>
          <Text style={styles.color_textPrivate}>
            By registering, you confirm that you accept our{' '}
          </Text>
          <TouchableOpacity onPress={() => alert('Terms Clicked!')}>
            <Text style={[styles.color_textPrivate, {color: '#e88832'}]}>
              Terms of service
            </Text>
          </TouchableOpacity>
          <Text style={styles.color_textPrivate}> and </Text>
          <Text style={[styles.color_textPrivate, {color: '#e88832'}]}>
            Privacy Policy
          </Text>
        </View>
      </ScrollView>
    );
  }
}

export default SplashScreen;

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
    justifyContent: 'space-evenly',
    backgroundColor: COLOR_WHITE,
  },
  logo: {
    height: 250,
    width: 250,
    resizeMode: 'cover',
  },
  text: {
    fontFamily: 'Kufam-SemiBoldItalic',
    fontSize: 36,
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
  textPrivate: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 35,
    justifyContent: 'center',
  },
  color_textPrivate: {
    fontSize: 13,
    fontWeight: '400',
    fontFamily: 'Lato-Regular',
    color: 'grey',
  },
});