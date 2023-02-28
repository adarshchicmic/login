import React, {Component} from 'react';
import {View, Text, TextInput} from 'react-native';
import styles from '../styles';

class Login extends Component {
  render() {
    return (
      <View>
        <View style={styles.container1}>
          <View style={styles.loginField}>
            <Text style={{fontSize: 20, marginRight: 0}}> + </Text>
            <Text style={styles.first}> Login </Text>
          </View>
          <Text style={styles.cutSign}>X</Text>
        </View>
        <Text style={styles.second}>
          {' '}
          Login your account - enjoy exclusive{' '}
        </Text>
        <Text style={styles.second}> features and many more </Text>
      </View>
    );
  }
}

export default Login;
