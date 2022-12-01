import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View, ScrollView} from 'react-native';
import Colors from '../../colors/Colors.mjs';
import Auth from '../../api/Auth.mjs';

const AccountCreated = ({navigation}) => {
  console.log('Account Created')

  return (
    <View style={styles.container}>

      <View style={styles.viewHeaderContainer}>
        <Text style={styles.equalsText}>EQuALS </Text>
        <Text style={styles.viewTitle}>Account Created!</Text>
      </View>

      <Text style={styles.loginScreenText} onPress={() => navigation.navigate('SignIn')}>Back to Login Screen</Text>

    </View>
  );
};

const styles = StyleSheet.create({
  viewHeaderContainer: {
    marginVertical: 25,
    alignItems: 'center'
  },
  equalsText: {
    fontWeight: "bold",
    color: Colors.accent.secondary,
    fontSize: 52,
    // textAlign: 'center'
  },

  //Text:Account Creation
  viewTitle: {
    fontSize: 18
  },
  loginScreenText: {
    color: Colors.accent.secondary,
    fontSize: 18,
    textAlign: 'center'
  }
});

export default AccountCreated;