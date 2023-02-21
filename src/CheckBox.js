import { Text, View } from 'react-native'
import React, { Component } from 'react'
import styles from '../styles';
import CheckBox from 'react-native-check-box';
export default class Checkbox extends Component {
    constructor(props){
        super(props);
        this.state = {isChecked : true}
    }
  render() {
    return (
        <View style = {styles.rememFor}>
            <CheckBox
                style={{flex: 1, }}
                onClick={()=>{
                    this.setState({
                    isChecked:!this.state.isChecked
                })
                }}
                isChecked={this.state.isChecked}
            />
            <Text style = {styles.rememberMe}> Remember Me </Text>
            <Text style = {styles.forgotMe}> Forgot Password? </Text>
        </View>
    )
  }
}