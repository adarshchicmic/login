import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from '../styles';
import DifferentInputs from './DifferentInputs';

import {constant} from './constant';

export default function Welcome({navigation, route}) {
  const user = route.params.JSONuser;
  console.log(user, 'ye navigation wala user hai');
  return (
    <SafeAreaView>
      <Text style={styles.welcomeText}>{constant.welcome} </Text>
      <Text style={styles.welcomeText}>{user.firstName}</Text>
      <DifferentInputs firstValue="First Name: " secondValue={user.firstName} />
      <DifferentInputs firstValue="Last Name: " secondValue={user.lastName} />
      <DifferentInputs firstValue="Date of Birth: " secondValue={user.dob} />
      <DifferentInputs firstValue="Email: : " secondValue={user.email} />

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('BeforeLogin')}>
        <Text style={styles.buttonText}>{constant.logOut}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
