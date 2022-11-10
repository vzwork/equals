import React from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import Colors from '../../colors/Colors.mjs';

const SignIn = ({navigation}) => {
  console.log("SignIn")

  return (
    <View style={styles.container}>

      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>EQuALS</Text>
        <Text style={styles.welcomeText}>Welcome!</Text>
      </View>

      <View style={styles.loginContainer}>
        <Text>Username</Text>
        <TextInput
          placeholder='Enter Username'
          style={styles.textInput}
        />

        <Text>Password</Text>
        <TextInput
          placeholder=' Enter Password'
          secureTextEntry={true}
          style={styles.textInput}
        />

        <View style={styles.buttonContainer}>
          <Button
            title='Sign In'
            style={styles.btnLogin}
          />
        </View>
      </View>

      <View style={styles.signupContainer}>
        <Text
          style={styles.signupText}
          onPress={() => navigation.navigate('SignUp')}>
            Don't have an account?  Sign up!
        </Text>
      </View>


      <View style={styles.forgotPassContainer}>
        <Text
          style={styles.signupText}
          onPress={() => navigation.navigate('ForgotPass')}>
           Forgot your password?
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
  forgotPassContainer: {
    flex: 1,
    alignItems: 'center'
  },
  headerText: {
    textAlign: "left",
    fontSize: 52,
    fontWeight: "bold",
    color: Colors.accent.secondary,
    marginBottom: 20
  },
  welcomeText: {
    color: "#2499FB",
    fontSize: 30
  },
  signupText: {
    color: '#41A2FB',
    fontSize: 15
  },
  textInput: {
    borderBottomWidth: 2,
    borderBottomColor: '#BCE0FD',
    marginBottom: 30
  },
  buttonContainer: {
    justifyContent: 'center',
    // alignItems: 'center',
  },
  btnLogin: {
    // width: '100%',
    // alignSelf: 'stretch'
  }
});

export default SignIn;