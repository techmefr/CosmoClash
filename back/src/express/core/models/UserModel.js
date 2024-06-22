import AbstractModels from "../abstract/AbstractModels.js";

export default class UserModel extends AbstractModels {
    constructor() {
        super();
    }
    readAllUsers() {
        return new Promise((resolve, reject) => {
            this.connexion.query(`SELECT * FROM users`,
                (err, result) => {
                    if(err) reject(err)
                    resolve(result);
                }
            );
        });
    }
    readOneUsersByIdOrEmail(value) {
        let sql = 'SELECT * FROM users';
        sql += new RegExp(/[0-9]/).test(value)
            ? ' WHERE id = ?'
            : ' WHERE email = ?';
        return new Promise((resolve, reject) => {
            this.connexion.query(sql, value, (err, result) => {
                if(err) reject(err)
                resolve(result);
            });
        });
    }
    createNewUser (user) {
        return new Promise((resolve, reject) => {
            this.connexion.query(
                `
                    INSERT INTO users(username, is_admin, email, password)
                    VALUES(?, ?, ?, ?)
                `,
                [
                    user.username,
                    user.isAdmin ? user.isAdmin : 0,
                    user.email,
                    user.password
                ],
                (err, result) => {
                    if(err) reject(err)
                    resolve(result);
                }
            );
        });
    }
    patchUsers(user, id) {
        let sql = 'UPDATE users ';
        let values = Object.values(user);
        for (const [key] of Object.entries(user)) {
            if(key !== Object.keys(user)[Object.keys(user).length - 1])
                sql += ` SET ${ key.toString() } = ?, `;
            else
                sql+= `SET ${ key.toString()} = ? `;
        }
        sql += 'WHERE id = ?';
        return new Promise((resolve, reject) => {
            this.connexion.query(sql, [...values, id], (err, result) => {
                if(err) {
                    reject(err);
                }
                resolve(result);
            })
        })
    }
    putUsers(user, id) {
        return new Promise((resolve, reject) => {
            this.connexion.query(`
            UPDATE users
            SET username=?, 
                is_admin=?,
                email=?,
                password=?,
                alliance_id=?
            WHERE id = ?
        `, [
                user.username,
                user.isAdmin,
                user.email,
                user.password,
                user.alliance_id,
                id
            ], (err, result) => {
                if(err) {
                    reject(err);
                }
                resolve(result);
            })
        });
    }
    deleteUsers(id) {
        return new Promise((resolve, reject) => {
            this.connexion.query('DELETE FROM users WHERE id=?', [id], (err, result) => {
                if(err) reject(err)
                resolve(result);
            })
        })
    }
}