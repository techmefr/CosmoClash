export const verifyBearerToken = (req, res, next) => {
    if(
        req.headers.authorization !== undefined &&
        req.headers.authorization.startsWith('Bearer')
    ) {
        return next();
    }
    res.status(401).send(JSON.stringify({
        message: 'Unauthorized: You haven\'t authorization',
        status: res.statusCode
    }));
}