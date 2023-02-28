import {View, Text, SafeAreaView} from 'react-native';
import React, {useState} from 'react';
import styles from '../styles';
import InputBox from './inputBox';
import {constant} from './constant';
import ButtonGlobal from './ButtonGlobal';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { storeUserData } from './AsyncDataStorageFile';
import BeforeLogin from './beforeLogin';

export default function SignUp({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    // Store user data in AsyncStorage
    storeUserData(email, password)
      .then(() => {
        // User is signed up, do something
        console.log("SignUp done");
        navigation.navigate('BeforeLogin');
      })
      .catch((e) => {
        console.log('Error storing user data: ', e);
      });
  };

  return (
    <SafeAreaView>
      <View style={styles.container1}>
        <View style={styles.loginField}>
          <Text style={{fontSize: 20, marginRight: 0}}> + </Text>
          <Text style={styles.first}> SignUp </Text>
        </View>
        <Text style={styles.cutSign}>X</Text>
      </View>
      <Text style={styles.second}> SignUp your account - enjoy exclusive </Text>
      <Text style={styles.second}> features and many more </Text>
      <InputBox
        Style={styles.inputWala}
        PlaceHolder={constant.enterYourName}
        // testFunction={data => {
        //   console.log(data, 'getting data');
        // }}
      />
      <InputBox
        Style={styles.inputWala}
        PlaceHolder={constant.enterYourLastName}
      />
      <InputBox Style={styles.inputWala} PlaceHolder={constant.dob} />
      <InputBox
        Style={styles.inputWala}
        PlaceHolder={constant.enterYourEmail}
        AutoCapitalize={constant.none}
        testFunction={(value) => {
          console.log(value, 'value received');
          setEmail(value);
          console.log(email);
        }}
      />
      <InputBox
        Style={styles.inputWala}
        SecureTextEntry={true}
        PlaceHolder={constant.enterPassword}
        testFunction={(value) => {
          console.log(value, "this is password");
          setPassword(value);
          console.log(password)
        }}
      />
      <InputBox
        Style={styles.inputWala}
        PlaceHolder={constant.confirmPassword}
        SecureTextEntry={true}
      />
      <ButtonGlobal
        Style={styles.button}
        StyleT={styles.buttonText}
        SignUp={constant.signUp}
        ButtonText={constant.signUp}
        testFunction={() => {
          handleSignup();
        }}
      />
    </SafeAreaView>
  );
}
