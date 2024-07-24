import { BOOK, REMOVE } from "./constants";

export const cartData = (data = [], action) => {
  switch (action.type) {
    case BOOK:
      console.log(action.data)
      return [action.data, ...data];
    case REMOVE:
      // data.length= data.length? data.length-1:[]
      const remainingItems = data.filter((item) => item.id !== action.data);
      console.log(remainingItems)
      return [...remainingItems];

    default:
      return data;
  }
};
