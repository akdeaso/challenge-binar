import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Tombol = ({ children, marginTop, marginRight, marginBottom }) => {
    const style = StyleSheet.create({
        text: {
            fontFamily: `Helvetica-Bold`,
            color: 'white',
            marginLeft: 16,
            marginTop: marginTop,
            paddingVertical: 4,
            paddingHorizontal: 6,
            marginBottom: marginBottom,
            marginRight: marginRight,
            fontSize: 14,
            backgroundColor: '#5CB85F',
            borderRadius: 2,
            width: 110,
            justifyContent: 'center',
            textAlign: 'center'
        },
    })
    return <Text style={style.text}>{children}</Text>
}

export default Tombol

const styles = StyleSheet.create({})