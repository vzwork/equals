import React from 'react';
import { Button, StyleSheet, Text, TextInput, View, ScrollView} from 'react-native';
import Colors from '../../colors/Colors.mjs';

const SignIn = ({navigation}) => {
  console.log("SignIn")

  return (
    <View style={styles.container}>
    <ScrollView style={{width:'100%'}}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>EQuALS</Text>
        <Text style={styles.welcomeText}>Welcome!</Text>
      </View>

    
      <View style={styles.loginContainer}>
      <Text style={styles.textInputTitle}>Username</Text>
        <TextInput
          placeholder='Enter Username'
          style={styles.textInput}
        />

      <Text style={styles.textInputTitle}>Password</Text>
        <TextInput
          placeholder=' Enter Password'
          secureTextEntry={true}
          style={styles.textInput}
        />
      
        <View style={styles.btnContainer}>
          <Button
            title='Sign In'
            style={styles.btnLogin}
          />
        </View>
      </View>
      </ScrollView>

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

      <View style={styles.forgotPassContainer}>
        <Text
          style={styles.signupText}
          onPress={() => navigation.navigate('TestSetup')}>
           Setup Test
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
    marginBottom: 40,
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
    color: Colors.accent.secondary,
    fontSize: 30
  },
  signupText: {
    color: Colors.text.secondary,
    fontSize: 18
  },
  /*
  textInput: {
    borderBottomWidth: 2,
    borderBottomColor: Colors.text.secondary,
    marginBottom: 30
  },
  */

  textInputTitle: {
    fontSize: 18,
    marginBottom: 5,
    color: Colors.text.primary //black color
  },
  textInput: {
    marginBottom: 20,
    borderWidth: 1,
    borderColor: Colors.background.secondary,
    borderRadius: 8,
    fontSize: 15,
    color: Colors.text.primary
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

export default SignIn;