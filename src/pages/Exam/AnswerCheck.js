import React, {useEffect, useState} from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";
import ButtonGroup from 'react-native-button-group';
import NavBar from "../../components/NavBar";
import Colors from '../../colors/Colors.mjs';

const AnswerCheck = ({navigation}) => {
  isRight = false
  
  return (
    <View style={styles.container}>
  
        <View style={styles.contentContainer}>
  
          <View> 
          <Image source={require('../../resources/logo/eqals.png')} style={styles.logo}/>
            <Text style={styles.headerText}>Structual Systems</Text> 
          </View>

         <View style={styles.viewBox}>
            <Text style={styles.optionHeaderText}>For a basic wind speed of 70 mph the equivalent wind pressure is 12.5 psf.  
                If the basic wind speed doubled to 140 mph, the equivalent wind pressure would be most nearly ______ psf?</Text>
         </View>

         <View style={{backgroundColor: isRight ? "#50FA7B" : "#FF5761",
                       borderRadius: 4}}>
            <Text style={styles.itemHeaderText}>Correct Answer:</Text>
            <Text style={styles.itemHeaderText}>0.0000</Text>
         </View>
          <ButtonGroup>
            <Button title="back"/>
            <Button title="forward"/>
            color={Colors.accent.secondary}
          </ButtonGroup>
        </View>
        <NavBar style={styles.navbar}/>
    </View>
  )
}

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'space-between'
    },
    contentContainer: {
      // margin: 20
    },
    headerContainer: {
      marginVertical: 20,
      alignItems: 'center'
    },
    examContainer: {
      margin: 20 
    },
    navbar: {
    },
    headerText: {
      textAlign: "center",
      fontSize: 40,
      fontWeight: "bold",
      color: '#173C6F',
      // marginBottom: 20
    },
    itemHeaderText: {
      fontSize: 22,
      fontWeight: 'bold',
      color: 'black',
      marginBottom: 3,
      marginLeft: 5

    },
    optionHeaderText: {
      fontSize: 17,
      padding: 7,
      fontWeight: "bold"
    },
    viewBox: {
      margin: 6,
      padding:5,
      borderTopWidth: 2,
      borderRightWidth: 2,
      borderColor: "#0398df",
      borderRadius: 8,
      backgroundColor: "#e0dfe1"
    },
    logo: {
      width: 200,
      height: 60,
      marginBottom: 30,
    },
  });
  export default AnswerCheck;