import { StyleSheet, Text, View, TouchableOpacity, FlatList, Image } from 'react-native'
import { moderateScale } from 'react-native-size-matters';
import Spinner from 'react-native-loading-spinner-overlay';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { ACCESS_TOKEN, BaseUrl } from '../helpers/apiAccessToken'
import SkeleLoad from '../components/SkeleLoad'

const Home = ({ navigation }) => {
    const [listMovie, setListMovie] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getListMovie()
    }, [])

    const getListMovie = async () => {
        try {
            const results = await axios.get(`${BaseUrl}/movies`, { headers: { Authorization: `Bearer ${ACCESS_TOKEN}` } })
            setListMovie(results.data.results)
            console.log(results.data.results)
            if (loading) {
                setLoading(false);
            }
        } catch (error) {
            console.log(error)
        }
    }

    const CardMovie1 = ({ item }) => {
        return (
            <View style={styles.containerMovie1}>
                <TouchableOpacity onPress={() => navigation.navigate('MovieDetail', { ID_MOVIE: item.id })}>
                    <Image source={{ uri: `${item.poster_path}` }} style={styles.image1} />
                </TouchableOpacity>
            </View>
        )
    }

    const CardMovie2 = ({ item }) => {
        return (
            <View style={styles.containerMovie2}>
                <Image source={{ uri: `${item.poster_path}` }} style={styles.image2} />
                <View style={styles.containerDetail}>
                    <View>
                        <Text style={styles.judulMovie}>{item.title}</Text>
                        <Text style={styles.detailMovie}>{item.release_date}</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <MaterialIcons name="star" size={18} color="yellow" style={{ marginLeft: moderateScale(13) }} />
                            <Text style={styles.detailMovie}>{item.vote_average}</Text>
                        </View>
                    </View>
                    <View>
                        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('MovieDetail', { ID_MOVIE: item.id })}>
                            <Text style={styles.buttonText}>Show More</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }

    return (
        <View style={styles.main}>
            {loading ? (
                <SkeleLoad screen={"Home"} />
            ) : (
                <View>
                    <Text style={styles.mainTitle}>Recommended</Text>
                    <View >
                        <FlatList data={listMovie} keyExtractor={(item, index) => index} renderItem={CardMovie1} horizontal={true} />
                    </View>
                    <Text style={styles.mainTitle}>Latest Update</Text>
                    <View>
                        <FlatList data={listMovie} keyExtractor={(item, index) => index} renderItem={CardMovie2} />
                    </View>
                </View>
            )}
        </View>
    )
}


export default Home

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: "#191932"
    },
    mainTitle: {
        color: "white",
        fontWeight: 'bold',
        fontSize: moderateScale(20),
        marginTop: moderateScale(10),
        marginLeft: moderateScale(13),
        fontSize: moderateScale(13)
    },
    text: {
        color: "white",
    },
    image1: {
        height: moderateScale(160),
        width: moderateScale(116),
        borderRadius: moderateScale(5)
    },
    image2: {
        height: moderateScale(100),
        width: moderateScale(100),
        borderRadius: moderateScale(5)
    },
    containerDetail: {
        // backgroundColor: "red",
        width: moderateScale(250),
        marginRight: moderateScale(13),
        justifyContent: 'space-between'
    },
    containerMovie1: {
        // flexDirection: 'row',
        margin: moderateScale(13),
    },
    containerMovie2: {
        flexDirection: 'row',
        margin: moderateScale(13),
    },
    judulMovie: {
        marginLeft: moderateScale(13),
        fontWeight: "bold",
        color: "white"
    },
    detailMovie: {
        marginLeft: moderateScale(13),
        color: "white"
    },
    button: {
        width: moderateScale(100),
        justifyContent: 'flex-end',
        backgroundColor: "#E31212",
        borderRadius: moderateScale(10),
        marginLeft: moderateScale(13),
        padding: moderateScale(5)
    },
    buttonText: {
        flex: 1,
        color: "white",
        textAlign: 'center'
    },
    spinnerTextStyle: {
        color: 'white',
    },
})