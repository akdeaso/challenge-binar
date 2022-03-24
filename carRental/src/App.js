import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen'
import MainRoutes from './routers/MainRoutes';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, [])
  return (
    <NavigationContainer>
      <MainRoutes />
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})