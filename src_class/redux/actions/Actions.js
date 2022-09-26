import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import * as types from './actionsTypes';

export const loginUser = async(email, password) => dispatch => {
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
            //Here we use the register arrow function to set the user registering to firebase DB
  try {
        // For the creation of the user, we will pass email and password to the firebase function for the user registeration
   auth().createUserWithEmailAndPassword(email, password)
    .then(() => {
      //Once the user creation has happened successfully, we can add the currentUser into firestore
              //with the appropriate details.
      firestore().collection('users').doc(auth().currentUser.uid)
      .set({
        email: '',
        password: '',
        confirmPassword: '',
        createdAt: firestore.Timestamp.fromDate(new Date()),
      })
                    //ensure we catch any errors at this stage to advise us if something does go wrong
      .catch(error => {
          console.log('Something went wrong with added user to firestore: ', error);
      })
    })
                //we need to catch the whole sign up process if it fails too.
    .catch(error => {
        console.log('Something went wrong with sign up: ', error);
    });
  } catch (e) {
    console.log(e);
  }
}
        //Here we use the logout arrow function to set the user logout from firebase DB
export const logoutUser = async () => dispatch => {
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