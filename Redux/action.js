import { PRODUCT_LIST, SEARCH_PRODUCT, BOOK,SUBMIT,DELETE_PRODUCT, REMOVE } from "./constants";

export const productList = () => {
  return {
    type: PRODUCT_LIST,
  };
};


export const book = (data) => {
  return {
    type: BOOK,
    data,
    
  };
};

export const submit = (data) => {
  return {
    type: SUBMIT,
    data,
    
  };
};

export const removeCart = (data) => {
  return {
    type: REMOVE,
    data,
  };
};


export const removeItem = (data) => {
  return {
    type: DELETE_PRODUCT,
    data,
  };
};


export const productSearch = (query) => {
  return {
    
    type: SEARCH_PRODUCT,
    query,
  };
};