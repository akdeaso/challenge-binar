import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import React, {useEffect} from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useDispatch, useSelector} from 'react-redux';
import {ms} from 'react-native-size-matters';
import {goBack, navigate} from '../helpers/navigate';
import {setConnection} from '../store/globalAction';

const NoConnection = () => {
  const {connection} = useSelector(state => state.Global);
  const dispatch = useDispatch();
  const checkConnection = () => {
    NetInfo.fetch().then(state => {
      console.log('Connection type', state.type);
      console.log('Is connected?', state.isConnected);

      dispatch(setConnection(state.isConnected));
    });
  };

  const handleConnection = () => {
    checkConnection();
    if (connection) {
      goBack();
    } else {
      alert('No connection detected, please try again');
    }
  };

  return (
    <View style={styles.main}>
      <Text style={styles.mainTitle}>Ups, something wrong!</Text>
      <View style={styles.midContainer}>
        <MaterialIcons name="signal-wifi-off" size={ms(120)} color="white" />
        <Text style={styles.text}>
          Please check your internet connection and try again
        </Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => handleConnection()}>
        <Text style={styles.buttonText}>Try Again</Text>
      </TouchableOpacity>
    </View>
  );
};

export default NoConnection;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#191932',
    justifyContent: 'space-between',
    alignContent: 'center',
  },
  mainTitle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: ms(20),
    marginTop: ms(30),
    fontSize: ms(20),
    alignSelf: 'center',
  },
  text: {
    color: 'white',
    marginTop: ms(20),
    fontSize: ms(20),
    paddingHorizontal: ms(40),
    textAlign: 'center',
  },
  midContainer: {
    alignItems: 'center',
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
    alignContent: 'center',
  },
});
