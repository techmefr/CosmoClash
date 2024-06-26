import AbstractModels from "../abstract/AbstractModels.js";

export default class ShipsModel extends AbstractModels {
    constructor() {
        super();
    }
    readAllShip() {
        return new Promise((resolve, reject) => {
            this.connexion.query(
                `SELECT * FROM ships `,
                (err, result) => {
                    if (err) reject(err);
                    resolve(result);
                }
            )
        })
    }
    readOneShips(id) {
        return new Promise((resolve, reject) => {
            this.connexion.query(`
                SELECT 
                    ships.name,
                FROM ships 
                WHERE ships.id = ?`,
                [id],
                (err, result) => {
                    if(err) reject(err)
                    resolve(result);
                }
            );
        });
    }
    createNewShip (ships) {
        return new Promise((resolve, reject) => {
            this.connexion.query(
                `
                    INSERT INTO ships
                        (name)
                    VALUE(?)
                `,
                [ships.name],
                (err, result) => {
                    if(err) reject(err)
                    resolve(result);
                }
            );
        });
    }
    putShips(ship, id) {
        return new Promise((resolve, reject) => {
            this.connexion.query(
                `UPDATE ships SET name=? WHERE id = ?`,
                [
                    ship.name,
                    id
                ],
                (err, result) => {
                    if(err) {
                        reject(err);
                    }
                    resolve(result);
                })
        });
    }

    patchShips(ship, id) {
        let sql = 'UPDATE ships ';
        let values = Object.values(ship);
        for (const [key] of Object.entries(ship)) {
            if(key !== Object.keys(ship)[Object.keys(ship).length - 1])
                sql += ` SET ${ key.toString() } = ?, `;
            else
                sql+= `${ key.toString()} = ? `;
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
   
    deleteShips(id) {
        return new Promise((resolve, reject) => {
            this.connexion.query('DELETE FROM ships WHERE id=?', [id], (err, result) => {
                if(err) reject(err)
                resolve(result);
            })
        })
    }
}