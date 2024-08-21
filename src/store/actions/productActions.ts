import { Dispatch } from 'redux';
import { instance as axios } from '../../services/api';
import { ProductActionTypes, ProductAction, Product } from '../types';

export const fetchProducts = () => async (dispatch: Dispatch<ProductAction>) => {
    try {
        dispatch({ type: ProductActionTypes.FETCH_PRODUCTS_REQUEST });

        const { data } = await axios.get<Product[]>('/api/products');
        
        dispatch({
            type: ProductActionTypes.FETCH_PRODUCTS_SUCCESS,
            payload: data
        });
    } catch (error) {
        // error를 Error 타입으로 안전하게 처리
        const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
        dispatch({
            type: ProductActionTypes.FETCH_PRODUCTS_FAILURE,
            payload: errorMessage,
        });
    }
};
