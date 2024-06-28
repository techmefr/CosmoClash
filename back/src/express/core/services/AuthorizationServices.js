import { jsonWebToken } from "../utils/index.js";
import roadResources from "../constants/resources/index.js";

const isAdminVerification = req => {
    let isAdmin = false;
    jsonWebToken.getToken(req.headers.authorization.split(' ')[1])
        .then(decoded => {
            if (isAdmin !== decoded.isAdmin)
                isAdmin = decoded.isAdmin
        })
        .catch(err => res.status(401).json({message: 'You have bad token', status: res.statusCode}));
    return isAdmin;
}
const getRoadFinded = req =>
    roadResources.find(resource => resource.url === '/' + req.url.split('/api')[0].split('/')[1]);

export const authorizationServices = req =>
    (
        (isAdminVerification(req) && getRoadFinded(req).adminRoadTypeAccess.includes(req.method)) ||
        (!isAdminVerification(req) && getRoadFinded(req).userRoadTypeAccess.includes(req.method))
    );