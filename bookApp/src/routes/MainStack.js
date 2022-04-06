import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home';
import Register from '../screens/Register';
import Login from '../screens/Login';
import BookDetail from '../screens/BookDetail';
import SuccessRegister from '../screens/SuccessRegister';
import NoConnection from '../components/NoConnection';
import {useSelector} from 'react-redux';

const Stack = createStackNavigator();

const Routes = () => {
  const {token} = useSelector(state => state.login);
  if (token.length === 0) {
    return (
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="BookDetail" component={BookDetail} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SuccessRegister" component={SuccessRegister} />
        <Stack.Screen name="NoConnection" component={NoConnection} />
      </Stack.Navigator>
    );
  } else {
    return (
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="BookDetail" component={BookDetail} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="NoConnection" component={NoConnection} />
      </Stack.Navigator>
    );
  }
};

export default Routes;
