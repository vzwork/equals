import React, {useEffect, useState} from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";
import ButtonGroup from 'react-native-button-group';



import NavBar from "../../components/NavBar";


const AnswerCheck = ({navigation}) => {
  isRight = false

  return (

    <View style={styles.container}>
  
        <View style={styles.contentContainer}>
  
          <View> 
            <Text style={styles.headerText}>Structual Systems</Text> 
          </View>

         <View style={styles.viewBox}>
            <Text style={styles.optionHeaderText}>Regarding alterations and repairs to existing structures, which of the following statements is correct?</Text>
         </View>

         <View style={{backgroundColor: isRight ? "#50FA7B" : "#FF5761",
                       borderRadius: 4}}>
            <Text>random text based answer displayed here</Text>
         </View>

          <View style={styles.viewBox}>
            <Text>solution resource image</Text>
            <Image source={{uri: 'http://www.standout-cabin-designs.com/images/cottage-floor-plans11.JPG'}}/>
          </View>

          <View style={styles.viewBox}>
            <Text>Solution Resource Video</Text>
          </View>

          
          <View style={styles.viewBox}>
            <Text>answer space</Text>
          </View>

          <ButtonGroup>
            <Button title="back"/>

            <Button title="forward"/>
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
      marginVertical: 20
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
    examHeaderText: {
      fontSize: 18,
      fontWeight: 'bold',
      color: 'black',
      marginBottom: 20
    },
    optionHeaderText: {
      fontSize: 17,
      fontWeight: 'bold'
    },
    viewBox: {
      margin: 6,
      padding:5,
      borderTopWidth: 2,
      borderRightWidth: 2,
      borderColor: "#0398df",
      borderRadius: 8,
      backgroundColor: "#e0dfe1"
    }
  });
  export default AnswerCheck;