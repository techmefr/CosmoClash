export const setHeader = (req, res, next) => {
    res.setHeader('Content-type', 'application/json');
    next();
}