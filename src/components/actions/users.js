
import { RECEIVE_USERS } from "../../utils/helper";

export function receiveUsers(users){
    return{
        type: RECEIVE_USERS,
        users,
    }
}