

import { takeEvery, put, call } from 'redux-saga/effects';
import axios from 'axios';
import { PRODUCT_LIST, SEARCH_PRODUCT,EDIT_PRODUCT, SET_PRODUCT_LIST, DELETE_PRODUCT, SUBMIT } from './constants';

const API_URL = 'http://localhost:3000/Apartment';

function* getProducts() {
    try {
        const response = yield call(axios.get, API_URL);
        yield put({ type: SET_PRODUCT_LIST, data: response.data });
    } catch (error) {
        console.error('Error fetching products:', error);
    }
}

function* deleteProduct(action) {
        console.log(action.data)
    try {
        yield call(axios.delete, `${API_URL}/${action.data}`);
        yield call(getProducts); 
    } catch (error) {
        console.error('Error deleting product:', error);
    }
}


function* addProduct(action) {
    try {
        yield call(axios.post, API_URL, action.data);
        yield call(getProducts); // Refresh the product list after adding
    } catch (error) {
        console.error('Error adding product:', error);
    }
}


function* editProduct(action) {
    try {
        yield call(axios.put, `${API_URL}/${action.data.id}`, action.data);
        yield call(getProducts); // Refresh the product list after editing
    } catch (error) {
        console.error('Error editing product:', error);
    }
}

function* searchProducts(action) {
    try {
        const response = yield call(axios.get, `${API_URL}?price=${action.query}`);
        yield put({ type: SET_PRODUCT_LIST, data: response.data });
    } catch (error) {
        console.error('Error searching products:', error);
    }
}


function* productSaga() {
    yield takeEvery(PRODUCT_LIST, getProducts);
        yield takeEvery(DELETE_PRODUCT, deleteProduct);
        yield takeEvery(SUBMIT, addProduct);
        yield takeEvery(EDIT_PRODUCT, editProduct);
        yield takeEvery(SEARCH_PRODUCT, searchProducts);
}

export default productSaga;



