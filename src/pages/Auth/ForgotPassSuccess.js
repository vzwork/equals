import React from 'react';
import { Button, StyleSheet, Text, TextInput, View, ScrollView } from 'react-native';

const ForgotPassSuccess = ({navigation}) => {
  console.log("ForgotPassSuccess")

  return (
    <ScrollView style={{width:'100%'}}>
    <View style={styles.container}>

      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>EQuALS</Text>
        <Text style={styles.welcomeText}>Your password reset request successful!</Text>
      </View>

      <View style={styles.loginContainer}>
        <Text>You should receive your reset link soon at your email address</Text>
      </View>

      <View style={styles.signupContainer}>
        <Text
          style={styles.signupText}
          onPress={() => navigation.navigate('SignIn')}>
            Back to Home
        </Text>
      </View>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20
  },
  headerContainer: {
    flex: 2,
    paddingTop: 20,
    marginBottom: 40
  },
  loginContainer: {
    flex: 4,
    marginBottom: 40
  },
  signupContainer: {
    flex: 1,
    alignItems: 'center'
  },
  headerText: {
    textAlign: "left",
    fontSize: 52,
    fontWeight: "bold",
    color: '#173C6F',
    marginBottom: 20
  },
  welcomeText: {
    color: Colors.accent.secondary,
    fontSize: 30
  },
  signupText: {
    color: Colors.text.secondary,
    fontSize: 15
  },
  textInput: {
    borderBottomWidth: 2,
    borderBottomColor: Colors.background.secondary,
    marginBottom: 30
  },
  btnContainer: {
    justifyContent: 'center',
    // alignItems: 'center',
  },
  btnLogin: {
    // width: '100%',
    // alignSelf: 'stretch'
  }
});

export default ForgotPassSuccess;