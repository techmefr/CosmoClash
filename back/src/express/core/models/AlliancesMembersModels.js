import AbstractModels from "../abstract/AbstractModels.js";

export default class AlliancesMembersModels extends AbstractModels {
    constructor() {
        super();
    }
    addedNewAlliancesMembers(allianceMembers) {
        return new Promise((resolve, reject) => {
            this.connexion.query('INSERT INTO alliance_members(user_id, alliance_id) VALUES (?, ?)', [
                allianceMembers.user_id,
                allianceMembers.alliance_id
            ], (err, result) => {
                if(err) reject(err);
                resolve(result);
            })
        })
    }
}