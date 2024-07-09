import AbstractModels from "../abstract/AbstractModels.js";

export default class MarketTransactionModel extends AbstractModels {
    constructor() {
        super();
    }
    createNewMarketTransaction(market) {
        return new Promise((resolve, reject) => {
            this.connexion.query(`
                INSERT INTO market_transactions(id, user_id, technology_id, ship_type) VALUES
                (?, ?, ?, ?)
            `, [
                market.id,
                market.user_id,
                market.technology_id,
                market.ship_type
            ], (err, result) => {
                if(err) reject(err);
                resolve(result);
            })
        })
    }
}