import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View, Alert, Linking, ScrollView, Image } from 'react-native';
import Colors from '../../colors/Colors.mjs';

const ForgotPass = ({navigation}) => {
  // TEXT INPUT FIELDS
  const [email, setEmail] = useState('');
  // Validating user input
  const [isEmailValid, setIsEmailValid] = useState(false);
  
  // RegEx for email and password
  const emailRegEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
  // For populating text input warning messages and validation
  useEffect(() => {
    // Email
    if (email.length === 0) {
      setIsEmailValid(false);
    } else if (email.length != 0 && !email.match(emailRegEx)) {
      /*setEmailMessage('Please enter a valid email.');*/
      setIsEmailValid(false);
    } else if (email.match(emailRegEx)) {
     /*setEmailMessage('');*/
      setIsEmailValid(true);
    }
  });
    // Successful pass function
    const successfulPass = () => {
        navigation.navigate('ForgotPassSuccess');
    };
  return (
    <ScrollView style={{width:'100%'}}>
    
    <View style={styles.container}>
      <View style={styles.headerContainer}>
      { /* <Image source={require('../../resources/logo/questionImage.jpg')} /> */}
        <Text style={styles.headerText}>EQuALS</Text>
       
        <Text style={styles.welcomeText}>Request a password reset</Text>
      </View>
  {/* EMAIL */}
  <View style={styles.headerContainer}>
          <Text style={styles.textInputTitle}>Email Address</Text>
          {/*<Text styles={styles.inputMessageText}>{emailMessage}</Text>*/}
        </View>
        <TextInput
          placeholder='Enter Email'
          style={styles.textInput}
          onChangeText={email => setEmail(email)}
        />
          <Button
            title='Send link' style={styles.btnLogin}
              onPress={() => {
                if (isEmailValid) {
                  successfulPass();
                } else {
                  alert('Email is invalid.')
                }
              }}
            />
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
  forgotPassContainer: {
    flex: 1,
    marginBottom: 40,
    alignItems: 'center'
  },
  // Equals
  headerText: {
    textAlign: "left",
    fontSize: 52,
    fontWeight: "bold",
    color: Colors.text.secondary,
    marginBottom: 20
  },
  //Reset a password request
  welcomeText: {
    color: Colors.accent.secondary,
    fontSize: 30
  },
  //Back to Home
  backToHomeText: {
    color: Colors.text.secondary,
    fontSize: 18
  },
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
});
export default ForgotPass;
