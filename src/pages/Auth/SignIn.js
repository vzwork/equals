import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View, ScrollView, Image} from 'react-native';
import Colors from '../../colors/Colors.mjs';
import Auth from '../../api/Auth.mjs';
import {useAuthState, useAuthDispatch, setUser} from './auth-context.js';

const SignIn = ({navigation}) => {
  const dispatch = useAuthDispatch();

  const {user: loggedUser, status, error} = useAuthState();
  console.log(status);

  // USER INPUT VARIABLES
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // VALIDATION VARIABLES
  const [isUsernameValid, setIsUsernameValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    if (username === '') {
      setIsUsernameValid(false);
    } else {
      setIsUsernameValid(true);
    }

    if (password === '') {
      setIsPasswordValid(false);
    } else {
      setIsPasswordValid(true);
    }

    if (isUsernameValid && isPasswordValid) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  });

  // Sign In function
  const signIn = () => {
    Auth.signInWithUserName(username, password)
      .then(res => {
        console.log('Sign in successful.');
        console.log(res);
        setUser(dispatch, res);
      })
      .catch(err => {
        alert(err.message);
      });
  };

  return (
    <View style={styles.container}>
      <ScrollView style={{width: '100%'}}>
        {/* Signin Header */}
        <View style={styles.headerContainer}>
        <Image source={require('../../resources/logo/eqals.png')} style={styles.logo}/>
          <Text style={styles.welcomeText}>Welcome!</Text>
        </View>

        {/* Sign In Section */}
        <View style={styles.loginContainer}>
          {/* Username Field */}
          <Text style={styles.textInputTitle}>Username</Text>
          <TextInput
            placeholder="Enter Username"
            style={styles.textInput}
            onChangeText={text => setUsername(text)}
          />

          {/* Password Field */}
          <Text style={styles.textInputTitle}>Password</Text>
          <TextInput
            placeholder=" Enter Password"
            secureTextEntry={true}
            style={styles.textInput}
            onChangeText={text => setPassword(text)}
          />

          {/* Sign In Button */}
          <View style={styles.buttonContainer}>
            <Button
              title="Sign In"
              style={styles.btnLogin}
              color={Colors.accent.secondary}
              onPress={() => {
                if (isFormValid) {
                  signIn();
                } else {
                  alert('Form incomplete.');
                }
              }}
            />
          </View>
        </View>
      </ScrollView>

      <View style={styles.signupContainer}>
        <Text
          style={styles.signupText}
          onPress={() => navigation.navigate('SignUp')}>
          Don't have an account? Sign up!
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
    margin: 20,
  },
  headerContainer: {
    flex: 2,
    paddingTop: 20,
    marginBottom: 40, 
    alignItems: 'center'
  },
  loginContainer: {
    flex: 4,
    marginBottom: 40,
  },
  signupContainer: {
    flex: 1,
    alignItems: 'center',
  },
  forgotPassContainer: {
    flex: 1,
    marginBottom: 40,
    alignItems: 'center',
  },
  headerText: {
    textAlign: 'left',
    fontSize: 52,
    fontWeight: 'bold',
    color: Colors.accent.secondary,
    marginBottom: 20,
  },
  welcomeText: {
    color: Colors.accent.secondary,
    fontSize: 30,
  },
  signupText: {
    color: Colors.text.secondary,
    fontSize: 18,
  },
  textInputTitle: {
    fontSize: 18,
    marginBottom: 5,
    color: Colors.text.primary, //black color
  },
  textInput: {
    marginBottom: 20,
    borderWidth: 1,
    borderColor: Colors.background.secondary,
    borderRadius: 8,
    fontSize: 15,
    color: Colors.text.primary,
  },
  btnContainer: {
    justifyContent: 'center',
    // alignItems: 'center',
  },
  btnLogin: {
    // width: '100%',
    // alignSelf: 'stretch'
  }, 
  logo: {
    width: 200,
    height: 60,
    marginBottom: 30,
  },
});

export default SignIn;
