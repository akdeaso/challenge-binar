import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  RefreshControl,
  FlatList,
} from 'react-native';
import React, {useEffect} from 'react';
import {moderateScale, ms} from 'react-native-size-matters';
import {useDispatch, useSelector} from 'react-redux';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {getDataBook, getDetailBooksById} from './redux/action';
import Loading from '../../components/Loading';
import {setRefresh} from '../../store/globalAction';

const Home = () => {
  const {loading, refreshing} = useSelector(state => state.Global);
  const dispatch = useDispatch();
  const {dataBook = []} = useSelector(state => state.home);
  const {name} = useSelector(state => state.login);

  const getDataBooks = () => {
    dispatch(getDataBook()); // dispatch untuk fetching
  };

  const getBookById = item => {
    dispatch(getDetailBooksById(item.id));
  };

  useEffect(() => {
    getDataBooks();
  }, []);

  const onRefresh = () => {
    dispatch(setRefresh(true));
    getDataBooks();
    dispatch(setRefresh(false));
  };

  const rupiah = number => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(number);
  };

  const BookContainer = ({item}) => {
    const harga = rupiah(item.price);
    return (
      <View style={styles.containerBook}>
        <TouchableOpacity onPress={() => getBookById(item)}>
          <Image
            source={{uri: `${item.cover_image}`}}
            resizeMode="contain"
            style={styles.image1}
          />
          <View style={{marginTop: ms(5)}}>
            <Text style={styles.text} numberOfLines={2}>
              {item.title}
            </Text>
            <Text style={styles.text2}>{item.author}</Text>
            <Text style={styles.text2}>{item.publisher}</Text>
            <View style={styles.botDetail}>
              <Text style={styles.text3}>{harga}</Text>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={styles.text3}>{item.average_rating}/10</Text>
                <MaterialIcons name="star" size={ms(10)} color="yellow" />
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  const BookContainer2 = ({item}) => {
    const harga = rupiah(item.price);
    return (
      <View style={styles.containerBook2}>
        <TouchableOpacity onPress={() => getBookById(item)}>
          <Image
            source={{uri: `${item.cover_image}`}}
            // resizeMode="contain"
            style={styles.image1}
          />
          <View style={{marginTop: ms(5)}}>
            <Text style={styles.text} numberOfLines={2}>
              {item.title}
            </Text>
            <Text style={styles.text2}>{item.author}</Text>
            <Text style={styles.text2}>{item.publisher}</Text>
            <View style={styles.botDetail}>
              <Text style={styles.text3}>{harga}</Text>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={styles.text3}>{item.average_rating}/10</Text>
                <MaterialIcons name="star" size={ms(10)} color="yellow" />
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  const dataBookRecommended = dataBook
    .sort(function (a, b) {
      return b.average_rating - a.average_rating;
    })
    .slice(0, 6);

  if (loading) {
    return <Loading />;
  }

  return (
    <FlatList
      style={styles.main}
      refreshControl={
        <RefreshControl onRefresh={onRefresh} refreshing={refreshing} />
      }
      data={[]}
      ListFooterComponent={() => {
        return (
          <>
            <Text style={styles.mainTitle}>Popular Book</Text>
            <View>
              <FlatList
                data={dataBook.slice(0, 9)}
                keyExtractor={(item, index) => index}
                renderItem={BookContainer2}
                numColumns={3}
                showsVerticalScrollIndicator={false}
                scrollEnabled={false}
              />
            </View>
          </>
        );
      }}
      ListHeaderComponent={() => {
        return (
          <View>
            <Text style={styles.mainTitle}>Good Morning, {name}!</Text>
            <Text style={styles.mainTitle}>Recommended</Text>
            <View>
              <FlatList
                data={dataBookRecommended}
                keyExtractor={(item, index) => index}
                renderItem={BookContainer}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              />
            </View>
          </View>
        );
      }}
    />
  );
};

export default Home;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#191932',
  },
  mainTitle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: moderateScale(20),
    marginVertical: moderateScale(10),
    marginLeft: moderateScale(13),
    fontSize: moderateScale(13),
  },
  text: {
    color: 'white',
    width: moderateScale(110),
  },
  text2: {
    color: 'gray',
    fontSize: moderateScale(10),
  },
  text3: {
    color: 'white',
    fontSize: moderateScale(10),
  },
  botDetail: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  image1: {
    height: moderateScale(150),
    width: moderateScale(110),
    borderRadius: moderateScale(5),
  },
  image2: {
    height: moderateScale(100),
    width: moderateScale(100),
    borderRadius: moderateScale(5),
  },
  containerDetail: {
    // backgroundColor: "red",
    width: moderateScale(250),
    marginRight: moderateScale(13),
    justifyContent: 'space-between',
  },
  containerBook: {
    // flexDirection: 'row',
    marginLeft: moderateScale(13),
    marginBottom: ms(13),
    flexShrink: 1,
  },
  containerBook2: {
    flexDirection: 'row',
    marginLeft: moderateScale(13),
    marginBottom: ms(13),
  },
  judulMovie: {
    marginLeft: moderateScale(13),
    fontWeight: 'bold',
    color: 'white',
  },
  detailMovie: {
    marginLeft: moderateScale(13),
    color: 'white',
  },
  button: {
    width: moderateScale(100),
    justifyContent: 'flex-end',
    backgroundColor: '#E31212',
    borderRadius: moderateScale(10),
    marginLeft: moderateScale(13),
    padding: moderateScale(5),
  },
  buttonText: {
    flex: 1,
    color: 'white',
    textAlign: 'center',
  },
  spinnerTextStyle: {
    color: 'white',
  },
});

//listheadercomponent atau listfootercomponent
