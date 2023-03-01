import {View, Text, SafeAreaView, Alert} from 'react-native';
import React, {useState} from 'react';
import styles from '../styles';
import InputBox from './inputBox';
import {constant} from './constant';
import ButtonGlobal from './ButtonGlobal';
import {storeUserData} from './AsyncDataStorageFile';

export default function SignUp({navigation}) {
  const [email, setEmail] = useState('');
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dob, setDob] = useState('');
  const [show, setShow] = useState(true);
  const [matchPassword, setMatchPassword] = useState(false);
  const [secureTextEntryValue, setSecureTextEntry] = useState(true);
  const obj = {
    email: email,
    password: password2,
    firstName: firstName,
    lastName: lastName,
    dob: dob,
  };
  const handleSignup = () => {
    // Store user data in AsyncStorage
    storeUserData(obj)
      .then(() => {
        // User is signed up, do something
        console.log('SignUp done');
        navigation.navigate('BeforeLogin');
      })
      .catch(e => {
        console.log('Error storing user data: ', e);
      });
  };
  const handleFirstName = value => setFirstName(value);
  const handleLastName = value => setLastName(value);
  const handleDob = value => setDob(value);
  const handleEmail = value => setEmail(value);
  const handlePassword1 = value => setPassword1(value);
  const handlePassword2 = value => setPassword2(value);
  const handleButtonFunctionality = () => {
    handleMatchPassword();
    firstName && lastName && dob && email && password1 && password2
      ? handleSignup()
      : setShow(false);
  };
  const handleMatchPassword = () => {
    password1 === password2
      ? setMatchPassword(true)
      : Alert.alert('Password and Confirm Password is not same');
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
        testFunction={handleFirstName}
      />
      <InputBox
        Style={styles.inputWala}
        PlaceHolder={constant.enterYourLastName}
        testFunction={handleLastName}
      />
      <InputBox
        Style={styles.inputWala}
        PlaceHolder={constant.dob}
        testFunction={handleDob}
      />
      <InputBox
        Style={styles.inputWala}
        PlaceHolder={constant.enterYourEmail}
        AutoCapitalize={constant.none}
        testFunction={handleEmail}
        // testFunction={value => {
        //   console.log(value, 'value received');
        //   setEmail(value);
        //   console.log(email);
      />
      <InputBox
        Style={styles.inputWala}
        SecureTextEntry={secureTextEntryValue}
        PlaceHolder={constant.enterPassword}
        testFunction={handlePassword1}
      />
      <InputBox
        Style={styles.inputWala}
        PlaceHolder={constant.confirmPassword}
        SecureTextEntry={secureTextEntryValue}
        testFunction={handlePassword2}
      />
      {!show &&
      (!firstName ||
        !lastName ||
        !dob ||
        !email ||
        !password1 ||
        !password2) ? (
        <Text style={styles.redColor}>{constant.enterAllField} </Text>
      ) : null}
      {(!matchPassword && !password1) || !password2 ? (
        <Text style={styles.redColor}>PassWord did not match</Text>
      ) : null}
      <ButtonGlobal
        Style={styles.button}
        StyleT={styles.buttonText}
        SignUp={constant.signUp}
        ButtonText={constant.signUp}
        testFunction={handleButtonFunctionality}
      />
    </SafeAreaView>
  );
}
