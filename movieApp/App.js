import { NavigationContainer } from '@react-navigation/native'
import React, { useState, useEffect } from 'react'
import SplashScreen from 'react-native-splash-screen';
import Router from './src/routers/Router';

const App = () => {
  useEffect(() => {
    SplashScreen.hide()
  }, [])
  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  )
}

export default App