import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View, Alert, Linking } from 'react-native';
import CheckBox from "@react-native-community/checkbox";
import Auth from '../../api/Auth.mjs';

// comment test
// comment test 2
const SignUp = ({navigation}) => {
  console.log("SignUp")

  const [email, setEmail] = useState('');

  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');

  const [termsConditionsCheckbox, setTermsConditionsCheckbox] = useState(false);
  const [eulaCheckbox, setEulaCheckbox] = useState(false);

  const signUp = () => {
    print(Auth.createUser(email, email, password1));
  }

  return (
    <View style={styles.container}>

      <Text style={styles.loginScreenText} onPress={() => navigation.navigate('SignIn')}>Back to Login Screen</Text>

      <View style={styles.viewHeaderContainer}>
        <Text style={styles.equalsText}>EQuALS </Text>
        <Text style={styles.viewTitle}>Account Creation</Text>
      </View>

      <View style={styles.createAccountContainer}>
        <Text style={styles.textInputTitle}>Username</Text>
        <TextInput
          placeholder='Enter Username'
          style={styles.textInput}
        />

        <Text style={styles.textInputTitle}>Email Address</Text>
        <TextInput
          placeholder=' Enter Email'
          style={styles.textInput}
          onChangeText={email => setEmail(email)}
        />

        <Text style={styles.textInputTitle}>Password</Text>
        <TextInput
          placeholder='Enter Username'
          secureTextEntry={true}
          style={styles.textInput}
          onChangeText={password => setPassword1(password)}
        />

        <Text style={styles.textInputTitle}>Confirm Password</Text>
        <TextInput
          placeholder=' Enter Password'
          secureTextEntry={true}
          style={styles.textInput}
          onChangeText={password => setPassword2(password)}
        />

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

        <Button
          title="Create Account" style={styles.createAccountBtn}
          onPress={() => {
            isFormValid(email,password1,password2,termsConditionsCheckbox,eulaCheckbox)
            signUp();
          }}
        />
      </View>

    </View>
  );
};

const isFormValid = (email,password1,password2,agreement1,agreement2) => {
  let isEmailValid = false;
  let arePasswordsMatching = false;
  let arePasswordsStrong = false;
  let areAgreementsAccepted = false;

  isEmailValid = validateEmail(email)
  arePasswordsMatching = validateMatchingPassword(password1,password2);
  arePasswordsStrong = validatePasswordStrength(password1,password2)
  areAgreementsAccepted = validateUserAgreements(agreement1,agreement2);

  if (isEmailValid === true && arePasswordsMatching === true && arePasswordsStrong === true && areAgreementsAccepted === true) {
    Alert.alert('Success')
  } else if (arePasswordsMatching === false) {
    Alert.alert('Please enter two matching passwords.')
  } else if (arePasswordsStrong === false) {
    Alert.alert('Password is not strong enough.')
  } else if (areAgreementsAccepted === false) {
    Alert.alert('Please accept the agreements.')
  } else if (isEmailValid === false) {
    Alert.alert('Invalid email address.')
  }
}

const validateEmail = (text) => {
  let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
  if (reg.test(text) === false) {
    return false;
  }
  return true;
}

const validatePasswordStrength = (password1, password2) => {
  let reg = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");
  if (reg.test(password1) === true && reg.test(password2) === true) {
    return true;
  }
  return false;
}

const validateMatchingPassword = (password1, password2) => {
  if (password1.length > 7 && password1 === password2) {
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
  equalsText: {
    fontWeight: "bold",
    color: '#173C6F',
    fontSize: 52,
    // textAlign: 'center'
  },
  viewTitle: {
    // textAlign: 'center',
    fontSize: 22
  },
  createAccountContainer: {
    
  },
  userAgreementContainer: {
    margin: 20
  },
  singleAgreementContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  loginScreenText: {
    color: '#41A2FB',
    fontSize: 16,
    textAlign: 'center'
  },
  textInputTitle: {
    fontSize: 20,
    marginBottom: 5,
    color: '#000000'
  },
  textInput: {
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#BCE0FD',
    borderRadius: 8,
    fontSize: 18,
    color: '#3d3d3d'
    
  },
  createAccountBtn: {
    fontSize: 20
  },
  hyperlink: {
    color: '#2499FB',
    textAlignVertical: 'center'
  }
});

export default SignUp;