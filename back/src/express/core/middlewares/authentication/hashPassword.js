import { bcryptUtils } from "../../utils/index.js";

export const hashPassword = (req, res, next) => {
    if(req.method === 'POST' && req.body.email !== undefined && req.body.password !== undefined)
    {
        bcryptUtils.createPasword(req.body.password)
            .then(hash => {
                req.body.password = hash;
                return next();
            })
            .catch(err => console.error(err));
    } else {
        res.status(400).send(JSON.stringify({message: 'BAD REQUEST', status: res.statusCode}));
    }
}