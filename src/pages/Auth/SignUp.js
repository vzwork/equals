import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View, Alert, Linking, ScrollView } from 'react-native';
import CheckBox from "@react-native-community/checkbox";
import Colors from '../../colors/Colors.mjs';
import Auth from '../../api/Auth.mjs';
import {setUser, useAuthDispatch} from './auth-context.js';

const SignUp = ({navigation}) => {
  const dispatch = useAuthDispatch();

  // TEXT INPUT FIELDS
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');

  // USER AGREEMENTS
  const [termsConditionsCheckbox, setTermsConditionsCheckbox] = useState(false);
  const [eulaCheckbox, setEulaCheckbox] = useState(false);

  // WARNING MESSAGES
  const [usernameMessage, setUsernameMessage] = useState('');
  const [emailMessage, setEmailMessage] = useState('');
  const [password1Message, setPassword1Message] = useState('');
  const [password2Message, setPassword2Message] = useState('');

  // Validating user input
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [isUsernameValid, setIsUsernameValid] = useState(false);
  const [areAgreementsAccepted, setAreAgreementsAccepted] = useState(false);

  // Validating whether form is completed.
  const [isFormValid, setIsFormValid] = useState(false);

  // RegEx for email and password
  const emailRegEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
  const passwordRegExFull = /(?=.*[0-9])*(?=.*[!@#$%^&*()\-__+.])/;
  const passwordNumberRegEx = /(?=.*[0-9])/;
  const passwordSpecialCharRegEx = /(?=.*[!@#$%^&*()\-__+.])/;

  // For populating text input warning messages and validation
  useEffect(() => {
    // Email
    if (email.length === 0) {
      setEmailMessage('');
      setIsEmailValid(false);
    } else if (email.length != 0 && !email.match(emailRegEx)) {
      setEmailMessage('Please enter a valid email.');
      setIsEmailValid(false);
    } else if (email.match(emailRegEx)) {
      setEmailMessage('');
      setIsEmailValid(true);
    }

    // Password 1
    if (password1.length === 0) {
      setPassword1Message('');
    } else if (password1.length < 8) {
      setPassword1Message('Must be at least 8 characters.');
    } else if (!password1.match(passwordNumberRegEx)) {
      setPassword1Message('Needs at least 1 number.');
    } else if (!password1.match(passwordSpecialCharRegEx)) {
      setPassword1Message('Needs at least 1 special character.');
    } else if (password1.length >= 8 && password1.match(passwordRegExFull)) {
      setPassword1Message('');
    }

    // Password 2 & checking for match to password 1
    // This is what sets isPasswordValid
    if (password2.length === 0) {
      setPassword2Message('');
      setIsPasswordValid(false);
    } else if (password2.length < 8) {
      setPassword2Message('Must be at least 8 characters.');
      setIsPasswordValid(false);
    } else if (!password2.match(passwordNumberRegEx)) {
      setPassword2Message('Needs at least 1 number.');
      setIsPasswordValid(false);
    } else if (!password2.match(passwordSpecialCharRegEx)) {
      setPassword2Message('Needs at least 1 special character.');
      setIsPasswordValid(false);
    } else if (password1 != password2) {
      setPassword2Message('Passwords must match');
    } else if (
      password2.length >= 8 &&
      password2.match(passwordRegExFull) &&
      password1 === password2
    ) {
      setPassword2Message('');
      setIsPasswordValid(true);
    }

    if (username === '') {
      setIsUsernameValid(false);
    } else {
      setIsUsernameValid(true);
    }

    if (termsConditionsCheckbox && eulaCheckbox) {
      setAreAgreementsAccepted(true);
    } else {
      setAreAgreementsAccepted(false);
    }

    // Determining if the form is valid to be submitted
    if (
      isPasswordValid &&
      isEmailValid &&
      isUsernameValid &&
      areAgreementsAccepted
    ) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  });

  // Sign up function
  const signUp = () => {
    Auth.createUser(username, email, password2)
      .then(res => {
        console.log(res);
        // navigation.navigate('AccountCreated');
        setUser(dispatch, res);
      })
      .catch(err => {
        alert(err.message);
      });
  };

  return (
    <ScrollView style={{width:'100%'}}>
    <View style={styles.container}>

      <Text style={styles.loginScreenText} onPress={() => navigation.navigate('SignIn')}>Back to Login Screen</Text>

      <View style={styles.viewHeaderContainer}>
        <Text style={styles.equalsText}>EQuALS </Text>
        <Text style={styles.viewTitle}>Account Creation</Text>
      </View>

        {/* USERNAME */}
        <View style={styles.createAccountContainer}>
          <View style={styles.inputHeaderContainer}>
            <Text style={styles.textInputTitle}>Username</Text>
            <Text styles={styles.inputMessageText}>{usernameMessage}</Text>
          </View>
          <TextInput
            placeholder="Enter Username"
            style={styles.textInput}
            onChangeText={username => setUsername(username)}
          />

          {/* EMAIL */}
          <View style={styles.inputHeaderContainer}>
            <Text style={styles.textInputTitle}>Email Address</Text>
            <Text styles={styles.inputMessageText}>{emailMessage}</Text>
          </View>
          <TextInput
            placeholder=" Enter Email"
            style={styles.textInput}
            onChangeText={email => setEmail(email)}
          />

          {/* PASSWORD 1 */}
          <View style={styles.inputHeaderContainer}>
            <Text style={styles.textInputTitle}>Enter Password</Text>
            <Text styles={styles.inputMessageText}>{password1Message}</Text>
          </View>
          <TextInput
            placeholder="Enter Password"
            secureTextEntry={true}
            style={styles.textInput}
            onChangeText={password => setPassword1(password)}
          />

          {/* PASSWORD 2 */}
          <View style={styles.inputHeaderContainer}>
            <Text style={styles.textInputTitle}>Confirm Password</Text>
            <Text styles={styles.inputMessageText}>{password2Message}</Text>
          </View>
          <TextInput
            placeholder=" Enter Password"
            secureTextEntry={true}
            style={styles.textInput}
            onChangeText={password => setPassword2(password)}
          />

          {/* USER AGREEMENTS */}
          <View style={styles.userAgreementContainer}>
            <View style={styles.singleAgreementContainer}>
              <CheckBox
                disabled={false}
                value={termsConditionsCheckbox}
                onValueChange={newValue => setTermsConditionsCheckbox(newValue)}
              />
              <Text>
                Accept
                <Text
                  style={styles.hyperlink}
                  onPress={() =>
                    Linking.openURL(
                      'https://equals.prepareinc.us/Account/Terms',
                    )
                  }>
                  {' '}
                  Terms and Conditions
                </Text>
              </Text>
            </View>
            <View style={styles.singleAgreementContainer}>
              <CheckBox
                disabled={false}
                value={eulaCheckbox}
                onValueChange={newValue => setEulaCheckbox(newValue)}
              />
              <Text>
                Accept
                <Text
                  style={styles.hyperlink}
                  onPress={() =>
                    Linking.openURL(
                      'https://equals.prepareinc.us/Account/PrivacyPolicy',
                    )
                  }>
                  {' '}
                  End User License Agreement
                </Text>
              </Text>
            </View>
          </View>

          {/* CREATE ACCOUNT BUTTON */}
          <Button
            title="Create Account"
            style={styles.createAccountBtn}
            onPress={() => {
              if (isFormValid) {
                signUp();
              } else {
                alert('Form incomplete.');
              }
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const validateUserAgreements = (agreement1, agreement2) => {
  if (agreement1 === true && agreement2 === true) {
    return true;
  }
  return false;
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
  },
  viewHeaderContainer: {
    marginVertical: 25,
    alignItems: 'center',
  },
  inputHeaderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inputMessageText: {
    color: Colors.text.warning,
  },
  equalsText: {
    fontWeight: 'bold',
    color: Colors.accent.secondary,
    fontSize: 52,
    // textAlign: 'center'
  },

  //Text:Account Creation
  viewTitle: {
    fontSize: 18,
  },
  createAccountContainer: {
    justifyContent: 'flex-end',
  },
  userAgreementContainer: {
    margin: 20,
  },
  singleAgreementContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  // Back to login screen
  loginScreenText: {
    color: Colors.accent.secondary,
    fontSize: 18,
    textAlign: 'center',
  },

  //Title: Username, email address etc
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
    fontSize: 18,
    color: Colors.text.secondary,
  },
  createAccountBtn: {
    fontSize: 20,
  },
  hyperlink: {
    color: Colors.link.primary,
    textAlignVertical: 'center'
  }
});

export default SignUp;
