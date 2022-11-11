import React from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import Colors from '../../colors/Colors.mjs';

const ForgotPass = ({navigation}) => {
  console.log("ForgotPass")

  return (
    <View style={styles.container}>

      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>EQuALS</Text>
        <Text style={styles.welcomeText}>Request a password reset</Text>
      </View>

      <View style={styles.loginContainer}>
        <Text>Enter the email address for your EQuALS's account.</Text>
        <Text>We will send you a link to reset your password</Text>

        <TextInput
          placeholder='Enter your email'
          style={styles.textInput}
        />

        <View style={styles.btnContainer}>
          <Button
            title='Send link'
            style={styles.btnLogin}
            onPress={() => navigation.navigate('ForgotPassSuccess')}></Button>
        </View>
      </View>

      <View style={styles.signupContainer}>
        <Text
          style={styles.signupText}
          onPress={() => navigation.navigate('SignIn')}>
            Back to Home
        </Text>
      </View>
    </View>
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
    color: Colors.text.secondary,
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
});

export default ForgotPass;