'use strict';
import { users, getUser} from '../models/userModel';

const user_post = (req, res) => {
    /*const userName = req.params.name;
    const userEmail= req.params.email;
    const userPasswd = req.params.passwd;
    const user = getUser(userName);
    res.json(user.length > 0 ? user.pop() : {"message":"no result"});*/
    console.log(req.body)
    res.json(req.body)
}

const user_get = (req, res) => {
    const userID = req.param.id;
    const user = getUser(userID);
    res.json(user.length > 0 ? user.pop() : {"message":"no result"});
}

export {user_post, user_get};