import { Alert, StyleSheet, Text, View, SafeAreaView, Image, ScrollView, } from 'react-native';
import React, { useState } from 'react';
import { moderateScale } from 'react-native-size-matters';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import axios from 'axios';
import { BaseUrlProfile } from '../helpers/apiAccessToken';
import Logo from '../assets/logo.png'

const Register = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastName] = useState('');
    const [phone, setPhone] = useState('');

    const postRegister = async () => {
        let regexEmail = new RegExp('^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$');
        const checkEmail = regexEmail.test(email);
        if (checkEmail) {
            if (username.length !== 0) {
                if (password.length !== 0) {
                    if (firstname.length !== 0) {
                        if (lastname.length !== 0) {
                            if (phone.length !== 0) {
                                try {
                                    const body = {
                                        email: email,
                                        username: username,
                                        password: password,
                                        name: {
                                            firstname: firstname,
                                            lastname: lastname,
                                        },
                                        address: {
                                            city: 'kilcoole',
                                            street: '7835 new road',
                                            number: 3,
                                            zipcode: '12926-3874',
                                            geolocation: {
                                                lat: '-37.3159',
                                                long: '81.1496',
                                            },
                                        },
                                        phone: phone,
                                    };
                                    // console.log(password);
                                    // console.log(email);
                                    const results = await axios.post(`${BaseUrlProfile}/users`, body);
                                    console.log(results);

                                    if (results.status === 201 || results.status === 200) {
                                        navigation.navigate('Login');
                                    }
                                } catch (error) {
                                    console.log(error);
                                }
                            } else {
                                Alert.alert('Error', 'Please fill all required fields!')
                            }
                        } else {
                            Alert.alert('Error', 'Please fill all required fields!')
                        }
                    } else {
                        Alert.alert('Error', 'Please fill all required fields!')
                    }
                } else {
                    Alert.alert('Error', 'Please fill all required fields!')
                }
            } else {
                Alert.alert('Error', 'Please fill all required fields!')
            }
        } else {
            Alert.alert('Error', 'Invalid email format!')
        }
    };

    return (
        <ScrollView style={styles.container}>
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
                <Text style={styles.title}>Discover Your Favorite Movies Here</Text>
                <Text style={styles.titleDesc}>Register Your Account</Text>
            </View>
            <View showsVerticalScrollIndicator={false}>
                <View
                    style={{
                        flex: 1,
                        marginTop: moderateScale(16),
                        backgroundColor: '#191932',
                    }}>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Email"
                        onChangeText={text => {
                            setEmail(text);
                        }}
                    />
                    <TextInput
                        style={styles.textInput}
                        placeholder="Username"
                        onChangeText={text => {
                            setUsername(text);
                        }}
                    />
                    <TextInput
                        style={styles.textInput}
                        placeholder="Password"
                        secureTextEntry={true}
                        onChangeText={text => {
                            setPassword(text);
                        }}
                    />
                    <TextInput
                        style={styles.textInput}
                        placeholder="First Name"
                        onChangeText={text => {
                            setFirstname(text);
                        }}
                    />
                    <TextInput
                        style={styles.textInput}
                        placeholder="Last Name"
                        onChangeText={text => {
                            setLastName(text);
                        }}
                    />
                    <TextInput
                        style={styles.textInput}
                        placeholder="Phone"
                        keyboardType="phone-pad"
                        onChangeText={text => {
                            setPhone(text);
                        }}
                    />
                    <TouchableOpacity style={styles.button} onPress={postRegister}>
                        <Text style={styles.buttonText}>Register</Text>
                    </TouchableOpacity>
                    <View>
                        <TouchableOpacity
                            style={styles.login}
                            onPress={() => navigation.navigate('Login')}>
                            <Text style={styles.loginText1}>
                                Already a member?{' '}
                                <Text style={styles.loginText2}>Login</Text>
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
};

export default Register;

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
        marginBottom: moderateScale(16),
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
        marginBottom: moderateScale(8),
        alignSelf: 'center',
        paddingHorizontal: moderateScale(30),
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
    login: {
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginBottom: moderateScale(30)
    },
    loginText1: {
        color: 'white',
        fontSize: moderateScale(12),
        fontWeight: '400',
    },
    loginText2: {
        color: '#779ECB',
        fontSize: moderateScale(12),
        fontWeight: '700',
    },
});