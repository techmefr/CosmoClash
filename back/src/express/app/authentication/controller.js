import jwt from "jsonwebtoken";
import {userCreated, userFindByEmail} from "../../core/services/UserServices.js";
import bcrypt from "bcrypt";

export const register = (req, res) => {
    console.log(req.body);
    userCreated(req.body).then(() => {
        res.status(201).send(JSON.stringify({message: 'Created', status: res.statusCode}))
    }).catch(err => {
        res.status(500).send(JSON.stringify({message: 'Internal Server Error: ' + err.message, status: res.statusCode}));
    });
}


export const login = (req, res) => {

    userFindByEmail(req.body.email)
        .then(user => {
            if (!user) {
                return res.status(401).json({ message: 'Paire login/mot de passe incorrecte', status: res.statusCode});
            }
            bcrypt.compare(req.body.password, user[0].password, (err, result) => {
                if(err)
                    res.status(500).send(JSON.stringify({message: 'Internal Server Error: ' + err.message, status: res.statusCode}));
                if (result) {
                    let token = jwt.sign({userId: user.id}, "shhhh", {expiresIn: "1h"});
                    res.status(200).json({message: "ok", token: token, status: res.statusCode});
                } 
            })
        })
        .catch(error => res.status(500).json({ error }));
 };
