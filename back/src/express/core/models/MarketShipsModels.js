import AbstractModels from "../abstract/AbstractModels.js";

export default class MarketShipsModels extends AbstractModels {
    constructor() {
        super();
    }
    addShipsToMarket(market) {
        return new Promise((resolve, reject) => {
            this.connexion.query(`
                INSERT INTO market_ships(ship_id, market_id) VALUES
                (?, ?)
            `, [
                market.ship_id,
                market.market_id
            ], (err, result) => {
                if(err) reject(err);
                resolve(result);
            })
        })
    }
}