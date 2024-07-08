import AbstractModels from "../abstract/AbstractModels.js";

export default class PlanetTypeModel extends AbstractModels {
    constructor() {
        super();
    }
    getAllPlanetTypes() {
        return new Promise((resolve, reject) => {
            this.connexion.query('SELECT * FROM planet_type', (err, result) => {
                if(err) reject(err);
                resolve(result);
            })
        })
    }
    readOnePlanetType(id) {
        return new Promise((resolve, reject) => {
            this.connexion.query('SELECT * FROM planet_type WHERE id=?', [id], (err, result) => {
                if(err) reject(err);
                resolve(result[0]);
            })
        })
    }
    patchPlanetType(planetType, id) {
        let sql = 'UPDATE planet_type ';
        let values = Object.values(planetType);
        for (const [key] of Object.entries(planetType)) {
            if(key !== Object.keys(planetType)[Object.keys(planetType).length - 1])
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
    putPlanetType(planetType, id) {
        return new Promise((resolve, reject) => {
            this.connexion.query(
                `UPDATE planet_type SET type=? WHERE id = ?`,
                [
                    planetType.type,
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
    deleteOnePlanetType(id) {
        return new Promise((resolve, reject) => {
            this.connexion.query('DELETE FROM planet_type WHERE id=?', [id], (err, results) => {
                if(err) reject(err);
                resolve(results);
            })
        })
    }
}