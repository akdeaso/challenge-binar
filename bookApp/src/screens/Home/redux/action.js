import axios from 'axios';
import { BaseUrl } from '../../../helpers/api';
import { navigate } from '../../../helpers/navigate';
import { setLoading } from '../../../store/globalAction';
import { store } from '../../../store';

const token = store.getState().login.token
axios.defaults.headers.Authorization = `Bearer ${token}`;

export const getDataBook = () => async dispatch => {
    try {
        dispatch(setLoading(true));
        const res = await axios.get(`${BaseUrl}/books`);
        console.log(res);
        if (res.status === 200 || 201) {
            console.log(res.data.results, "ini data book")
            return dispatch(setDataBook(res.data.results));
        }
    } catch (error) {
        console.log(error);
    } finally {
        dispatch(setLoading(false));
    }
};

export const setDataBook = dataBook => {
    return {
        type: 'SET_DATA_BOOK',
        payload: dataBook,
    };
};

// action get byId
export const getDetailBooksById = id => async dispatch => {
    try {
        dispatch(setLoading(true));
        const res = await axios.get(`${BaseUrl}/books/${id}`);
        if (res.status === 200 || 201) {
            console.log(res.data, "ini detail book")
            dispatch(setDetailBookToReducer(res.data));
            navigate('BookDetail');
        }
    } catch (error) {
        console.log(error);
    } finally {
        dispatch(setLoading(false));
    }
};

const setDetailBookToReducer = detailBook => {
    return {
        type: 'DETAIL_BOOK',
        payload: detailBook,
    };
};