import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeUserData = async (email, password) => {
  try {
    await AsyncStorage.setItem('email', email);
    await AsyncStorage.setItem('password', password);
    console.log(email, 'async email');
    console.log(password, 'async password');
  } catch (e) {
    console.log('Error in storing Data', e);
  }
};

export const retriveData = async navigation => {
  try {
    console.log(navigation, 'navigation');
    const email = await AsyncStorage.getItem('email');
    const password = await AsyncStorage.getItem('password');
    console.log(email, 'async email');
    console.log(password, 'async password');
    if (email !== null && password != null) {
      console.log('user data existed');
      return {email, password};
    } else {
      console.log('user data not received');
      return {isEmpty: true};
    }
  } catch (e) {
    console.log('Unable to retriveData', e);
    return {error: e};
  }
};
