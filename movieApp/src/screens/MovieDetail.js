import { StyleSheet, Text, View, TouchableOpacity, FlatList, Image } from 'react-native'
import { moderateScale } from 'react-native-size-matters';
import { widthPercentageToDP } from 'react-native-responsive-screen';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Share from 'react-native-share';
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { ACCESS_TOKEN, BaseUrl, creditsURL, imageCastURL } from '../helpers/apiAccessToken'
import { ScrollView } from 'react-native-gesture-handler';
import SkeleLoad from '../components/SkeleLoad'

const MovieDetail = ({ navigation, route }) => {
    const [MovieByID, setMovieByID] = useState({})
    const [cast, setCast] = useState({})
    const [loading, setLoading] = useState(true)
    console.log(route)

    useEffect(() => {
        getDetailMovieByID()
        getCast()
    }, [])

    const getDetailMovieByID = async () => {
        try {
            const results = await axios.get(`${BaseUrl}/movies/${route.params.ID_MOVIE}`, { headers: { Authorization: `Bearer ${ACCESS_TOKEN}` } })
            setMovieByID(results.data)
            console.log(results.data)
            if (loading) {
                setLoading(false);
            }
        } catch (error) {
            console.log(error)
        }
    }

    const getCast = async () => {
        try {
            const results = await axios.get(`${creditsURL}${route.params.ID_MOVIE}/credits`, { headers: { Authorization: `Bearer ${ACCESS_TOKEN}` } })
            setCast(results.data)
            console.log(results.data)
        } catch (error) {
            console.log(error)
        }
    }

    const shareFeature = async () => {
        const shareOptions = {
            message: "Test share feature"
        }
        try {
            const shareResponse = await Share.open(shareOptions)
        } catch (error) {
            console.log(error)
        }
    }

    const Genre = ({ item }) => {
        return (
            <View style={styles.bgGenre}>
                <Text style={styles.textGenre}>{item.name}</Text>
            </View>
        )
    }

    const CardActor = ({ item }) => {
        return (
            <View style={styles.containerActor}>
                <TouchableOpacity>
                    <Image source={{ uri: `${imageCastURL}${item.profile_path}` }} style={styles.imageActor} />
                    <Text style={styles.castName} numberOfLines={1}>{item.name}</Text>
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <ScrollView style={styles.mainContainer}>
            {loading ? (
                <SkeleLoad screen={"MovieDetail"} />
            ) : (
                <View>
                    <View style={styles.topContainer}>
                        <TouchableOpacity style={styles.topButton} onPress={() => navigation.goBack()}>
                            <MaterialIcons name="arrow-back" size={25} color="white" />
                        </TouchableOpacity>
                        <View style={styles.rightButton}>
                            <TouchableOpacity style={styles.topButton}>
                                <MaterialIcons name="favorite-border" size={25} color="white" />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.topButtonShare} onPress={shareFeature}>
                                <MaterialIcons name="share" size={25} color="white" />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <Image source={{ uri: MovieByID.backdrop_path }} style={styles.banner} />
                    <View style={styles.detailContainer}>
                        <Image source={{ uri: MovieByID.poster_path }} style={styles.imageDetail} />
                        <View >
                            <Text style={styles.judulMovie}>{MovieByID.title}</Text>
                            <Text style={styles.detailMovie}>{MovieByID.tagline}</Text>
                            <Text style={styles.detailMovie}>Status: {MovieByID.status}</Text>
                            <Text style={styles.detailMovie}>Release Date: {MovieByID.release_date}</Text>
                            <Text style={styles.detailMovie}>Duration: {MovieByID.runtime} Minutes</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <MaterialIcons name="star" size={18} color="yellow" style={{ marginRight: moderateScale(5) }} />
                                <Text style={styles.detailMovie}>{MovieByID.vote_average}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.componentContainer}>
                        <Text style={styles.judulKomponen}>Genres</Text>
                        <FlatList data={MovieByID.genres} keyExtractor={(item, index) => index} renderItem={Genre} horizontal={true} />
                    </View>
                    <View style={styles.componentContainer}>
                        <Text style={styles.judulKomponen}>Synopsis</Text>
                        <Text style={styles.sinopsis}>{MovieByID.overview}</Text>
                    </View>
                    <View style={styles.crewContainer}>
                        <Text style={styles.judulKomponen}>Actor/Artist</Text>
                        <FlatList data={cast.cast} keyExtractor={(item, index) => index} renderItem={CardActor} horizontal={true} />
                    </View>
                </View>
            )}
        </ScrollView>
    )
}

export default MovieDetail

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: "#191932"
    },
    topContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        zIndex: 1,
    },
    topButton: {
        backgroundColor: "rgba(57,57,78, 0.8)",
        marginTop: moderateScale(10),
        marginLeft: moderateScale(10),
        padding: moderateScale(5),
        borderRadius: moderateScale(20)
    },
    topButtonShare: {
        backgroundColor: "rgba(57,57,78, 0.8)",
        marginTop: moderateScale(10),
        marginLeft: moderateScale(10),
        marginRight: moderateScale(10),
        padding: moderateScale(5),
        borderRadius: moderateScale(20)
    },
    rightButton: {
        flexDirection: 'row'
    },
    banner: {
        height: moderateScale(200),
        width: "100%",
        borderRadius: moderateScale(5),
        marginTop: widthPercentageToDP(-12)
    },
    detailContainer: {
        backgroundColor: "rgba(57,57,78, 0.9)",
        flexDirection: 'row',
        padding: moderateScale(15),
        marginHorizontal: moderateScale(10),
        marginTop: widthPercentageToDP(-25),
        marginBottom: moderateScale(10),
        borderRadius: moderateScale(10),
    },
    imageDetail: {
        height: moderateScale(154),
        width: moderateScale(112),
        marginRight: moderateScale(10),
        borderRadius: moderateScale(10)
    },
    judulMovie: {
        fontWeight: "bold",
        color: "white",
        fontSize: moderateScale(16),
        paddingRight: moderateScale(10)
    },
    detailMovie: {
        color: "white",
        paddingRight: moderateScale(90)
    },
    judulKomponen: {
        fontWeight: "bold",
        color: "white",
    },
    componentContainer: {
        margin: moderateScale(10),
    },
    bgGenre: {
        flex: 1,
        flexDirection: "row",
        backgroundColor: "rgb(57,57,78)",
        justifyContent: "space-evenly",
        // width: moderateScale(100),
        marginVertical: moderateScale(10),
        marginRight: moderateScale(10),
        borderRadius: moderateScale(10)
    },
    textGenre: {
        flex: 1,
        color: "white",
        textAlign: 'center',
        padding: moderateScale(10),
    },
    sinopsis: {
        marginVertical: moderateScale(10),
        color: "white"
    },
    crewContainer: {
        margin: moderateScale(10),

    },
    containerActor: {
        marginVertical: moderateScale(10),
        marginRight: moderateScale(10),
    },
    imageActor: {
        height: moderateScale(160),
        width: moderateScale(116),
        borderRadius: moderateScale(5)
    },
    castName: {
        color: "white",
        fontSize: moderateScale(11)
    },
})