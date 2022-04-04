import React, { useEffect } from 'react'
import SplashScreen from 'react-native-splash-screen'
import { Provider } from 'react-redux';
import { persistedStore, store } from './src/store';
import { PersistGate } from 'redux-persist/lib/integration/react';
import Root from './src/routes';

const App = () => {
  useEffect(() => {
    SplashScreen.hide()
  }, [])
  return (
    <Provider store={store}>
      <PersistGate persistor={persistedStore}>
        <Root />
      </PersistGate>
    </Provider>
  )
}

export default App