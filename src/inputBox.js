import React, {useState} from 'react';
import {View, TextInput} from 'react-native';

export default function InputBox({
  PlaceHolder = '',
  Style = {},
  Value,
  KeyBoardChange = '',
  SecureTextEntry = false,
  AutoCapitalize = '',
  testFunction = () => {},
}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View>
      <TextInput
        placeholder={PlaceHolder}
        style={Style}
        value={Value}
        onChangeText={testFunction}
        keyboardType={KeyBoardChange}
        autoCapitalize={AutoCapitalize}
        secureTextEntry={SecureTextEntry}
      />
    </View>
  );
}
