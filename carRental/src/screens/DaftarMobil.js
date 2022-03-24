import { StyleSheet, Text, View, TouchableOpacity, Image, SafeAreaView, FlatList } from 'react-native'
import React, { useState } from 'react'
import Feather from 'react-native-vector-icons/Feather'
import Helvetica from '../components/Helvetica'
import ListMobil from '../components/ListMobil'

const DaftarMobil = () => {
    const [mobil, setMobil] = useState([
        { id: 1, merk: "Daihatsu Xenia", kapasitas: 4, barang: 2, harga: "Rp 230.000" },
        { id: 2, merk: "Daihatsu Xenia", kapasitas: 4, barang: 2, harga: "Rp 230.000" },
        { id: 3, merk: "Daihatsu Xenia", kapasitas: 4, barang: 2, harga: "Rp 230.000" },
        { id: 4, merk: "Daihatsu Xenia", kapasitas: 4, barang: 2, harga: "Rp 230.000" },
        { id: 5, merk: "Daihatsu Xenia", kapasitas: 4, barang: 2, harga: "Rp 230.000" },
        { id: 6, merk: "Daihatsu Xenia", kapasitas: 4, barang: 2, harga: "Rp 230.000" },
        { id: 7, merk: "Daihatsu Xenia", kapasitas: 4, barang: 2, harga: "Rp 230.000" },
    ])
    return (
        <View>
            <Helvetica type='Bold' fontSize={14} marginTop={24}>
                Daftar Mobil
            </Helvetica>
            <SafeAreaView>
                <FlatList
                    data={mobil}
                    renderItem={({ item }) => (
                        <TouchableOpacity style={ListMobil.container}>
                            <Image source={require('../assets/Images/mobil2.png')} style={ListMobil.gambar} />
                            <View style={ListMobil.subContainer}>
                                <Helvetica type='Regular' marginTop={20}>{item.merk}</Helvetica>
                                <View style={ListMobil.subContainer2}>
                                    <Feather name="users" style={ListMobil.miniIcon} />
                                    <Text>{item.kapasitas}</Text>
                                    <Feather name="briefcase" style={ListMobil.miniIcon} />
                                    <Text>{item.barang}</Text>
                                </View>
                                <Helvetica type='Regular' color='#5CB85F'>{item.harga}</Helvetica>
                            </View>
                        </TouchableOpacity>
                    )}
                />
            </SafeAreaView>
        </View>
    )
}

export default DaftarMobil

const styles = StyleSheet.create({})