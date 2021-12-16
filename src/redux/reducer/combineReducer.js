import { combineReducers } from "redux";

import language from './languageReducer';
import  increament  from './increamentReducer';
import carts from './cardReducer';

export default combineReducers({
    increament,
    language,
    carts
})