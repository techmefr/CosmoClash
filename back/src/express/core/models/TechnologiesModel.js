import AbstractModels from "../abstract/AbstractModels.js";

export default class technologiesModel extends AbstractModels {
    constructor() {
        super();
    }
    readAllTechnologies() {
        return new Promise((resolve, reject) => {
            this.connexion.query(
                `SELECT * FROM Technologies `,
                (err, result) => {
                    if (err) reject(err);
                    resolve(result);
                }
            )
        })
    }
    readOneTechnologie(id) {
        return new Promise((resolve, reject) => {
            this.connexion.query(`
                SELECT Technologies.name 
                FROM Technologies 
                WHERE Technologies.id = ?`,
                [id],
                (err, result) => {
                    if(err) reject(err)
                    resolve(result);
                }
            );
        });
    }
    createNewTechnologies (technology) {
        return new Promise((resolve, reject) => {
            this.connexion.query(
                `INSERT INTO Technologies
                        (name, energy_cost, money_cost, material_cost, speed_benefit, attack_benefit, defense_benefit)
                    VALUE(?, ?, ?, ?, ?, ?, ?)
                `,
                [
                    technology.name,
                    parseInt(technology.energy_cost),
                    parseInt(technology.money_cost),
                    parseInt(technology.material_cost),
                    parseInt(technology.speed_benefit),
                    parseInt(technology.attack_benefit),
                    parseInt(technology.defense_benefit)
                ],
                (err, result) => {
                    if(err) reject(err)
                    resolve(result);
                }
            );
        });
    }
    putTechnologies(Technologie, id) {
        return new Promise((resolve, reject) => {
            this.connexion.query(
                `UPDATE Technologies SET name=? WHERE id = ?`,
                [
                    Technologie.name,
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

    patchTechnologies(Technologie, id) {
        let sql = 'UPDATE Technologies ';
        let values = Object.values(Technologie);
        for (const [key] of Object.entries(Technologie)) {
            if(key !== Object.keys(Technologie)[Object.keys(Technologie).length - 1])
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
   
    deleteTechnologie(id) {
        return new Promise((resolve, reject) => {
            this.connexion.query('DELETE FROM Technologies WHERE id=?', [id], (err, result) => {
                if(err) reject(err)
                resolve(result);
            })
        })
    }
}