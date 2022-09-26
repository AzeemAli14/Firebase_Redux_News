// import React, {Component} from 'react'
// // import Provider from './src/navigation'
// // import Provider from './src_class/'
// import ProfileScreen from './src/screens/ProfileScreen'
// import { AuthProvider } from './src/navigation/AuthProvider';
// import Routes from './src/navigation/Routes';
// /* Functional Components */
// // const App = () => {
// //   return (
// //     <AuthProvider>
// //       <Routes />
// //     </AuthProvider>/* Here we import Functional Components Provider from index.js */
// //   )
// // }

// // export default App

// /* Class Components */

import AppContainer from './src_class/navigation'
import SignupScreen from './src_class/screens/SignupScreen';
import LoginScreen from './src_class/screens/LoginScreen';
import React, { Component } from 'react';
class App extends Component {
  render() {
    return (
      <AppContainer/> /* Here we import Class Components AppContainer from index.js */
    )
  }
}

export default App;

// import React from 'react'
// import SplashScreen from './src_class/screens/SplashScreen'

// const App = () => {
//   return (
//     <SplashScreen />
//   )
// }

// export default App
