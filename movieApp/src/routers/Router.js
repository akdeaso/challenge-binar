import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import MovieDetail from '../screens/MovieDetail'
import Home from '../screens/Home'
import Register from '../screens/Register'
import Login from '../screens/Login'


const Stack = createStackNavigator()

const Router = () => {
    return (
        <Stack.Navigator initialRouteName='Login' screenOptions={{ headerShown: false }} >
            <Stack.Screen name="MovieDetail" component={MovieDetail} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
    )
}

export default Router