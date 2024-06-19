import {userCreated} from "../../core/services/UserServices.js";

export const register = (req, res) => {
    console.log(req.body);
    userCreated(req.body).then((data) => {
        res.status(201).send(JSON.stringify({message: 'Created', status: res.statusCode}))
    }).catch(err => {
        res.status(422).send(JSON.stringify({message: 'Unprocessable Entity', status: res.statusCode}));
    });
}