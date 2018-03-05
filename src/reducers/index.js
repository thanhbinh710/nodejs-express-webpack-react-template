import { combineReducers } from "redux";
import { reducer as formReducer } from 'redux-form';
import tokenReducer from "./reducer_token";
import booksReducer from "./reducer_books";
import activeBook from "./reducer_active_book";

const rootReducer = combineReducers({
	form: formReducer,
	token: tokenReducer,
  	books: booksReducer,
  	activeBook: activeBook
});

export default rootReducer;
