import { authorizationServices } from "../../services/AuthorizationServices.js";

export const authorizationRoad = (req, res, next) => {
    if(authorizationServices(req)) {
        next();
    } else {
        res.status(401).json({message: 'You are not authorized to access this resource.', status: res.statusCode});
    }
};