import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Helvetica from '../components/Helvetica'
import Tombol from '../components/Tombol'

const Akun = () => {
    return (
        <View style={styles.bg}>
            <Helvetica type='Bold' fontSize={14} marginTop={24}>
                Akun
            </Helvetica>
            <View style={styles.container}>
                <Image source={require('../assets/Images/park.png')} style={styles.gambar} />
                <Helvetica textAlign={"center"} marginLeft={0}>
                    Upss kamu belum memiliki akun. Mulai buat akun agar transaksi di BCR lebih mudah
                </Helvetica>
                <TouchableOpacity>
                    <Tombol marginTop={16}>Register</Tombol>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Akun

const styles = StyleSheet.create({
    bg: {
        flex: 1,
        justifyContent: 'center'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 50
    },
    gambar: {
        width: 312,
        height: 192,
        justifyContent: 'center',
    }
})