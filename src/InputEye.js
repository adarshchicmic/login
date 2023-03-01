import {View, Text, TextInput, Image, TouchableHighlight} from 'react-native';
import React from 'react';
import styles from '../styles';

export default function InputEye({
  PlaceHolder,
  Value,
  KeyBoardChange,
  AutoCapitalize,
  SecureTextEntry,
  pressFunction = () => {},
  onChangeTextFunction = () => {},
}) {
  return (
    <View style={styles.containerForInputEye}>
      <TextInput
        style={styles.inputFieldEye}
        placeholder={PlaceHolder}
        value={Value}
        onChangeText={onChangeTextFunction}
        keyboardType={KeyBoardChange}
        autoCapitalize={AutoCapitalize}
        secureTextEntry={SecureTextEntry}
      />
      <TouchableHighlight style={styles.v} onPress={pressFunction}>
        <Image
          style={styles.visibilityBtn}
          source={require('./closeEye.png')}
        />
      </TouchableHighlight>
    </View>
  );
}
