import {
  Text,
  View,
  TextInput,
  Alert,
  TouchableWithoutFeedback,
} from 'react-native';
import React, {Component} from 'react';
import styles from '../styles';
import credential from './credential';
import Checkbox from './CheckBox';
import Button from './Button';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      emailValid: false,
      passwordValid: false,
      emailFocus: false,
      passwordFocus: false,
      passwordVisible: true,
    };
  }
  togglePasswordVisibility = () => {
    this.setState(prevState => ({
      passwordVisible: !this.prevState.passwordVisible,
    }));
  };
  emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

  handleEmailValidation = newEmail => {
    this.setState({
      email: newEmail,
      emailValid: this.emailRegex.test(newEmail),
    });
  };
  handlePasswordValidation = newPassword => {
    this.setState({
      password: newPassword,
      passwordValid: this.passwordRegex.test(newPassword),
    });
  };
  handleEmailFocus = () => {
    this.setState({emailFocus: true});
  };
  handleEmailBlur = () => {
    this.setState({emailFocus: false});
  };
  handlePasswordFocus = () => {
    this.setState({passwordFocus: true});
  };
  handlePasswordBlur = () => {
    this.setState({passwordFocus: false});
  };

  handleEmailChange = email => {
    this.setState({email});
  };
  handlePasswordChange = password => {
    this.setState({password});
  };
  handleLoginPress = () => {
    let email = this.state.email;
    let password = this.state.password;
    this.props.onLogin(email, password);
  };
  combinedFunctionE = newText => {
    this.handleEmailValidation(newText);
    this.handleEmailChange;
  };
  combinedFunctionP = newText => {
    this.handlePasswordValidation(newText);
    this.handlePasswordChange;
  };

  render() {
    return (
      <TouchableWithoutFeedback>
        <View>
          <View styles={styles.InputContainer}>
            <Text style={[styles.third, {marginTop: '20%'}]}>
              {' '}
              Email<Text style={{color: 'red'}}>*</Text>{' '}
            </Text>
            <TextInput
              onFocus={() => this.handleEmailFocus()}
              onBlur={() => this.handleEmailBlur()}
              // onChangeText={(text) => {this.validateE(text);
              //         this.handlePasswordChange(text);
              // }}
              onChangeText={text => {
                this.combinedFunctionE(text);
              }}
              autoCapitalize="none"
              value={this.state.email}
              style={[styles.inputWala, this.state.emailFocus && styles.Focus]}
              placeholder="Type your email here... "
              inputMode="email"
              autoFocus={true}
            />
            {!this.state.emailValid && this.state.email !== '' && (
              <Text style={{color: 'red', marginLeft: 10}}>
                {' '}
                type valid email eg: abc@gmail.com{' '}
              </Text>
            )}

            <Text style={styles.third}>
              {' '}
              Password <Text style={{color: 'red'}}>*</Text>
            </Text>
            <TextInput
              style={[
                styles.inputWala,
                this.state.passwordFocus && styles.Focus,
              ]}
              // onChangeText = {(text) => {this.validateP(text);

              // }}
              onChangeText={text => {
                this.combinedFunctionP(text);
              }}
              placeholder="Password"
              value={this.state.password}
              secureTextEntry={this.state.passwordVisible}
              onFocus={() => this.handlePasswordFocus()}
              onBlur={() => this.handlePasswordBlur()}
            />
            {!this.state.passwordValid && this.state.password !== '' && (
              <Text style={{color: 'red', marginLeft: 10}}>
                Password must be at least 8 characters long and contain at least
                one uppercase letter, one lowercase letter, and one digit
              </Text>
            )}
            <Text style={{color: 'red'}}>{this.state.alertMessageP}</Text>
          </View>
          <Checkbox />
          {(!this.state.emailValid || !this.state.passwordValid) &&
            this.state.email !== '' &&
            this.state.password !== '' && (
              <Text style={{color: 'red'}}>
                {' '}
                Enter valid email and password{' '}
              </Text>
            )}
          <Button onPress={this.handleLoginPress} />
        </View>
      </TouchableWithoutFeedback>
    );
  }
}
