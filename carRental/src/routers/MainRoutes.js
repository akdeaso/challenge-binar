import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Feather from 'react-native-vector-icons/Feather'
//screen
import Home from '../screens/Home';
import DaftarMobil from '../screens/DaftarMobil';
import Akun from '../screens/Akun';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const BottomTab = () => {
    return (
        <Tab.Navigator initialRouteName='Home' screenOptions={{ headerShown: false }}>
            <Tab.Screen name="Home" component={Home} options={{ tabBarIcon: ({ focused }) => <Feather color={focused ? "#0D28A6" : "#808080"} name="home" size={25} /> }} />
            <Tab.Screen name="Daftar Mobil" component={DaftarMobil} options={{ tabBarIcon: ({ focused }) => <Feather color={focused ? "#0D28A6" : "#808080"} name="list" size={25} /> }} />
            <Tab.Screen name="Akun" component={Akun} options={{ tabBarIcon: ({ focused }) => <Feather color={focused ? "#0D28A6" : "#808080"} name="user" size={25} /> }} />
        </Tab.Navigator>
    )
}

const MainRoutes = () => {
    return (
        <Stack.Navigator initialRouteName='BottomTab'>
            <Stack.Screen name="BottomTab" component={BottomTab} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}

export default MainRoutes

const styles = StyleSheet.create({})