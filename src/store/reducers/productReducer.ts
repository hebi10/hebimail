import { ProductState, ProductActionTypes, ProductAction } from '../types';

const initialState: ProductState = {
    loading: false,
    items: [],  // products를 items로 변경
    error: null,
};

export const productReducer = (state = initialState, action: ProductAction): ProductState => {
    switch (action.type) {
        case ProductActionTypes.FETCH_PRODUCTS_REQUEST:
            return { ...state, loading: true };
        case ProductActionTypes.FETCH_PRODUCTS_SUCCESS:
            return { ...state, loading: false, items: action.payload };  // products를 items로 변경
        case ProductActionTypes.FETCH_PRODUCTS_FAILURE:
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};
