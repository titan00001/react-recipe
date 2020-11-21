import {combineReducers} from 'redux';

import CreatedRecipeReducer from './loginReducer';
import userInfoReducer from './counterReducer';


const rootReducer = combineReducers({
    userInfoReducer,
    CreatedRecipeReducer

})

export default rootReducer;