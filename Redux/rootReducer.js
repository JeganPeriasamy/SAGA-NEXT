import { combineReducers } from "redux";
import { productData } from "./reducer";
import { cartData } from "./cartreducer";
import { userData } from "./usereducer";

export default combineReducers({
    productData,
    cartData,
    userData
})