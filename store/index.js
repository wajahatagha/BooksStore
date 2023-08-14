import {  applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import booksReducer from '../reducers/booksReducer';
import { legacy_createStore as createStore} from 'redux'

const rootReducer = combineReducers({
  books: booksReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
