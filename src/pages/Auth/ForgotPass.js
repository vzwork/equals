import React from 'react';
import { Button, StyleSheet, Text, TextInput, View, ScrollView } from 'react-native';
import Colors from '../../colors/Colors.mjs';

const ForgotPass = ({navigation}) => {
  console.log("ForgotPass")

  return (
    <ScrollView style={{width:'100%'}}>
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>EQuALS</Text>
        <Text style={styles.welcomeText}>Request a password reset</Text>
      </View>

      <View style={styles.headerContainer}>
        <Text style={styles.textInputTitle}>Enter EQuALS's email address</Text>
        <TextInput
          placeholder='Enter your email'
          style={styles.textInput}/>

        <View style={styles.btnContainer}>
          <Button
            title='Send link'
            style={styles.btnLogin}
            onPress={() => navigation.navigate('ForgotPassSuccess')}></Button>
        </View>
      </View>

      <View style={styles.forgotPassContainer}>
        <Text style={styles.backToHomeText}
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