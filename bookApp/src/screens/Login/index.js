import {Alert, StyleSheet, Text, View, SafeAreaView, Image} from 'react-native';
import React, {useState} from 'react';
import {moderateScale} from 'react-native-size-matters';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import Logo from '../../assets/logo2.png';
import axios from 'axios';
import {BaseUrl} from '../../helpers/api';
import {useDispatch, useSelector} from 'react-redux';
import {setName, setToken} from './redux/action';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  //   const {token} = useSelector(state => state.login);

  const validate = (email, password) => {
    if (email.length === 0 || password.length === 0) {
      Alert.alert('Error', 'Invalid username or password');
      return null;
    } else {
      const body = {
        email: email, //akdeaso@gmail.com
        password: password, //pwbinar24
      };
      return body;
    }
  };

  //   if (token.length !== 0) {
  //     navigation.navigate('Home');
  //   }

  const postLogin = async () => {
    try {
      const body = validate(email, password);
      const results = await axios.post(`${BaseUrl}/auth/login`, body);
      console.log(results);
      console.log(results.data.tokens.access.token);
      const getName = () => {
        dispatch(setName(results.data.user.name));
      };
      const getToken = () => {
        dispatch(setToken(results.data.tokens.access.token));
      };
      getName();
      getToken();
      if (results.status === 201 || results.status === 200)
        navigation.navigate('Home');
    } catch (error) {
      console.log(error);
      Alert.alert('Error', `User doesn't exist, please register`);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{alignItems: 'center', marginTop: moderateScale(16)}}>
        <Image source={Logo} />
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Hello Again</Text>
        <Text style={styles.titleDesc}>Welcome Back!</Text>
      </View>
      <View>
        <TextInput
          style={styles.textInput}
          placeholder="Enter Email"
          onChangeText={text => setEmail(text)}
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
        <View style={{alignItems: 'center'}}>
          <Text style={styles.registerText1}>Not a Member? </Text>
          <TouchableOpacity
            style={styles.register}
            onPress={() => navigation.navigate('Register')}>
            <Text style={styles.registerText}>Register Here</Text>
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
    marginBottom: moderateScale(10),
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
    textAlign: 'center',
    alignContent: 'center',
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
