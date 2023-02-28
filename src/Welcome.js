import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import styles from '../styles';
import ButtonGlobal from './ButtonGlobal';
import {constant} from './constant';

export default function Welcome({ navigation }) {
   
  return (
    <SafeAreaView>
      <Text style={styles.welcomeText}>Welcome</Text>
      <ButtonGlobal
        Style={styles.button}
        StyleT={styles.buttonText}
        ButtonText={constant.logOut}
        
      />
    </SafeAreaView>
  );
}
