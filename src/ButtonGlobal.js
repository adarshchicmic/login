import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {constant} from './constant';

export default function ButtonGlobal({
  Style,
  StyleT,
  ButtonText,
  testFunction = () => {},
}) {
  return (
    <View>
      <TouchableOpacity style={Style} onPress={testFunction}>
        <Text style={StyleT}>{ButtonText}</Text>
      </TouchableOpacity>
    </View>
  );
}
