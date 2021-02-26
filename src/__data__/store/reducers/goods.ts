import * as types from '../../action-types';

export type GoodsState = {
    goodsItems: [];
    loading: boolean;
    gender: string;
    type: string;
    title: string;
};

const initialState: GoodsState = {
    goodsItems: [],
    loading: false,
    gender: null,
    type: null,
    title: null,
};

const handleSubmit = (state, action) => ({ ...state, loading: true });
const handleSuccess = (state, action) => ({
    ...state,
    loading: false,
    goodsItems: action.payload,
});
const handleFailure = (state, action) => ({ ...state, loading: false });

const handleSetGender = (state, action) => ({
    ...state,
    gender: action.payload,
});

const handleSetType = (state, action) => ({ ...state, type: action.payload });

export default function (state = initialState, action) {
    switch (action.type) {
        case types.GOODS.REQUEST:
            return handleSubmit(state, action);
        case types.GOODS.SUCCESS:
            return handleSuccess(state, action);
        case types.GOODS.FAILURE:
            return handleFailure(state, action);
        case types.GOODS.SET_GENDER:
            return handleSetGender(state, action);
        case types.GOODS.SET_TYPE:
            return handleSetType(state, action);
        default:
            return state;
    }
}
