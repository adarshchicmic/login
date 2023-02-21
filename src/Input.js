import { Text, View, TextInput, Alert } from 'react-native'
import React, { Component } from 'react'
import styles from '../styles';
import credential from './credential';


export default class Input extends Component {
    constructor(props){
        super(props);
        this.state = {alertMessageP : "", backgroundColor: 'blue',email : "", password: "", alertMessageE: ""}

    }
    focusedInput = () => { 
        this.setState({
          backgroundColor: 'green',
        })
    }
    
    blurredInput = () => { 
        this.setState({
          backgroundColor: 'gray',
        })
    }
    validateE = (text) => {
        console.log(this.state.email);
        console.log(text);
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
        if (reg.test(text) === false) {
          this.setState({ email: text, alertMessageE: "Type valid email : abc@gmail.com" })
          return false;
        }
        else {
          this.setState({ email: text , alertMessageE: "Correct"})
          
        }
    }
      validateP = (text) => {
        console.log(text);
        let reg = /^(\S)(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹])[a-zA-Z0-9~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]{10,16}$/;
        if (reg.test(text) === false) {
          this.setState({  alertMessageP: "should contain 1 capital letter, 1 small, 1 special character, 1 number" })
          
        }
        else {
          this.setState({ alertMessage: "Correct"})
        }
      }

      handleInput = (value) => {
        this.setState({email: text});
        this.props.email(value);
      }

  render() {
    return (
      <View styles = {styles.InputContainer}>
        <Text style = {[styles.third, {marginTop: '20%'}]}> Email </Text>
        <TextInput
          
          onFocus={ () => this.focusedInput()}
          onBlur={() => this.blurredInput()}
          onChangeText={(text) => {this.validateE(text);
                  this.handleInput(text);
          }}
         
          value = {this.state.email}
          style ={ [styles.inputWala] }
          placeholder = "Type your email here... "
          inputMode = 'email'
          autoFocus = {true}

        />
        <Text style = {{color: 'red'}}> {this.state.alertMessageE} </Text>

        <Text style = {styles.third}> Password </Text>
        <TextInput 
          style = {styles.inputWala}
          onChangeText = {(text) => this.validateP(text)}
          placeholder = "Password"
          value = {this.state.password}
          secureTextEntry = {true}
          onFocus={this.focusedInput}
          onBlur={this.blurredInput}
        />
        <Text style = {{ color: 'red'}}>{this.state.alertMessageP}</Text>
      </View>
    )
  }
}