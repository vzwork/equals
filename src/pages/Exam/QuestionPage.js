import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  Switch,
  Image,
  TouchableOpacity,
  Icon,
} from 'react-native';
import ButtonGroup from 'react-native-button-group';

import NavBar from '../../components/NavBar';

const QuestionPage = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <View>
          <Text style={styles.headerText}>Structual Systems</Text>
        </View>

        <View style={styles.viewBox}>
          <Text style={styles.examHeaderText}>
            Regarding alterations and repairs to existing structures, which of
            the following statements is correct?
          </Text>
        </View>

        <View>
          <Image
            source={{
              uri: 'http://www.standout-cabin-designs.com/images/cottage-floor-plans11.JPG',
            }}
          />
        </View>

        <View style={styles.viewBox}>
          <Text>Question Video</Text>
        </View>

        <View style={styles.viewBox}>
          <Text>answer space</Text>
        </View>

        <View style={styles.bottom}>
          <ButtonGroup isFloat={true} position={'bottom'}>
            <Button title="back" />
            <Button
              title="check?"
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
});
export default QuestionPage;
