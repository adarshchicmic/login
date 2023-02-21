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
import Button from './src/Button';
import Input from './src/Input';
import Checkbox from './src/CheckBox'
class App extends Component{
  constructor(props){
    super(props);
    this.state = {email: '', password: ''}
  }
  getEmail = (value) => {
    console.log(value);
  };
  
  getPassword = (value) => {
    console.log(password);
  };
  render(){
    return(
      <SafeAreaView style = {styles.container}>
        <Login  />
        <Input email = {getEmail} password = {getPassword}/>
        <Checkbox />
        <Button />
        {/* <Text style={styles.test(10)}>test styling</Text> */}
      </SafeAreaView>
    )
  }
}




export default App;