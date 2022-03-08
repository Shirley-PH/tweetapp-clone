import { SET_AUTHED_USER } from "../utils/helper";

//we may initilizet state = null because at beninning we don't who is the user it has to be indentifive first 

export default function autheUserReducer(state=null, action){
        switch(action.type){
            case SET_AUTHED_USER:
                return{
                ...state,
                ...action.id
                }
                default:
                   return state
        }
    
    
}