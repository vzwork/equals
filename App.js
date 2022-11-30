import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { createContext, useContext } from 'react';

import SignIn from './src/pages/Auth/SignIn';
import SignUp from './src/pages/Auth/SignUp';
import ForgotPass from './src/pages/Auth/ForgotPass';
import ForgotPassSuccess from './src/pages/Auth/ForgotPassSuccess';
import Home from './src/pages/Home/Home';
import TestSetup from './src/pages/Exam/TestSetup';
import QuestionPage from './src/pages/Exam/QuestionPage';
import AnswerCheck from './src/pages/Exam/AnswerCheck';

const AuthContext = createContext(false);

const Stack = createNativeStackNavigator();

const App = () => {
  const {user} = useContext(AuthContext);

  return (
    <NavigationContainer>
      {! user
        ? <Stack.Navigator initialRouteName='SignIn'>
            <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown: false }} />
            <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
            <Stack.Screen name="ForgotPass" component={ForgotPass} options={{ headerShown: false }} />
            <Stack.Screen name="ForgotPassSuccess" component={ForgotPassSuccess} options={{ headerShown: false }} />
            <Stack.Screen name="TestSetup" component={TestSetup} options={{ headerShown: false }} />
            <Stack.Screen name="QuestionPage" component={QuestionPage} options={{ headerShown: false }} />
            <Stack.Screen name="AnswerCheck" component={AnswerCheck} options={{ headerShown: false }} />
          </Stack.Navigator>
        : <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen name="Home" component={Home} />
          </Stack.Navigator>
      }
    </NavigationContainer>
  );
};

export default App;