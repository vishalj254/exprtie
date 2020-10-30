/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StatusBar} from 'react-native';
import AppRouter from './src/Navigation/AppRouter/AppRouter';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <AppRouter />
    </>
  );
};

export default App;
