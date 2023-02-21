import React from "react";
import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      // marginLeft: 30,
      justifyContent:"center",
      alignItems:"center",
      marginLeft: '3%',
      
    },
    InputContainer: {
        width: '1',
    },
    loginField:{
      flexDirection:"row",
    },
    /* test : function(param:number){
      return {
        borderWidth: param
      }
    } as any, */
    container1: {
      flexDirection: "row",
      justifyContent:"space-between",
      
      width: 330,
    },
    first: {
      fontSize: 40,
      fontWeight: 'bold',
      flexDirection: 'row'
    },
    second: {
      color: '#bcbcbc',
      fontWeight: 'bold',
     
    },
    third: {
      fontSize: 20,
      fontWeight: 'bold',
      
      alignSelf: 'flex-start'
      
    },
    inputWala:{
      height: 60,
      width: 350,
      margin: 10,
      borderWidth: 1,
      padding: 20,
      borderColor: 'blue',
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
      width: 350,
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
    rememberMe : {
      paddingRight: 120,
      color: '#bcbcbc',
      fontWeight: 'bold',
    },
    forgotMe: {
      
      color: '#bcbcbc',
      fontWeight: 'bold',
    },
    cutSign :{
      flexDirection: 'row',
      fontSize: 20,
      alignSelf: 'flex-end',
    }
  })


export default styles;