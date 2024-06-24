import jwt from "jsonwebtoken";

const jsonWebToken = {
    createToken: payload => jwt.sign(payload, "shhhh", {expiresIn: "1h"}),
    getToken: token => {
        return new Promise((resolve, reject) => {
            jwt.verify(token, "shhhh", (err, decoded) => {
                if(err) reject(err);
                resolve(decoded);
            });
        });
    }
}

export default jsonWebToken;