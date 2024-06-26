import { jsonWebToken } from "../../utils/index.js";
import { userFindById } from "../../services/UserServices.js";

export const verifyJwtToken = (req, res, next) => {
    let token = req.headers.authorization.split(' ')[1];
    jsonWebToken.getToken(token).then(decoded => {
        userFindById(decoded.userId)
            .then(data => {
                next();
            }).catch(err =>
            res.status(401).json({message: err.message, status: res.statusCode})
        )
    }).catch(err => console.log(err));
}