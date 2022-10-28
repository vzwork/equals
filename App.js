import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { createContext, useContext } from 'react';
import { SafeAreaView } from 'react-native';

import SignIn from './src/pages/Auth/SignIn';
import SignUp from './src/pages/Auth/SignUp';
import Home from './src/pages/Home/Home';

const AuthContext = createContext(false);

const Stack = createNativeStackNavigator();

const App = () => {
  const {user} = useContext(AuthContext);

  return (
    <NavigationContainer>
      {! user
        ? <Stack.Navigator initialRouteName='SignIn'>
            <Stack.Screen name="SignIn" component={SignIn} />
            <Stack.Screen name="SignUp" component={SignUp} />
          </Stack.Navigator>
        : <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen name="Home" component={Home} />
          </Stack.Navigator>
      }
    </NavigationContainer>
  );
};

export default App;