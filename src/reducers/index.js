import autheUserReducer from "./authedUser-reducer";
import tweetReducer from "./tweets-reducer";
import usersReducer from "./users-reducer";
import {combineReducers} from 'redux'; 

export default combineReducers({
    autheUserReducer,
    tweetReducer,
    usersReducer,
})