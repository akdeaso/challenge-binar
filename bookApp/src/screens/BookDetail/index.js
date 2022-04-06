import {
  StyleSheet,
  Text,
  View,
  Image,
  RefreshControl,
  ScrollView,
} from 'react-native';
import React, {useEffect} from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useDispatch, useSelector} from 'react-redux';
import Share from 'react-native-share';
import {getDetailBooksById} from '../Home/redux/action';
import PushNotification, {Importance} from 'react-native-push-notification';
import Loading from '../../components/Loading';
import NetInfo from '@react-native-community/netinfo';
import {ms} from 'react-native-size-matters';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {BaseUrl} from '../../helpers/api';
import NoConnection from '../../components/NoConnection';
import {setConnection, setRefresh} from '../../store/globalAction';

const BookDetail = ({navigation}) => {
  const {loading, refreshing, connection} = useSelector(state => state.Global);
  const {detailBook = []} = useSelector(state => state.home);
  const dispatch = useDispatch();

  const getDetailBook = () => {
    dispatch(getDetailBooksById()); // dispatch untuk fetching
    checkConnection();
  };

  useEffect(() => {
    getDetailBook();
  }, []);

  const onRefresh = () => {
    dispatch(setRefresh(true));
    getDetailBook();
    dispatch(setRefresh(false));
  };

  const checkConnection = () => {
    NetInfo.fetch().then(state => {
      console.log('Connection type', state.type);
      console.log('Is connected?', state.isConnected);

      dispatch(setConnection(state.isConnected));
      if (!state.isConnected) {
        navigate('NoConnection');
      }
    });
  };

  //Fungsi formatRupiah
  function formatRupiah(angka, prefix) {
    let number_string = angka.replace(/[^,\d]/g, '').toString(),
      split = number_string.split(','),
      sisa = split[0].length % 3,
      rupiah = split[0].substr(0, sisa),
      ribuan = split[0].substr(sisa).match(/\d{3}/gi);
    // tambahkan titik jika yang di input sudah menjadi angka ribuan
    if (ribuan) {
      separator = sisa ? '.' : '';
      rupiah += separator + ribuan.join('.');
    }
    rupiah = split[1] != undefined ? rupiah + ',' + split[1] : rupiah;
    return prefix == undefined ? rupiah : rupiah ? 'Rp. ' + rupiah : '';
  }

  const harga = formatRupiah(detailBook.price, 'rupiah');

  const shareFeature = async () => {
    const content = {
      message: `${detailBook.title}\n`,
      url: `${BaseUrl}/books/${detailBook.id}`,
    };
    await Share.open(content)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };

  PushNotification.configure({
    onNotification: function (notification) {
      console.log('NOTIFICATION', notification);
    },
    permissions: {
      alert: true,
      badge: true,
      sound: true,
    },
    popInitialNotification: true,
    requestPermissions: true,
    requestPermissions: Platform.OS === 'ios',
  });

  const sendNotif = (channel, title, message) => {
    PushNotification.localNotification({
      channelId: channel,
      title: title,
      message: message,
    });
  };

  const createChannel = channel => {
    PushNotification.createChannel(
      {
        channelId: channel,
        channelName: 'My channel',
        channelDescription: 'A channel to categorise your notifications',
        playSound: false,
        soundName: 'default',
        importance: Importance.HIGH,
        vibrate: true,
      },
      created => console.log(`createChannel returned '${created}'`),
    );
  };

  const tesPush = () => {
    createChannel('1');
    sendNotif('1', 'Notification', `You liked ${detailBook.title}`);
  };

  console.log(detailBook, 'ini detail book');

  if (loading) {
    return <Loading />;
  }

  // if (!connection) {
  //   return <NoConnection />;
  // }

  return (
    <ScrollView
      style={styles.mainContainer}
      refreshControl={
        <RefreshControl onRefresh={onRefresh} refreshing={refreshing} />
      }>
      <View style={styles.topContainer}>
        <TouchableOpacity
          style={styles.topButton}
          onPress={() => navigation.goBack()}>
          <MaterialIcons name="arrow-back" size={25} color="white" />
        </TouchableOpacity>
        <View style={styles.rightButton}>
          <TouchableOpacity style={styles.topButton} onPress={tesPush}>
            <MaterialIcons name="favorite-border" size={25} color="white" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.topButtonShare}
            onPress={shareFeature}>
            <MaterialIcons name="share" size={25} color="white" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.detailContainer}>
        <Image
          source={{uri: `${detailBook.cover_image}`}}
          resizeMode="contain"
          style={styles.imageDetail}
        />
        <View style={{flexShrink: 1}}>
          <Text style={styles.bookTitle}>{detailBook.title}</Text>
          <Text style={styles.text}>Authored by {detailBook.author}</Text>
          <Text style={styles.text}>Published by {detailBook.publisher}</Text>
        </View>
      </View>
      <View style={styles.midContainer}>
        <View style={{alignItems: 'center'}}>
          <Text style={styles.text}>Rating</Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={styles.text}>{detailBook.average_rating}</Text>
            <MaterialIcons name="star" size={ms(15)} color="yellow" />
          </View>
        </View>
        <View style={{alignItems: 'center'}}>
          <Text style={styles.text}>Total Sale</Text>
          <Text style={styles.text}>{detailBook.total_sale}</Text>
        </View>
        <View style={styles.buyButton}>
          <Text style={styles.text}>Buy {harga}</Text>
        </View>
      </View>
      <View style={styles.botContainer}>
        <Text style={styles.overview}>Overview</Text>
        <Text style={styles.text}>{detailBook.synopsis}</Text>
      </View>
    </ScrollView>
  );
};

export default BookDetail;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#191932',
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    zIndex: 1,
  },
  topButton: {
    backgroundColor: 'rgba(57,57,78, 0.8)',
    marginTop: ms(10),
    marginLeft: ms(10),
    padding: ms(5),
    borderRadius: ms(20),
  },
  topButtonShare: {
    backgroundColor: 'rgba(57,57,78, 0.8)',
    marginTop: ms(10),
    marginLeft: ms(10),
    marginRight: ms(10),
    padding: ms(5),
    borderRadius: ms(20),
  },
  rightButton: {
    flexDirection: 'row',
  },
  imageDetail: {
    height: ms(154),
    width: ms(112),
    marginRight: ms(10),
    borderRadius: ms(10),
  },
  detailContainer: {
    marginTop: ms(10),
    padding: ms(10),
    backgroundColor: 'rgba(57,57,78, 0.8)',
    flexDirection: 'row',
    marginHorizontal: ms(10),
    borderRadius: ms(10),
  },
  bookTitle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: ms(20),
  },
  text: {
    color: 'white',
  },
  midContainer: {
    backgroundColor: 'rgba(57,57,78, 0.8)',
    flexDirection: 'row',
    marginTop: ms(20),
    padding: ms(10),
    justifyContent: 'space-between',
    marginHorizontal: ms(10),
    borderRadius: ms(10),
  },
  buyButton: {
    backgroundColor: '#E31212',
    padding: ms(8),
    borderRadius: ms(10),
  },
  botContainer: {
    backgroundColor: 'rgba(57,57,78, 0.8)',
    marginTop: ms(20),
    marginBottom: ms(10),
    padding: ms(10),
    marginHorizontal: ms(10),
    borderRadius: ms(10),
  },
  overview: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: ms(15),
    marginBottom: ms(10),
  },
});
