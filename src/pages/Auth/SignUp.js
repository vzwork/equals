import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View, Alert, Linking, ScrollView } from 'react-native';
import CheckBox from "@react-native-community/checkbox";
import Colors from '../../colors/Colors.mjs';
import Auth from '../../api/Auth.mjs';


const SignUp = ({navigation}) => {
  console.log("SignUp")

  // 
  const [isFormValid, setIsFormValid] = useState(false);

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

  // For populating text input warning messages.
  useEffect(() => {

    // Email
    if (email.length === 0) {
      setEmailMessage('');
    } if (isEmailValid(email)) {
      setEmailMessage('');
    } else if (email.length != 0 && !isEmailValid(email)) {
      setEmailMessage('Please enter a valid email.')
    }

    // Password 1
    if (password1.length === 0) {
      setPassword1Message('');
    } if (isPasswordValid(password1)) {
      setPassword1Message('');
    } else if (password1.length != 0 && !isPasswordValid(password1)) {
      setPassword1Message('Invalid password.');
    }

    // Password 2 & checking for match
    if (password2.length === 0) {
      setPassword2Message('');
    } if (isPasswordValid(password2)) {
      setPassword2Message('');
    } else if (password2.length != 0 && !isPasswordValid(password2)) {
      setPassword2Message('Invalid password.');
    } else if (password1 != password2) {
      setPassword2Message('Passwords don\'t match.');
    }

  })

  const signUp = () => {
    print(Auth.createUser(email, email, password1));
  }

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
          placeholder='Enter Username'
          style={styles.textInput}
          onChangeText={username => setUsername(username)}
        />

        {/* EMAIL */}
        <View style={styles.inputHeaderContainer}>
          <Text style={styles.textInputTitle}>Email Address</Text>
          <Text styles={styles.inputMessageText}>{emailMessage}</Text>
        </View>
        <TextInput
          placeholder=' Enter Email'
          style={styles.textInput}
          onChangeText={email => setEmail(email)}
        />

        {/* PASSWORD 1 */}
        <View style={styles.inputHeaderContainer}>
          <Text style={styles.textInputTitle}>Enter Password</Text>
          <Text styles={styles.inputMessageText}>{password1Message}</Text>
        </View>
        <TextInput
          placeholder='Enter Password'
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
          placeholder=' Enter Password'
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
              onValueChange={(newValue) => setTermsConditionsCheckbox(newValue)}
            />
            <Text>Accept
              <Text style={styles.hyperlink} onPress={() => Linking.openURL('https://equals.prepareinc.us/Account/Terms')}> Terms and Conditions
              </Text>
            </Text>

          </View>
          <View style={styles.singleAgreementContainer}>
            <CheckBox 
              disabled={false}
              value={eulaCheckbox}
              onValueChange={(newValue) => setEulaCheckbox(newValue)}
            />
            <Text>Accept 
              <Text style={styles.hyperlink} onPress={() => Linking.openURL('https://equals.prepareinc.us/Account/PrivacyPolicy')}> End User License Agreement</Text>
            </Text>
          </View>
        </View>

        {/* CREATE ACCOUNT BUTTON */}
        <Button
          title="Create Account" style={styles.createAccountBtn}
          onPress={() => {
            signUp();
          }}
        />
      </View>
    </View>
    </ScrollView>
  );
};

const isEmailValid = (text) => {
  let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
  if (reg.test(text) === false) {
    return false;
  }
  return true;
}

const isPasswordValid = (password1, password2) => {
  let reg = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");
  if (reg.test(password1) === true && reg.test(password2) === true) {
    return true;
  }
  return false;
}

const validateMatchingPassword = (password1, password2) => {
  if (password1 === password2) {
    return true;
  }
  return false;
}

const validateUserAgreements = (agreement1, agreement2) => {
  if (agreement1 === true && agreement2 === true) {
    return true;
  }
  return false;
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20
  },
  viewHeaderContainer: {
    marginVertical: 25,
    alignItems: 'center'
  },
  inputHeaderContainer: {
    flexDirection: 'row'
  },
  inputMessageText: {
    color: Colors.text.warning
  },
  equalsText: {
    fontWeight: "bold",
    color: Colors.accent.secondary,
    fontSize: 52,
    // textAlign: 'center'
  },
  viewTitle: {
    // textAlign: 'center',
    fontSize: 22
  },
  createAccountContainer: {
    justifyContent: 'flex-end'
  },
  userAgreementContainer: {
    margin: 20
  },
  singleAgreementContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  loginScreenText: {
    color: Colors.accent.secondary,
    fontSize: 16,
    textAlign: 'center'
  },
  textInputTitle: {
    fontSize: 20,
    marginBottom: 5,
    color: Colors.text.primary
  },
  textInput: {
    marginBottom: 20,
    borderBottomWidth: 2,
    borderColor: Colors.background.secondary,
    fontSize: 18,
    color: Colors.text.secondary
    
  },
  createAccountBtn: {
    fontSize: 20
  },
  hyperlink: {
    color: Colors.link.primary,
    textAlignVertical: 'center'
  }
});

export default SignUp;