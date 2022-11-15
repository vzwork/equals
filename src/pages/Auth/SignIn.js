import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View, ScrollView} from 'react-native';
import Colors from '../../colors/Colors.mjs';
import Auth from '../../api/Auth.mjs';

const SignIn = ({navigation}) => {
  console.log("SignIn")

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const signIn = () => {
    print(Auth.signInWithUserName(username, password));
  }

  return (
    <View style={styles.container}>
    <ScrollView style={{width:'100%'}}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>EQuALS</Text>
        <Text style={styles.welcomeText}>Welcome!</Text>
      </View>

    
      <View style={styles.loginContainer}>
        <Text>Username</Text>
        <TextInput
          placeholder='Enter Username'
          style={styles.textInput}
          onChangeText={text => setUsername(text)}
        />

        <Text>Password</Text>
        <TextInput
          placeholder=' Enter Password'
          secureTextEntry={true}
          style={styles.textInput}
          onChangeText={text => setPassword(text)}
        />

        <View style={styles.buttonContainer}>
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