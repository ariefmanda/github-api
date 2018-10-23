import React, {Component} from 'react';
import { NavigateActions, StackNavigator } from 'react-navigation';

// import Pages
import Home from './src/Home'

class App extends Component{
  render() {
    return <AppNavigator 
      ref= {component=>{
        this.App = component
      }}
    />
  }
}

let AppNavigator = StackNavigator({
  Home: { screen: Home }
},{
  initialRouteName: 'Home',
  headerMode : 'none'
})

export default App
