import {_getUsers, _getTweets
} from './_DATA'; 

export function getInitialData(){
    return Promise.all([
        _getUsers(),
        _getTweets(),
    ]).then(([users, tweets])=>({
        users,
        tweets,
    }))
}