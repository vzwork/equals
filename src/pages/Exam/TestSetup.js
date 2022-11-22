import React, {useEffect, useState} from "react";
import { View, Text, StyleSheet, Button, Switch } from "react-native";
import RadioGroup from 'react-native-radio-buttons-group';
import AnnouncementBar from "../../components/AnnouncementBar";
import NumericInput from 'react-native-numeric-input';
import SelectDropdown from 'react-native-select-dropdown'


import NavBar from "../../components/NavBar";

const radioButtonsData = [{
  id: '1', // acts as primary key, should be unique and non-empty string
  label: 'Practice',
  value: 'Practice'
}, {
  id: '2',
  label: 'Mock Exam',
  value: 'MockExam'
}]

const times = ["15 minutes", "30 minutes", "45 minutes", "1 hour"]

const TestSetup = () => {

  const [radioButtons, setRadioButtons] = useState(radioButtonsData)
  function onPressRadioButton(radioButtonsArray) {
      setRadioButtons(radioButtonsArray);
  }

  const [isRandom, setRandom] = useState(false);
  const toggleRandom = () => setRandom(previousState => !previousState);


  return (

    <View style={styles.container}>
  
        <View style={styles.contentContainer}>
  
          <View style={styles.headerContainer}>
            <Text style={styles.headerText}>EQuALS</Text>
          </View>
  
          <AnnouncementBar />

          <View>
            <Text style={styles.optionHeaderText}> Test Mode</Text>
          <RadioGroup 
            radioButtons={radioButtons} 
            onPress={onPressRadioButton}
            layout={"row"} 
        />
          </View>

          <View>
            <Text style={styles.optionHeaderText}> Time Limit</Text>
            <SelectDropdown
              data={times}
              onSelect={(selectedItem, index) => {
                console.log(selectedItem, index)
              }}
              buttonTextAfterSelection={(selectedItem, index) => {
                return selectedItem
              }}
              rowTextForSelection={(item, index) => {
                return item
              }}
              defaultButtonText={"Select Time"}
            />
          </View>

          <View>
            <Text style={styles.optionHeaderText}> Number of Questions</Text>
            <NumericInput 
              onChange={value => console.log(value)}
              maxValue={37} />
          </View>


          <View style={styles.examContainer}>
            <Text style={styles.optionHeaderText}> Random?</Text>
            <Switch
              trackColor={{ false: "#767577", true: "#81b0ff" }}
              thumbColor={isRandom ? "#f5dd4b" : "#f4f3f4"}
              onValueChange={toggleRandom}
              value={isRandom}
            />
          </View>

        

          <View style={styles.examContainer}>
            <Button title="Start Exam" />
          </View>

  
  
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
    }
  });
  export default TestSetup;