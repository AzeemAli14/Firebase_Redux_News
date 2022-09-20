import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import auth from '@react-native-firebase/auth';
import {TouchableOpacity, Image} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import {androidCameraPermission} from '../constants/Permissions';
import {Platform} from 'react-native';
import {Alert} from 'react-native';
import {COLOR_BLACK, COLOR_BLUE} from '../constants/Colors';
import imgPlaceHolder from '../assets/profile-pic.jpg';
import FormButton from '../components/FormButton';

class ProfileScreen extends Component{
  constructor(props){
    super(props);
    state = {
      profile: null
    }
  }

  chooseImg = () => {
    const permissionStatus = androidCameraPermission();
    if (permissionStatus || Platform.OS == 'android') {
      Alert.alert('Profile Picture', 'Choose an option', [
        {text: 'Cancel', onPress: () => {}},
        {text: 'Gallery', onPress: onGallery},
        {text: 'Camera', onPress: onCamera},
      ]);
    }
  };
  logout = async () => {
    try {
      await auth().signOut();
    } catch (e) {
      console.log(e);
    }
  }
  onGallery = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log(image);
      setState(profile(image.path));
    });
  };

  onCamera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log(image);
      setState(profile(image.path));
    });
  };

  render () {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={profile ? {uri: profile} : imgPlaceHolder}
      />
      <TouchableOpacity onPress={this.chooseImg} style={{marginTop: 10}}>
        <Text style={{color: '#000'}}> Choose Image </Text>
      </TouchableOpacity>
      <View>
        <FormButton buttonTitle="logout" onPress={this.logout} />
      </View>
    </View>
  );
  }
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  image: {
    width: 110,
    height: 110,
    borderRadius: 60,
    borderColor: COLOR_BLACK,
    borderWidth: 3,
  },
});