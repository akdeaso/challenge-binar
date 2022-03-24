import { StyleSheet, Text, View } from 'react-native'

const ListMobil = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: "white",
        marginHorizontal: 16,
        marginVertical: 8,
        borderRadius: 4,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 1,

    },
    list: {
        padding: 16,
        margin: 8
    },
    gambar: {
        marginTop: 24,
        marginLeft: 16,
        marginBottom: 50,
    },
    subContainer: {
        flex: 1,
        flexDirection: 'column'
    },
    subContainer2: {
        justifyContent: 'flex-start',
        flexDirection: 'row',
    },
    miniIcon: {
        fontSize: 12,
        padding: 4,
        marginLeft: 14
    }
})

export default ListMobil
