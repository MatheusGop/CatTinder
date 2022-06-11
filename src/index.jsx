import React from 'react';
import {
  SafeAreaView,
} from 'react-native';
import FlashMessage from "react-native-flash-message";
import { theme } from './global';
import { Routes } from './routes';

const App = () => {

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.lightWhite }}>
      <Routes />
      <FlashMessage position="top" />
    </SafeAreaView>
  );
};

export default App;