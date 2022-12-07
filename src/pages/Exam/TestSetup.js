import React, {useState} from "react";
import { View, Text, StyleSheet, Button, Switch, Image } from "react-native";
import RadioGroup from 'react-native-radio-buttons-group';
import NumericInput from 'react-native-numeric-input';
import SelectDropdown from 'react-native-select-dropdown'
import NavBar from "../../components/NavBar";
import Colors from '../../colors/Colors.mjs';

const radioButtonsData = [{
  id: '1',
  label: 'Practice',
  value: 'Practice'
}, {
  id: '2',
  label: 'Mock Exam',
  value: 'MockExam'
}]

const times = ["15 minutes", "30 minutes", "45 minutes", "1 hour"]
const TestSetup = ({navigation}) => {
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
            <Image source={require('../../resources/logo/eqals.png')} style={styles.logo}/>
          </View>

          <View style={styles.viewBox}>
            <Text style={styles.textInputTitle}> Test Mode</Text>
          <RadioGroup 
            radioButtons={radioButtons}
            onPress={onPressRadioButton}
            layout={"row"} 
        />
          </View>
          <View style={styles.viewBox}>
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

          <View style={styles.viewBox}>
            <Text style={styles.optionHeaderText}> Number of Questions</Text>
            <NumericInput 
              onChange={value => console.log(value)}
              maxValue={37}
            />
          </View>

          <View style={styles.viewBox}>
            <Text style={styles.optionHeaderText}> Random?</Text>
            <Switch
              trackColor={{ false: "#767577", true: "#81b0ff" }}
              thumbColor={isRandom ? "#f5dd4b" : "#f4f3f4"}
              onValueChange={toggleRandom}
              value={isRandom}
            />
          </View>

          <View style={styles.examContainer}>
            <Button title="Start Exam" 
            color={Colors.accent.secondary}
                    onPress={() => navigation.navigate('QuestionPage')}>
                    </Button>
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
      fontSize: 18,
      fontWeight: "bold",
      color: Colors.accent.primary
    },
    examHeaderText: {
      fontSize: 18,
      fontWeight: 'bold',
      color: 'black',
      marginBottom: 20
    },
    optionHeaderText: {
      fontSize: 18,
      fontWeight: 'bold'
    },
    viewBox: {
      marginBottom: 20,
      //padding:5,
      borderWidth: 1,
      //borderTopWidth: 2,
      //borderRightWidth: 2,
      borderColor: Colors.background.secondary,
      borderRadius: 8,
      fontSize: 18,
      backgroundColor: Colors.background.primary
    },
    logo: {
      width: 200,
      height: 60,
      marginBottom: 30,
    },
    textInputTitle: {
      fontSize: 18,
      marginBottom: 5,
      color: Colors.text.primary,
    },
    textInput: {
      marginBottom: 20,
      borderWidth: 1,
      borderColor: Colors.background.secondary,
      borderRadius: 8,
      fontSize: 18,
      color: Colors.text.secondary,
    },
  });
  export default TestSetup;