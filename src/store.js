
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { cartReducer } from './reducers/cartReducers';
//import Cookie from 'js-cookie';

import {
  productDetailsReducer,
  productListReducer,
  productSaveReducer

} from './reducers/productReducers';
import { userRegisterReducer, userSigninReducer } from './reducers/userReducers';

//const cartItems = Cookie.getJSON("cartItems") || [];
//cart: {}
//const userInfo = Cookie.getJSON('userInfo') || null;
const initialState = { 
 // userSignin: { userInfo },
 cart:{shipping:{},payment:{} }
};
const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
  userSignin: userSigninReducer,
  userRegister: userRegisterReducer,
  productSave : productSaveReducer
  
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);
export default store;