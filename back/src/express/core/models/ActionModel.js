import AbstractModels from "../abstract/AbstractModels.js";

export default class ActionModel extends AbstractModels {
    constructor() {
        super();
    }
    readAllActions() {
        return new Promise((resolve, reject) => {
            this.connexion.query('SELECT * FROM actions', (err, result) => {
                if(err) reject(err);
                resolve(result);
            });
        });
    }
    readOneActions(id) {
        return new Promise((resolve, reject) => {
            this.connexion.query('SELECT * FROM actions WHERE id = ?', [id], (err, result) => {
                if(err) reject(err)
                resolve(result);
            });
        });
    }
    createNewActions (action) {
        return new Promise((resolve, reject) => {
            this.connexion.query(
                `
                    INSERT INTO actions
                        (name, begin, end, result, resources_win, resources_lose, ship_lose, money_win, money_lose, history)
                    VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
                `,
                [
                    action.name,
                    action.begin,
                    action.end,
                    action.result,
                    action.resources_win,
                    action.resources_lose,
                    action.ship_lose,
                    action.money_win,
                    action.money_lose,
                    action.history
                ],
                (err, result) => {
                    if(err) reject(err)
                    resolve(result);
                }
            );
        });
    }
    patchActions(action, id) {
        let sql = 'UPDATE actions ';
        let values = Object.values(action);
        for (const [key] of Object.entries(action)) {
            if(key !== Object.keys(action)[Object.keys(action).length - 1])
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
    putActions(action, id) {
        return new Promise((resolve, reject) => {
            this.connexion.query(`
            UPDATE actions
            SET name=?, 
                begin=?,
                result=?,
                resources_win=?,
                resources_lose=?,
                ship_lose=?,
                money_win=?,
                money_lose=?
            WHERE id = ?
        `, [
                action.name,
                action.begin,
                action.result,
                action.resources_win,
                action.resources_lose,
                action.ship_lose,
                action.money_win,
                action.money_lose,
                id
            ], (err, result) => {
                if(err) {
                    reject(err);
                }
                resolve(result);
            })
        });
    }
    deleteActions(id) {
        return new Promise((resolve, reject) => {
            this.connexion.query('DELETE FROM actions WHERE id=?', [id], (err, result) => {
                if(err) reject(err)
                resolve(result);
            })
        })
    }
}