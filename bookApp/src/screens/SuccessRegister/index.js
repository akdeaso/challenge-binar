import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { ms } from 'react-native-size-matters'
import { TouchableOpacity } from 'react-native-gesture-handler'

const SuccessRegister = ({ navigation }) => {
    return (
        <View style={styles.main}>
            <Text style={styles.mainTitle}>Registration Completed!</Text>
            <View style={styles.midContainer}>
                <MaterialIcons name="check-circle" size={ms(120)} color="white" />
                <Text style={styles.text}>We sent email verification to your email</Text>
            </View>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
                <Text style={styles.buttonText}>Sign In</Text>
            </TouchableOpacity>
        </View>
    )
}

export default SuccessRegister

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: "#191932",
        justifyContent: 'space-between',
        alignContent: 'center'
    },
    mainTitle: {
        color: "white",
        fontWeight: 'bold',
        fontSize: ms(20),
        marginTop: ms(30),
        fontSize: ms(20),
        alignSelf: 'center'
    },
    text: {
        color: "white",
        marginTop: ms(20),
        fontSize: ms(20),
        paddingHorizontal: ms(40),
        textAlign: 'center'
    },
    midContainer: {
        alignItems: 'center'
    },
    button: {
        marginBottom: ms(10),
        marginHorizontal: ms(10),
        alignItems: 'center',
        backgroundColor: '#E31212',
        paddingVertical: ms(10),
        borderRadius: ms(10),
        shadowColor: 'red',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    buttonText: {
        fontSize: ms(14),
        color: 'white',
        fontWeight: '700',
        textAlign: 'center',
        alignContent: 'center'
    },
})