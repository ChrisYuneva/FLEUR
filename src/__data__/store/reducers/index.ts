import { combineReducers } from 'redux';
import goodsReducer, { GoodsState } from './goods';
import basketReducer, { BasketState } from './basket';

export type AppStore = {
    goods: GoodsState;
    basket: BasketState;
};

export default combineReducers<AppStore>({
    goods: goodsReducer,
    basket: basketReducer,
});
