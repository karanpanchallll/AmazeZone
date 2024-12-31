import {getProductsreducer} from "./Productreducer.js";
import {combineReducers} from "redux";

const rootreducers = combineReducers({
    getProductsdata: getProductsreducer, // The key matches useSelector
});
export default rootreducers
