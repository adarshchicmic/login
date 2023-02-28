import React, {Component} from 'react';
import {SafeAreaView} from 'react-native';
import styles from './styles';
import Login from './src/Login';
import Input from './src/Input';
import SignUp from './src/SignUp';
import Welcome from './src/Welcome';
import BeforeLogin from './src/beforeLogin';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{title: 'SignUp'}}
        />
        <Stack.Screen name="BeforeLogin" component={BeforeLogin} />
        <Stack.Screen name="Welcome" component={Welcome} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
