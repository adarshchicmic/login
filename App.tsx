import React, {Component} from "react";
import {
  View,
  SafeAreaView,
  Text,
  TextInput,
  Image,
  TouchableHighlight,
  StyleSheet,
  
} from "react-native";
import styles from './styles';
import Login from './src/Login';
import Input from './src/Input';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {email: '', password: ''}
  }
  handleLogin = (email, password) => {
    console.log("Email:", email);
    console.log("Password:", password);
  }
 
  render(){
    return(
      <SafeAreaView style = {styles.container}>
        <Login  />
        <Input onLogin = {this.handleLogin}/>
        
        {/* <Text style={styles.test(10)}>test styling</Text> */}
      </SafeAreaView>
    )
  }
}




export default App;