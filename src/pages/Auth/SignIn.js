import React from 'react';
import {View, Text, Button} from 'react-native';

const SignIn = ({navigation}) => {
  console.log("SignIn")

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>
        Sign in!
      </Text>
      <Button 
        onPress={() => {
          navigation.navigate("SignUp")
        }}
        title="sign up"
      />
    </View>
  );
};

export default SignIn;