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
          <Text style={styles.headerText}>Structural Systems</Text>
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


        <View style={styles.textInputTitle}>
          <Text>Question Video</Text>
        </View>

        <View style={styles.textInputTitle}>
        <TextInput
          placeholder='0.000'
          style={styles.viewBox}
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
    alignItems: 'center',
  },
  headerContainer: {
    marginVertical: 20,
    alignItems: 'center',
  },
  examContainer: {
    margin: 20,
  },
  navbar: {},
  headerText: {
    textAlign: 'center',
    fontSize: 40,
    fontWeight: 'bold',
    color: Colors.accent.secondary,
    // marginBottom: 20
  },
  examHeaderText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 20,
  },
  optionHeaderText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  viewBox: {
    marginBottom: 20,
    borderWidth: 1,
    borderColor: Colors.background.secondary,
    borderRadius: 8,
    fontSize: 18,
    backgroundColor: Colors.background.primary,
    color: Colors.text.primary
  },
  imageBox: {
    height: '100%',
    maxHeight: 400,
    width: '100%',
    maxWidth: 400,
    margin: 5, 
  },
  logo: {
    width: 200,
    height: 60,
    marginBottom: 30,
  },
  textInputTitle: {
    fontSize: 20,
    marginBottom: 5,
    color: Colors.text.primary,
  },
});
export default QuestionPage;
