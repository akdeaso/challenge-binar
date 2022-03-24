import { Alert, StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';
import React, { useState } from 'react';
import { moderateScale } from 'react-native-size-matters';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import Logo from '../assets/logo.png'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';
import { BaseUrlProfile } from '../helpers/apiAccessToken';


const Login = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const validate = (username, password) => {
        if (username.length === 0 || password.length === 0) {
            Alert.alert('Error', 'Invalid username or password');
            return null;
        } else {
            const body = {
                username: username, //johnd
                password: password, //m38rmF$
            };
            return body;
        }
    }

    const postLogin = async () => {
        try {
            const body = validate(username, password);
            const results = await axios.post(`${BaseUrlProfile}/auth/login`, body);
            console.log(results);
            if (results.status === 201 || results.status === 200)
                navigation.replace('Home');
        } catch (error) {
            console.log(error);
            Alert.alert('Error', `User doesn't exist, please register`);
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={{ alignItems: 'center', marginTop: moderateScale(16) }}>
                <Image
                    source={Logo}
                    style={{
                        width: moderateScale(100),
                        height: moderateScale(100),
                    }}
                />
            </View>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Hello Again</Text>
                <Text style={styles.titleDesc}>Welcome Back!</Text>
            </View>
            <View style={{ flex: 1 }}>
                <TextInput
                    style={styles.textInput}
                    placeholder="Enter Username"
                    onChangeText={text => setUsername(text)}
                />
                <TextInput
                    style={styles.textInput}
                    placeholder="Password Here"
                    onChangeText={text => setPassword(text)}
                    secureTextEntry={true}
                />
                <TouchableOpacity style={styles.button} onPress={postLogin}>
                    <Text style={styles.buttonText}>Sign In</Text>
                </TouchableOpacity>
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginTop: moderateScale(35),
                    }}>
                    <View style={{ flex: 1, height: 1, backgroundColor: 'black' }}></View>
                    <Text style={styles.otherLogin}>Or, Continue With</Text>
                    <View style={{ flex: 1, height: 1, backgroundColor: 'black' }}></View>
                </View>
                <View
                    style={{
                        flex: 1,
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-evenly',
                    }}>
                    <TouchableOpacity style={styles.otherLoginButton}>
                        <FontAwesome size={24} color="white" name="google" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.otherLoginButton}>
                        <FontAwesome size={24} color="white" name="facebook" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.otherLoginButton}>
                        <FontAwesome size={24} color="white" name="instagram" />
                    </TouchableOpacity>
                </View>

                <View>
                    <TouchableOpacity
                        style={styles.register}
                        onPress={() => navigation.navigate('Register')}>
                        <Text style={styles.registerText1}>
                            Not a Member?{' '}
                            <Text style={styles.registerText}>Register Here</Text>
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#191932',
        padding: moderateScale(16),
    },
    titleContainer: {
        marginTop: moderateScale(24),
        flexDirection: 'column',
        alignItems: 'center',
    },
    title: {
        marginBottom: moderateScale(8),
        fontSize: moderateScale(20),
        color: 'white',
        fontWeight: '700',
    },
    titleDesc: {
        marginBottom: moderateScale(32),
        fontSize: moderateScale(16),
        color: 'white',
        fontWeight: '400',
    },
    inputContainer: {
        justifyContent: 'center',
    },
    textInput: {
        marginBottom: moderateScale(24),
        backgroundColor: '#ECECEC',
        color: 'black',
        fontSize: moderateScale(14),
        paddingStart: moderateScale(16),
        borderRadius: moderateScale(10),
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.12,
        shadowRadius: 5.46,

        elevation: 4,
    },
    button: {
        marginTop: moderateScale(8),
        alignItems: 'center',
        backgroundColor: '#E31212',
        paddingVertical: moderateScale(10),
        borderRadius: moderateScale(10),
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
        fontSize: moderateScale(14),
        color: 'white',
        fontWeight: '700',
    },
    otherLogin: {
        fontSize: moderateScale(12),
        color: 'grey',
        fontWeight: '400',
        marginHorizontal: moderateScale(16),
    },
    otherLoginButton: {
        backgroundColor: 'rgb(57,57,78)',
        padding: moderateScale(20),
        borderRadius: moderateScale(10),
        shadowColor: '#ADD8E6',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.12,
        shadowRadius: 5.46,

        elevation: 2,
    },
    register: {
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    registerText: {
        color: '#779ECB',
        fontSize: moderateScale(12),
        fontWeight: '700',
    },
    registerText1: {
        color: 'white',
        fontSize: moderateScale(12),
        fontWeight: '400',
    },
});