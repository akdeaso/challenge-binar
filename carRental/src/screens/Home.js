import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import Feather from 'react-native-vector-icons/Feather'
import Header from '../components/Header'
import Helvetica from '../components/Helvetica'
import Tombol from '../components/Tombol'
import Layanan from '../components/Layanan'
import ButtonIcon from '../components/ButtonIcon'
import ListMobil from '../components/ListMobil'

const Home = () => {
    const [mobil, setMobil] = useState([
        { id: 1, merk: "Daihatsu Xenia", kapasitas: 4, barang: 2, harga: "Rp 230.000" },
        { id: 2, merk: "Daihatsu Xenia", kapasitas: 4, barang: 2, harga: "Rp 230.000" },
        { id: 3, merk: "Daihatsu Xenia", kapasitas: 4, barang: 2, harga: "Rp 230.000" },
        { id: 4, merk: "Daihatsu Xenia", kapasitas: 4, barang: 2, harga: "Rp 230.000" },
        { id: 5, merk: "Daihatsu Xenia", kapasitas: 4, barang: 2, harga: "Rp 230.000" },
        { id: 6, merk: "Daihatsu Xenia", kapasitas: 4, barang: 2, harga: "Rp 230.000" },
    ])

    return (
        <View style={Header.bg}>
            <Helvetica marginTop={12} fontSize={12}>Hi, Nama</Helvetica>
            <View style={Header.parent}>
                <Helvetica type='Bold'>
                    Your Location
                </Helvetica>
                <Image source={require('../assets/Images/avatar.png')} style={Header.avatar} />
            </View>
            <View style={Header.container}>
                <View>
                    <Helvetica color='white' fontSize={16}>Sewa Mobil Berkualitas</Helvetica>
                    <Helvetica color='white' fontSize={16}>di kawasanmu</Helvetica>
                    <TouchableOpacity>
                        <Tombol marginTop={16} marginBottom={24} marginRight={68}>Sewa Mobil</Tombol>
                    </TouchableOpacity>
                </View>
                <View >
                    <Image source={require('../assets/Images/bgmobil.png')} style={Header.bgmobil} />
                    <Image source={require('../assets/Images/mobil.png')} style={Header.mobil} />
                </View>
            </View>
            <View style={Layanan.container}>
                <View style={Layanan.iconLayanan}>
                    <ButtonIcon title="Sewa Mobil" />
                    <ButtonIcon title="Oleh-Oleh" />
                    <ButtonIcon title="Penginapan" />
                    <ButtonIcon title="Wisata" />
                </View>
            </View>
            <View>
                <Helvetica type='Bold' marginTop={24}>
                    Daftar Mobil Pilihan
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
        </View>
    )
}

export default Home

const styles = StyleSheet.create({})