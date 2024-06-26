import AbstractModels from "../abstract/AbstractModels.js";


/**
 * Return position inside database
 * @version 0.0.1
 * @file back/express/core/models/PositionModel.js
 * @extends AbstractModels
 * @author Sonia Messaoudi<messaoudi.sonia89@gmail.com>
 */
export default class PositionModel extends AbstractModels {
    constructor() {
        super();
    }

    /**
     * Return all positions
     * @version 0.0.1
     * @author Sonia Messaoudi<messaoudi.sonia89@gmail.com>
     * @returns Promise<any>
     */
    readAllPosition() {
        return new Promise((resolve, reject) => {
            this.connexion.query(
                `SELECT * 
                FROM positions`,
                (err, result) => {
                    if (err) reject(err);
                    resolve(result);
                }
            )
        })
    }

    /**
     * Return one positions
     * @version 0.0.1
     * @author Sonia Messaoudi<messaoudi.sonia89@gmail.com>
     * @returns Promise<any>
     */
    readOnePosition(id) {
        return new Promise((resolve, reject) => {
            this.connexion.query(`
                SELECT *
                FROM positions
                WHERE positions.id = ?`,
                [id],
                (err, result) => {
                    if(err) reject(err)
                    resolve(result);
                }
            );
        });
    }

    /**
     * Create new positions
     * @version 0.0.1
     * @author Sonia Messaoudi<messaoudi.sonia89@gmail.com>
     * @returns Promise<any>
     */
    createNewPosition (position) {
        return new Promise((resolve, reject) => {
            this.connexion.query(
                `
                    INSERT INTO positions
                        (coord_x, coord_y)
                    VALUE(?, ?)
                `,
                [position.coord_x, position.coord_y ],
                (err, result) => {
                    if(err) reject(err)
                    resolve(result);
                }
            );
        });
    }

    /**
     * Update positions inside database
     * @version 0.0.1
     * @author Sonia Messaoudi<messaoudi.sonia89@gmail.com>
     * @returns Promise<any>
     */
    putPosition(position, id) {
        return new Promise((resolve, reject) => {
            this.connexion.query(
                `UPDATE positions SET coord_x=?, coord_y=? WHERE id = ?`,
                [
                    position.coord_x,
                    position.coord_y,
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
    patchPosition(position, id) {
        let sql = 'UPDATE positions ';
        let values = Object.values(position);
        for (const [key] of Object.entries(position)) {
            if(key !== Object.keys(position)[Object.keys(position).length - 1])
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

    /**
     * Delete positions inside database
     * @version 0.0.1
     * @author Sonia Messaoudi<messaoudi.sonia89@gmail.com>
     * @returns Promise<any>
     */
    deletePosition(id) {
        return new Promise((resolve, reject) => {
            this.connexion.query('DELETE FROM positions WHERE id=?', [id], (err, result) => {
                if(err) reject(err)
                resolve(result);
            })
        })
    }
}