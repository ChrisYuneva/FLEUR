import axios from 'axios';
import { getConfigValue } from '@ijl/cli';
import * as types from '../action-types';

const submitActionCreator = () => ({ type: types.GOODS.REQUEST });
const successActionCreator = (type, items) => ({
    type,
    payload: items,
});
const errorActionCreator = (error) => ({
    type: types.GOODS.FAILURE,
    payload: error,
});

export const getProducts = (gender, type) => async (dispatch) => {
    const baseApiUrl = getConfigValue('repos.api');

    const params = {
        gender,
        type,
    };

    dispatch(submitActionCreator());
    try {
        const response = await axios.get(`${baseApiUrl}/getProducts`, {
            params,
        });
        dispatch(successActionCreator(types.GOODS.SUCCESS, response.data.data));
    } catch (error) {
        dispatch(errorActionCreator('Неизвестная ошибка'));
    }
};

export const setGender = (gender) => async (dispatch) => {
    dispatch(successActionCreator(types.GOODS.SET_GENDER, gender));
};

export const setType = (type) => async (dispatch) => {
    dispatch(successActionCreator(types.GOODS.SET_TYPE, type));
};
