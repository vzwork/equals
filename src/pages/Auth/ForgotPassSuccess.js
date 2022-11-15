import React from 'react';
import { Button, StyleSheet, Text, View, ScrollView } from 'react-native';

const ForgotPassSuccess = ({navigation}) => {
  console.log("ForgotPassSuccess")

  return (
    <ScrollView style={{width:'100%'}}>
    <View style={styles.container}>

      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>EQuALS</Text>
        <Text style={styles.welcomeText}>Your password reset request successful!</Text>
      </View>

      <View style={styles.forgotPassContainer}>
        <Text
          style={styles.backToHomeText}
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
    marginBottom: 60
  },
  headerText: {
    textAlign: "left",
    fontSize: 52,
    fontWeight: "bold",
    color: '#173C6F',
    marginBottom: 20
  },
  welcomeText: {
    color: Colors.accent.secondary,
    fontSize: 30
  },
  backToHomeText: {
    color: Colors.accent.secondary,
    fontSize: 18,
    textAlign: 'center'
  },
});

export default ForgotPassSuccess;