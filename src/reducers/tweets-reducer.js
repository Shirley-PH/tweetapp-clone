import { RECEIVE_TWEETS } from "../utils/helper";

export default function tweetReducer(state={}, action){
    
        switch(action.type){
            case RECEIVE_TWEETS:
                return{
                ...state,
                ...action.tweets
                }
                default:
                   return state
        }
    
    
}