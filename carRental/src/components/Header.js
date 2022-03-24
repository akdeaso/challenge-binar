import { StyleSheet, Dimensions } from 'react-native'

// const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Header = StyleSheet.create({
    bg: {
        position: 'absolute',
        height: 150,
        width: '100%',
        backgroundColor: '#D3D9FD',
    },
    avatar: {
        width: 28,
        height: 28,
        marginRight: 16
    },
    parent: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    container: {
        flexDirection: 'row',
        backgroundColor: "#091B6F",
        paddingTop: 24,
        paddingLeft: 8,
        paddingRight: 0,
        marginHorizontal: 16,
        borderRadius: 8,
        marginTop: windowHeight * (15 / 640)
    },
    bgmobil: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
    },
    mobil: {
        position: 'absolute',
        left: 0,
        // right: 0,
        bottom: 0,
    }
})

export default Header

const styles = StyleSheet.create({})