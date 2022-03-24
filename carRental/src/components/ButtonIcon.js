import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Helvetica from './Helvetica'

const ButtonIcon = ({ title }) => {
    const Icon = () => {
        if (title === 'Sewa Mobil') {
            return <Image source={require('../assets/Icons/truck.png')} style={styles.icon} />
        } else if (title === 'Oleh-Oleh') {
            return <Image source={require('../assets/Icons/box.png')} style={styles.icon} />
        } else if (title === 'Penginapan') {
            return <Image source={require('../assets/Icons/key.png')} style={styles.icon} />
        } else if (title === 'Wisata') {
            return <Image source={require('../assets/Icons/camera.png')} style={styles.icon} />
        }
        return <Image source={require('../assets/Icons/box.png')} style={styles.icon} />
    }
    return (
        <TouchableOpacity>
            <View style={styles.button}>
                <Icon />
            </View>
            <Helvetica marginLeft={0} marginTop={8} textAlign='center' fontSize={12}>{title}</Helvetica>
        </TouchableOpacity>
    )
}

export default ButtonIcon

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#DEF1DF',
        borderRadius: 8,
        justifyContent: 'space-between',
        padding: 20
    },
    icon: {
        width: 30,
        height: 30,
        justifyContent: 'center'
    }
})