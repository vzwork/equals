import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  Switch,
  Image,
  TouchableOpacity,
  Icon,
} from 'react-native';
import ButtonGroup from 'react-native-button-group';
import NavBar from '../../components/NavBar';
import Colors from '../../colors/Colors.mjs';

const QuestionPage = ({navigation}) => {
  const [answerInput, setAnswerInput] = useState('');
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <View>
        <Image source={require('../../resources/logo/eqals.png')} style={styles.logo}/>
          <Text style={styles.headerText}>Structual Systems</Text>
        </View>
        
        <View style={styles.viewBox}>
          <Text style={styles.examHeaderText}>
          For a basic wind speed of 70 mph the equivalent wind pressure is 12.5 psf.  
          If the basic wind speed doubled to 140 mph, the equivalent wind pressure would be most nearly ______ psf?
          </Text>
        </View>
        
        <Image
          source={{
            uri: 'http://www.standout-cabin-designs.com/images/cottage-floor-plans11.JPG',
          }}
          style={styles.imageBox}
        />


        <View style={styles.viewBox}>
          <Text>Question Video</Text>
        </View>

        <View style={styles.viewBox}>
        <TextInput
          placeholder='0.000'
          style={styles.textInput}
          onChangeText={answerInput => setAnswerInput(answerInput)}
        />
        </View>

        <View style={styles.bottom}>
          <ButtonGroup isFloat={true} position={'bottom'}>
            <Button title="back" />
            <Button
              title="check?" 
              color={Colors.accent.secondary}
              onPress={() => navigation.navigate('AnswerCheck')}
            />
            <Button title="forward" />
          </ButtonGroup>
        </View>
      </View>

      <NavBar style={styles.navbar} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  contentContainer: {
    marginBottom: 20,
    alignItems: 'center'
  },
  headerContainer: {
    marginVertical: 20,
  },
  examContainer: {
    margin: 20,
  },
  navbar: {},
  headerText: {
    textAlign: 'center',
    fontSize: 40,
    fontWeight: 'bold',
    color: '#173C6F',
    // marginBottom: 20
  },
  examHeaderText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 20,
  },
  optionHeaderText: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  viewBox: {
    margin: 6,
    padding: 5,
    borderTopWidth: 2,
    borderRightWidth: 2,
    borderColor: '#0398df',
    borderRadius: 8,
    backgroundColor: '#e0dfe1',
  },
  imageBox: {
    height: '100%',
    maxHeight: 400,
    width: '100%',
    maxWidth: 400,
    margin: 5
  },
  logo: {
    width: 200,
    height: 60,
    marginBottom: 30,
  },
});
export default QuestionPage;
