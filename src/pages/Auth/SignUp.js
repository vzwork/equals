import React from 'react';
import {View, Text, Button} from 'react-native';

const SignUp = ({navigation}) => {
  console.log("SignUp")

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>
        Sign up!
      </Text>
      <Button 
        onPress={() => {
          navigation.navigate('SignIn')
        }}
        title="sign in"
      />
    </View>
  );
};

export default SignUp;