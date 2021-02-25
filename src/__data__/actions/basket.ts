import axios from 'axios';
import { getConfigValue } from '@ijl/cli';
import * as types from '../action-types';

const submitActionCreator = () => ({ type: types.BASKET.REQUEST });
const successActionCreator = (items) => ({
    type: types.BASKET.SUCCESS,
    payload: items,
});
const errorActionCreator = (error) => ({
    type: types.BASKET.FAILURE,
    payload: error,
});

export const addProduct = (goods) => async (dispatch) => {
    const baseApiUrl = getConfigValue('repos.api');

    dispatch(submitActionCreator());
    try {
        const response = await axios.post(`${baseApiUrl}/addProduct`, {
            goods,
        });
        console.log(response);
        dispatch(successActionCreator(response.data.basket));
    } catch (error) {
        dispatch(errorActionCreator('Неизвестная ошибка'));
    }
};

export const getBasket = () => async (dispatch) => {
    const baseApiUrl = getConfigValue('repos.api');

    dispatch(submitActionCreator());
    try {
        const response = await axios.get(`${baseApiUrl}/getBasket`);
        console.log(response);
        dispatch(successActionCreator(response.data.basket));
    } catch (error) {
        dispatch(errorActionCreator('Неизвестная ошибка'));
    }
};
