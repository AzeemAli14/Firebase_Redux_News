import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import * as types from './actionsTypes';

export const restoreSession = () => dispatch => {
  dispatch(sessionLoading());
  dispatch(sessionRestoring());

  firebaseService.auth().onAuthStateChanged(user => {
    if (user) {
      dispatch(sessionSuccess(user));
    } else {
      dispatch(sessionLogout());
    }
  });
};

export const loginUser = async(email, password) => dispatch => {
  dispatch(sessionLoading());
//Here we use the login arrow function to set the user logging in
          
    // Async keyword use for define function for use await task, 
    // when you want to use to await for wait task then first you have to define async function. 
    
    
    // Await keyword use for stop execution till task response, 
    // we will use multiple await calls in one async function

    try {
      // For the authentication we will pass email and password to the firebase function.
      auth().signInWithEmailAndPassword(email, password);
    } catch (e) {
      // If any exception is thrown we will return error message to the console
      console.log(e);
    }
  }

export const signupUser = async (email, password) => dispatch => {
  dispatch(sessionLoading());
  try {
   auth().createUserWithEmailAndPassword(email, password)
    .then(() => {
      firestore().collection('users').doc(auth().currentUser.uid)
      .set({
          fname: '',
          lname: '',
          email: email,
          createdAt: firestore.Timestamp.fromDate(new Date()),
          userImg: null,
      })
      .catch(error => {
          console.log('Something went wrong with added user to firestore: ', error);
      })
    })
    .catch(error => {
        console.log('Something went wrong with sign up: ', error);
    });
  } catch (e) {
    console.log(e);
  }
}

export const logoutUser = async () => dispatch => {
  dispatch(sessionLoading());
 //Here we use the logout arrow function to set the user logout from firebase DB
    try {
     auth().signOut();
    } catch (e) {
      console.log(e);
    }
  }

const sessionSuccess = user => ({
  type: types.SESSION_SUCCESS,
  user
});

const signupSuccess = user => ({
  type: types.SIGNUP_SUCCESS,
  user
});

const sessionLogout = () => ({
  type: types.SESSION_LOGOUT
});