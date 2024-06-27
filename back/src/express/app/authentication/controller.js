import { userCreated, userFindByEmail } from "../../core/services/UserServices.js";
import { bcryptUtils, jsonWebToken } from "../../core/utils/index.js";

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

            bcryptUtils.verifyPassword(req.body.password, user[0].password)
                .then(result => {
                    if (!result) 
                        res.status(401).send(JSON.stringify({
                            message: 'Unauthorized: Wrong password',
                            status: res.statusCode
                        }));
                    res.status(200).json({
                        message: "ok", 
                        token: jsonWebToken.createToken({userId: user[0].id, isAdmin: user[0].is_admin}),
                        status: res.statusCode
                    });
                })
                .catch(err => 
                    res.status(500).send(JSON.stringify({
                        message: 'Internal Server Error: ' + err.message,
                        status: res.statusCode
                    }))
                );
            })
        .catch(() =>  
            res.status(401).send(JSON.stringify({
                message: 'Unauthorized: Email unrecognized',
                status: res.statusCode
            }))
        );
 };
