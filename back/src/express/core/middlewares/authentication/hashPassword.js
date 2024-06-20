import bcrypt from 'bcrypt';

export const hashPassword = (req, res, next) => {
    if(req.method === 'POST' && req.body.email !== undefined && req.body.password !== undefined)
    {
        bcrypt.genSalt(10, function(err, salt) {
            bcrypt.hash(req.body.password, salt, function(err, hash) {
                req.body.password = hash;
                return next();
            });
        });
    } else {
        res.status(400).send(JSON.stringify({message: 'BAD REQUEST', status: res.statusCode}));
    }
}