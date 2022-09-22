import React, {Component} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '../utils/Dimentions';

import EvilIcons from 'react-native-vector-icons/EvilIcons';

class FormInput extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.inputContainer}>
        <View style={styles.iconStyle}>
          <EvilIcons name={this.props.iconType} size={25} color="#666" />
        </View>
        <TextInput
          value={this.props.labelValue}
          style={styles.input}
          numberOfLines={1}
          placeholder={this.props.placeholderText}
          placeholderTextColor="#666"
          onChangeText={this.props.onChangeText}
          keyboardType={this.props.keyboardType}
          secureTextEntry={this.props.secureTextEntry}
        />
      </View>
    );
  }
}

export default FormInput;

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 5,
    marginBottom: 10,
    width: '100%',
    height: windowHeight / 15,
    borderColor: '#ccc',
    borderRadius: 40,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  iconStyle: {
    padding: 10,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRightColor: '#ccc',
    borderRightWidth: 1,
    width: 50,
  },
  input: {
    padding: 10,
    flex: 1,
    fontSize: 16,
    fontFamily: 'Lato-Regular',
    color: '#333',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputField: {
    padding: 10,
    marginTop: 5,
    marginBottom: 10,
    width: windowWidth / 1.5,
    height: windowHeight / 15,
    fontSize: 16,
    borderRadius: 8,
    borderWidth: 1,
  },
});
