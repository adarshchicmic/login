import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeUserData = async obj => {
  try {
    let data = JSON.stringify(obj);
    console.log(data, 'dshkdfjklhlkjopfshklhjlkjhdlsfkj');
    //await AsyncStorage.setItem('email', email);
    //await AsyncStorage.setItem('password', password);
    await AsyncStorage.setItem(obj.email, data);
    // console.log(email, 'async email');
    // console.log(password, 'async password');
  } catch (e) {
    console.log('Error in storing Data', e);
  }
};

export const retriveData = async (navigation, email) => {
  try {
    console.log(navigation, 'navigation');
    const getAll = await AsyncStorage.getAllKeys();
    console.log(getAll, 'ALL KEYS');
    const getMultiple = await AsyncStorage.multiGet(getAll);
    console.log(getMultiple, 'ye get multiple hai ');
    //const email = await AsyncStorage.getItem('email');
    //const password = await AsyncStorage.getItem('password');
    const user = await AsyncStorage.getItem(email);
    console.log(user, 'ye hai user ');
    const JSONuser = JSON.parse(user);
    console.log(JSONuser, 'ye hai Json user wala data');
    console.log(JSONuser.email, 'async email');
    console.log(JSONuser.password, 'async password');
    if (JSONuser.email !== null && JSONuser.password != null) {
      console.log('user data existed');
      return JSONuser;
    } else {
      console.log('user data not received');
      return {isEmpty: true};
    }
  } catch (e) {
    console.log('Unable to retriveData', e);
    return {error: e};
  }
};
