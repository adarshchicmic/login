import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';

import styles from '../styles';

class Button extends Component {
  constructor(props) {
    super(props);
  }
  onPress = value => {
    console.log('Login Button Pressed');
  };
  render() {
    return (
      <View style={{marginLeft: 5}}>
        <TouchableOpacity onPress={this.props.onPress}>
          <View style={styles.button}>
            <Text style={styles.buttonText}> Login </Text>
          </View>
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 20,
            textAlign: 'center',
            marginBottom: 20,
            marginTop: 10,
          }}>
          {' '}
          Or{' '}
        </Text>
        <TouchableOpacity>
          <View style={styles.button}>
            <Text style={styles.buttonText}> Google </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.button}>
            <Text style={styles.buttonText}> Twitter </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Button;
