import React, {Component} from 'react'
import Provider from './src/navigation'
import ProfileScreen from './src/screens/ProfileScreen'

/* Functional Components */
const App = () => {
  return (
    <Provider/> /* Here we import Functional Components Provider from index.js */
  )
}

export default App

/* Class Components */
// class App extends Component {
//   render() {
//     return (
//       <Provider/> /* Here we import Class Components AppContainer from index.js */
//     )
//   }
// }

// export default App;