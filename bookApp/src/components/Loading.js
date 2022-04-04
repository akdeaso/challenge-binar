import { StyleSheet, Text, View, ActivityIndicator } from 'react-native'
import React from 'react'
import { ms } from 'react-native-size-matters'

const Loading = () => {
    return (
        <View flex={1} justifyContent="center" alignItems="center" style={{ backgroundColor: "#191932" }} >
            <ActivityIndicator size={ms(50)} color={"white"} />
        </View>
    )
}

export default Loading

const styles = StyleSheet.create({})