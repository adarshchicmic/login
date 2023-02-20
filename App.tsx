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

class Login extends Component{
  render(){
    return(
      <SafeAreaView style = {styles.container}>
        <View style = {styles.container1}> 
          <Text style ={styles.first}> Login </Text>
          <Text style = {styles.second}> Login your account - enjoy exclusive features and many more </Text>
        </View>
        
        <Text style = {styles.third}> Email </Text>
        <TextInput
          style ={ styles.inputWala}
          placeholder = "Type your email here... "
          inputMode = 'email'
          autoFocus = {true}
        />
        <Text style = {styles.third}> Password </Text>
        <TextInput 
          style = {styles.inputWala}
          placeholder = "Password"
          
        />
        <View style = {styles.rememFor}>
          <Text style = {styles.second}> Remember Me </Text>
          <Text> Forgot Password? </Text>
        </View>
        
        <TouchableHighlight >
            <View style = {styles.button}>
              <Text style = {styles.buttonText}> Login </Text> 
            </View>
        </TouchableHighlight>
        <Text style = {{ textAlign: 'center'}}> Or </Text>
        <TouchableHighlight >
            <View style = {styles.button}>
              <Text style = {styles.buttonText}> Google </Text> 
            </View>
        </TouchableHighlight>
        <TouchableHighlight >
            <View style = {styles.button}>
              <Text style = {styles.buttonText}> Twitter </Text> 
            </View>
        </TouchableHighlight>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 30,


  },
  container1: {
    marginTop: 40,
    marginBottom: 100
    
  },
  first: {
    fontSize: 40,
    fontWeight: 'bold'

  },
  second: {
    color: '#bcbcbc',
    fontWeight: 'bold',
  },
  third: {
    fontSize: 20,
    fontWeight: 'bold'
    
  },
  inputWala:{
    height: 60,
    margin: 10,
    borderWidth: 1,
    padding: 20,
    borderColor: 'blue'
  },
  rememFor: {
    flexDirection: 'row',
    marginBottom: 50,
  },
  button: {
    height: 60,
    marginBottom: 10,
    width: 350,
    alignItems: 'center',
    backgroundColor: '#2196F3',
  },
  buttonText: {
    textAlign: 'center',
    padding: 10,
    color: 'white',
    fontSize: 30
    
  }
})


export default Login;