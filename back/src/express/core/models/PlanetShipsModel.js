import AbstractModels from "../abstract/AbstractModels.js";

export default class PlanetShipsModel extends AbstractModels {
    constructor() {
        super();
    }
    addShipToPlanet(shipPlanet) {
        return new Promise((resolve, reject) => {
            this.connexion.query(
                `INSERT INTO planets_ships(ship_id, planet_id) VALUES(?, ?)`,
                [shipPlanet.ship_id, shipPlanet.planet_id],
                (err, result) => {
                    if(err) reject(err);
                    resolve(result);
                }
            )
        })
    }
}