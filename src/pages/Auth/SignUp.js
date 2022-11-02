import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View, Alert, Linking } from 'react-native';
import CheckBox from "@react-native-community/checkbox";

// comment test
const SignUp = ({navigation}) => {
  console.log("SignUp")

  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');

  const [termsConditionsCheckbox, setTermsConditionsCheckbox] = useState(false);
  const [eulaCheckbox, setEulaCheckbox] = useState(false);

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

        <Button title="Create Account" style={styles.createAccountBtn} onPress={() => isFormValid(password1,password2,termsConditionsCheckbox,eulaCheckbox)}/>
      </View>

    </View>
  );
};

const isFormValid = (password1,password2,agreement1,agreement2) => {
  let isPasswordValid = false;
  let areAgreementsAccepted = false;

  isPasswordValid = validatePassword(password1,password2);
  areAgreementsAccepted = validateUserAgreements(agreement1,agreement2);

  if (isPasswordValid === true && areAgreementsAccepted === true) {
    Alert.alert('Success')
  } else if (isPasswordValid === false) {
    Alert.alert('Please enter two matching passwords.')
  } else if (areAgreementsAccepted === false) {
    Alert.alert('Please accept the agreements.')
  }
}

const validatePassword = (password1, password2) => {
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