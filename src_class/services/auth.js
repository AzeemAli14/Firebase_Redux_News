import auth from '@react-native-firebase/auth';
import { Alert } from 'react-native';
import firestore from '@react-native-firebase/firestore';
// import { LoginManager, AccessToken } from 'react-native-fbsdk';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { Component } from 'react';

googleLogin = async() => {
    // Get the users ID token
  const { idToken } = await GoogleSignin.signIn();

  // Create a Google credential with the token
  const googleCredential = auth.GoogleAuthProvider.credential(idToken);

  // Sign-in the user with the credential
  return auth().signInWithCredential(googleCredential);
}

// facebookSignIn = async() => {
//     // Attempt login with permissions
//   const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);

//   if (result.isCancelled) {
//     throw 'User cancelled the login process';
//   }

//   // Once signed in, get the users AccesToken
//   const data = await AccessToken.getCurrentAccessToken();

//   if (!data) {
//     throw 'Something went wrong obtaining access token';
//   }

//   // Create a Firebase credential with the AccessToken
//   const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);

//   // Sign-in the user with the credential
//   return auth().signInWithCredential(facebookCredential);
// }

createUserInDb = (uid, fullName, email) => {
    return firestore().collection('users').doc(uid).set(
        {
            uid,
            fullName,
            email
        }
    )
}

// signup handling
signUp = (fullName, email, password) => {
    if(!fullName || !email || !password){
        Alert.alert('Error', 'Please enter all fields')
    }

    return auth().createUserWithEmailAndPassword(email, password)
    .then( cred => {
        const {uid} = cred.user;

        auth().currentUser.updateProfile({
            displayName: fullName
        })

        return uid
    })
    .then( uid => createUserInDb(uid, fullName, email))
    .catch(
        err => Alert.alert(err.code, err.message)
    )
}

signIn = (email, password) => {
    if(!email || !password){
        Alert.alert('Error', 'Please enter all fields')
    }

    return auth().signInWithEmailAndPassword(email, password)
    .then(() => {})
    .catch(
        err => Alert.alert(err.code, err.message)
    )
}

forgetPassword = (email) => {
    if(!email){
        Alert.alert('Error', 'Please enter email')
    }

    return auth().sendPasswordResetEmail(this.props.email)
}

signOut = () => {
    return auth().signOut()
}

class Auth extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    returns (
    this.signUp,
    signIn,
    this.forgetPassword,
    this.signOut,
    this.facebookSignIn,
    this.googleLogin
    )
  }
}

export default Auth