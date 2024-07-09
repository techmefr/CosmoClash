import AbstractModels from "../abstract/AbstractModels.js";

export default class PlanetModel extends AbstractModels {
    constructor() {
        super();
    }
    readAllPlanet() {
        return new Promise((resolve, reject) => {
            this.connexion.query(
                `SELECT
                     p.id,
                     p.energy,
                     p.material,
                     p.money,
                     p.position_id,
                     p.coordX,
                     p.coordY,
                     pt.type
                FROM planets p
                    JOIN planet_type pt ON p.planet_type_id = pt.id`,
                (err, result) => {
                    if (err) reject(err);
                    resolve(result);
                }
            )
        })
    }
    readOnePlanets(id) {
        return new Promise((resolve, reject) => {
            this.connexion.query(`
                SELECT 
                    p.name,
                    pos.coord_x AS pos_coordX,
                    pos.coord_y AS pos_coordY
                FROM planets p
                    JOIN positions pos on p.position_id = pos.id
                WHERE p.id = ?`,
                [id],
                (err, result) => {
                    if(err) reject(err)
                    resolve(result);
                }
            );
        });
    }
    createNewPlanets (planet) {
        return new Promise((resolve, reject) => {
            this.connexion.query(
                `
                    INSERT INTO planets
                        (name)
                    VALUE(?)
                `,
                [planet.name],
                (err, result) => {
                    if(err) reject(err)
                    resolve(result);
                }
            );
        });
    }
    putPlanets(planet, id) {
        return new Promise((resolve, reject) => {
            this.connexion.query(
                `UPDATE planets SET name=? WHERE id = ?`,
                [
                    action.name,
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
    getShips(id) {
        return new Promise((resolve, reject) => {
            this.connexion.query(`
                SELECT COUNT(ships.id) AS number_ship FROM planets
                JOIN dbcosmoclash.planets_ships ps on planets.id = ps.planet_id
                JOIN ships ON ps.ship_id = ships.id
                WHERE planets.id = ?
            `, [id], (err, result) => {
                if(err) reject(err);
                resolve(result);
            })
        })
    }
    updatePositionId(planet, id) {
        return new Promise((resolve, reject) => {
            this.connexion.query('UPDATE planets SET position_id = ? WHERE planets.id = ?', [planet.positionId, id], (err, result) => {
                if(err) reject(err)
                resolve(result);
            })
        })
    }
    deletePlanets(id) {
        return new Promise((resolve, reject) => {
            this.connexion.query('DELETE FROM planets WHERE id=?', [id], (err, result) => {
                if(err) reject(err)
                resolve(result);
            })
        })
    }
}