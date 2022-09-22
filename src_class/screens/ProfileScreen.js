import {StyleSheet, Text, View} from 'react-native';
import React, {Component, useState} from 'react';
import auth from '@react-native-firebase/auth';
import {TouchableOpacity, Image, StatusBar} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import {androidCameraPermission} from '../constants/Permissions';
import {Platform} from 'react-native';
import {Alert} from 'react-native';
import {COLOR_BLACK, COLOR_BLUE} from '../constants/Colors';
import imgPlaceHolder from '../assets/profile-pic.jpg';
import FormButton from '../components/FormButton';

class ProfileScreen extends Component {
  constructor(props) {
    super(props);
    state = {
      profile: null,
    };
  }

  chooseImg = () => {
    const permissionStatus = androidCameraPermission();
    if (permissionStatus || Platform.OS == 'android') {
      Alert.alert('Profile Picture', 'Choose an option', [
        {text: 'Cancel', onPress: () => {}},
        {text: 'Gallery', onPress: this.onGallery},
        {text: 'Camera', onPress: this.onCamera},
      ]);
    }
  };
  logout = async () => {
    try {
      await auth().signOut();
    } catch (e) {
      console.log(e);
    }
  };
  onGallery = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log(image);
      this.setState({profile: image.path});
    });
  };

  onCamera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log(image);
      this.setState({profile: image.path});
    });
  };

  onSelectedImage = image => {
    let newDataImg = [...this.state.imageList];

    const source = {uri: image.path};
    let item = {
      id: this.state.imageList.length + 1,
      url: source,
    };
    // console.log(this.onDelete);
    newDataImg.push(item);
    this.setState({imageList: newDataImg});
  };

  render() {
    let profile = this.state;
    return (
      <View style={styles.container}>
        <StatusBar
          barStyle="dark-content"
          hidden={false}
          backgroundColor="#fff"
          translucent={false}
        />
        <View>
          <Image
            style={styles.image}
            source={profile ? {uri: profile} : imgPlaceHolder}
          />
          <TouchableOpacity onPress={this.chooseImg} style={{marginTop: 20, alignItems: 'center'}}>
            <Text style={{color: '#000'}}> Choose Image </Text>
          </TouchableOpacity>
        </View>
        <View>
          <FormButton buttonTitle="logout" onPress={this.logout} />
        </View>
      </View>
    );
  }
}

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 60,
    borderColor: COLOR_BLACK,
    borderWidth: 3,
  },
});
