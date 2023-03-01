import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginLeft: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '2%',
  },
  Focus: {
    borderColor: 'blue',
  },
  InputContainer: {
    width: '1',
  },
  loginField: {
    flexDirection: 'row',
    marginBottom: '5%',
  },
  welcomeText: {
    fontSize: 40,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: '30%',
  },
  /* test : function(param:number){
      return {
        borderWidth: param
      }
    } as any, */
  container1: {
    flexDirection: 'row',
    justifyContent: 'space-between',

    width: 370,
  },
  first: {
    fontSize: 30,
    fontWeight: 'bold',
    flexDirection: 'row',
  },
  second: {
    color: '#bcbcbc',
    fontWeight: 'bold',
    fontSize: 15,
  },
  third: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: '1%',
    alignSelf: 'flex-start',
  },
  inputWala: {
    height: 60,
    width: 370,
    margin: 10,
    borderWidth: 1,
    padding: 20,
    borderColor: 'gray',
    borderRadius: 10,
  },
  rememFor: {
    flexDirection: 'row',
    marginBottom: '10%',
    flexWrap: 'wrap',
  },
  button: {
    height: 50,
    marginBottom: 10,
    width: 380,
    alignItems: 'center',
    backgroundColor: '#2196F3',
    borderRadius: 10,
  },
  buttonText: {
    textAlign: 'center',
    padding: 5,
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
  rememberMe: {
    paddingRight: 110,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  forgotMe: {
    alignSelf: 'center',
    paddingRight: 10,
    color: '#bcbcbc',
    fontWeight: 'bold',
  },
  cutSign: {
    flexDirection: 'row',
    fontSize: 20,
    alignSelf: 'flex-start',
    marginRight: 20,
  },
  redColor: {
    color: 'red',
  },
  imageEye: {
    height: '1%',
    width: '3%',
  },
  containerForInputEye: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 10,
  },

  // inputFlex: {
  //   alignSelf: 'stretch',
  //   width: '100%',
  //   padding: 0,
  //   backgroundColor: '#ddd',
  // },
  // visibilityBtn: {
  //   height: 30,
  //   width: 30,
  //   padding: 0,
  //   marginTop: 5,
  // },
  inputFieldEye: {
    width: '90%',
    height: 100,
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 10,
  },
});

export default styles;
