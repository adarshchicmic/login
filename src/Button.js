import React, {Component} from 'react';
import {View, Text, TextInput, TouchableHighlight, TouchableOpacity} from 'react-native';

import styles from '../styles'

class Button extends Component{
    onPress = (value) =>{
        console.log("Login Button Pressed");
    }
    render() {
        return(
            <View>
                <TouchableOpacity onPress={this.onPress}>
                    <View style = {styles.button}>
                        <Text style = {styles.buttonText}> Login </Text> 
                    </View>
                </TouchableOpacity>
                <Text style = {{ fontSize: 20, textAlign: 'center', marginBottom: 10, marginTop: 40}}> Or </Text>
                <TouchableOpacity>
                    <View style = {styles.button}>
                        <Text style = {styles.buttonText}> Google </Text> 
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style = {styles.button}>
                        <Text style = {styles.buttonText}> Twitter </Text> 
                    </View>
                </TouchableOpacity>
            </View>
        )
        
    }
}

export default Button;