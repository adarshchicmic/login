import {View, Text} from 'react-native';
import React from 'react';

export default function DifferentInputs(props) {
  return (
    <View>
      <Text>
        {props.firstValue} : {props.secondValue}
      </Text>
    </View>
  );
}
