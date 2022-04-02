import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../screens/Home'
import Register from '../screens/Register'
import Login from '../screens/Login'
import BookDetail from '../screens/BookDetail'
import SuccessRegister from '../screens/SuccessRegister'

const Stack = createStackNavigator()

const Routes = () => {
    return (
        <Stack.Navigator initialRouteName='Login' screenOptions={{ headerShown: false }} >
            <Stack.Screen name="MovieDetail" component={BookDetail} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="SuccessRegister" component={SuccessRegister} />
        </Stack.Navigator>
    )
}

export default Routes
