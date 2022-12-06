import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AuthProvider} from './src/pages/Auth/auth-context';
import Routes from './Routes';

const App = () => {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
};

export default App;
