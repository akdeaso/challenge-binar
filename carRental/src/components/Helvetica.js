import React from "react";
import { Text, StyleSheet } from 'react-native'

const Helvetica = ({ type = 'Light', children, color = "black", marginTop, fontSize = 14, marginLeft = 16, textAlign }) => {
    const style = StyleSheet.create({
        text: {
            fontFamily: `Helvetica-${type}`,
            color: color,
            marginVertical: 2,
            marginTop: marginTop,
            marginLeft: marginLeft,
            fontSize: fontSize,
            textAlign: textAlign,
        },
    })
    return <Text style={style.text}>{children}</Text>
}

export default Helvetica;