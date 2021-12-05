/* we will have multiple reducers and all sucj reducers will be
combined into index.js file */

import { combineReducers } from "redux";
import { productReducer } from "./productReducer";

const reducers = combineReducers({
  allProducts: productReducer,
});
