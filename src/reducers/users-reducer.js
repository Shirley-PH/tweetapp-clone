
import { RECEIVE_USERS } from "../utils/helper";

//HERE we can see how SWITCH works in our state. Anytime action.type = RECEIVE_USERS will return spread array with
//action users. The fisrt spread (...) help to save the beginning information our data
export default function usersReducer(state={}, action){
    switch(action.type){
        case RECEIVE_USERS:
            return{
            ...state,
            ...action.users
            }
            default:
               return state
    }

}