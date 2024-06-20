import bcrypt from "bcrypt";

const bcryptUtils = {
    verifyPassword: (pwd, dbPwd) => {
        return new Promise((resolve, reject) => {
            bcrypt.compare(pwd, dbPwd, (err, result) => {
                if(err) reject(err)
                resolve(result);
            });
        });
    },
    createPasword: pwd => {
        return new Promise((resolve, reject) => {
            bcrypt.genSalt(10, function(err, salt) {
                if (err) console.error(err);
                bcrypt.hash(pwd, salt, function(err, hash) {
                    if (err) reject(err)
                    resolve(hash);
                });
            });
        });
    }
};

export default bcryptUtils;