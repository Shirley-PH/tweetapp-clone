import { RECEIVE_TWEETS } from "../../utils/helper";

export function receiveTweets(tweets){
    return{
        type: RECEIVE_TWEETS,
        tweets,
    }
}