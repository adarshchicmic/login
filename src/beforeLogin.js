import {View, Text, SafeAreaView, Alert} from 'react-native';
import React, {Component} from 'react';
import styles from '../styles';
import SignUp from './SignUp';
import Login from './Login';
import Input from './Input';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {retriveData} from './AsyncDataStorageFile';

// export default function BeforeLogin(props) {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');

//     const handleLogin = (Email, Password) => {
//         console.log('Email:', Email);
//         console.log('Password: ', Password);
//     };

//     return (
//         <SafeAreaView style={styles.container}>
//             {/* <SignUp /> */}
//             <Login />
//             <Input onLogin={handleLogin} />
//             {/*
//            */}

//             {/* <Text style={styles.test(10)}>test styling</Text> */}
//         </SafeAreaView>
//     );
// }

class BeforeLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {Email: '', Password: '', PasswordMatch: false};
    this.HandleLoginn = this.HandleLoginn.bind(this);
    //  const {navigate} = this.props.navigation;
  }

  HandleLoginn = async () => {
    const JSONuser = await retriveData(this.props.navigation, this.state.Email);
    console.log(this.state.Email, 'Email hai ye ');
    console.log(JSONuser);
    console.log('email: ', JSONuser.email, 'password: ', JSONuser.password);
    JSONuser.email === this.state.Email &&
    JSONuser.password === this.state.Password
      ? this.props.navigation.navigate('Welcome', {JSONuser})
      : Alert.alert('Invalid user id or password');
  };

  handleLogin = (email, password) => {
    this.setState({Email: email, Password: password});
    console.log(this.state.email, 'jfdaskjl', email);
    this.HandleLoginn();
    console.log('Email:', email);
    console.log('Password:', password);
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Login />
        <Input onLogin={this.handleLogin} />

        {/* <Text style={styles.test(10)}>test styling</Text> */}
      </SafeAreaView>
    );
  }
}

export default BeforeLogin;
