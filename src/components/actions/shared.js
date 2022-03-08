import { getInitialData } from "../../utils/api";
import { receiveUsers} from "./users";
import { receiveTweets } from "./tweets";
import { setAuthed } from "./authedUser";

const AUTHED_ID= 'tylermcginnis';
//Estamos conectando la API con el PROMISE y estamos volviendo a llamar a esoas mismas funciones
export function handleInitialData(){
    return (dispatch) => {
        return getInitialData().then(({users, tweets})=>{
            //actualizacion de la data através de dispatch
                dispatch(receiveUsers(users));
                dispatch(receiveTweets(tweets));
                dispatch(setAuthed(AUTHED_ID));
        })
    }
}