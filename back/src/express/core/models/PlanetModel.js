import AbstractModels from "../abstract/AbstractModels.js";

export default class PlanetModel extends AbstractModels {
    constructor() {
        super();
    }
    readAllPlanet() {
        return new Promise((resolve, reject) => {
            this.connexion.query(
                `SELECT
                     p.name,
                     r.name AS resource_name, r.icon as resource_icon,
                     s.name AS ship_name,
                     pos.coord_x AS pos_coordX,
                     pos.coord_y AS pos_coordY
                FROM planets p
                    JOIN planets_resources pr on p.id = pr.planet_id
                    JOIN resources r on r.id = pr.resource_id
                    JOIN planets_ships ps on p.id = ps.planet_id
                    JOIN ships s on ps.ship_id = s.id
                    JOIN positions pos on p.position_id = pos.id`,
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
                    r.name AS resource_name, r.icon as resource_icon,
                    s.name AS ship_name,
                    pos.coord_x AS pos_coordX,
                    pos.coord_y AS pos_coordY
                FROM planets p 
                    JOIN planets_resources pr on p.id = pr.planet_id
                    JOIN resources r on r.id = pr.resource_id
                    JOIN planets_ships ps on p.id = ps.planet_id
                    JOIN ships s on ps.ship_id = s.id
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
            this.connexion.query(`
            UPDATE planets
            SET name=?
            WHERE id = ?
        `,
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
    patchPlanet(planet, id) {
        return new Promise((resolve, reject) => {
            this.connexion.query(`
            UPDATE planets
            SET name=?
            WHERE id = ?
        `,
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
    deletePlanets(id) {
        return new Promise((resolve, reject) => {
            this.connexion.query('DELETE FROM planets WHERE id=?', [id], (err, result) => {
                if(err) reject(err)
                resolve(result);
            })
        })
    }
}