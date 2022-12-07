import React from 'react';
import {View, Text, StyleSheet, Button, Image} from 'react-native';
import AnnouncementBar from '../../components/AnnouncementBar';
import NavBar from '../../components/NavBar';
import Colors from '../../colors/Colors.mjs';
import {signOut, useAuthDispatch} from '../Auth/auth-context';

const Homepage = ({navigation}) => {
  const dispatch = useAuthDispatch();

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <View style={styles.headerContainer}>
        <Image source={require('../../resources/logo/eqals.png')} style={styles.logo}/>
        </View>
        <AnnouncementBar/>

        <View style={styles.examContainer}>
          <Text style={styles.examHeaderText}>Choose Your Exam Topic:</Text>
          <Button title="View All Exam Topics" color={Colors.accent.secondary} />
          <Button
            title="sign out"
            color={Colors.accent.secondary}
            onPress={() => {
              signOut(dispatch);
            }}
          />
          <Button
            title="test setup"
            color={Colors.accent.secondary}
            onPress={() => navigation.navigate('TestSetup')}
          />
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
    // margin: 20
  },
  headerContainer: {
    marginVertical: 20,
    alignItems: 'center'
  },
  examContainer: {
    margin: 20,
  },
  navbar: {},
  headerText: {
    textAlign: 'center',
    fontSize: 40,
    fontWeight: 'bold',
    //color: '#87ab0e',
    color: Colors.accent.secondary,
    // marginBottom: 20
  },
  examHeaderText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.accent.secondary,
    marginBottom: 20,
  },
  logo: {
    width: 200,
    height: 60,
    marginBottom: 30,
  },
});

export default Homepage;
