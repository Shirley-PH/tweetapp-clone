import { SET_AUTHED_USER } from "../../utils/helper";

export function setAuthed(id){
    return{
        type: SET_AUTHED_USER,
        id, 
    }

}