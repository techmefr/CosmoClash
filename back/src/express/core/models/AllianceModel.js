import AbstractModels from "../abstract/AbstractModels.js";

export default class AllianceModel extends AbstractModels {
    // constructor(props) {
    //     super(props);
    // }
    constructor() {
    super();
    }
    getPlanetsWithPlayers(filter='ASC') {
        return new Promise((resolve, reject) => {
            this.connexion.query(`
                SELECT roles.roles, 
                       a.name, 
                       a.color, 
                       COUNT(DISTINCT p.id) AS planet_count, 
                       COUNT(DISTINCT am.user_id) AS player_count
                FROM alliances a
                    JOIN roles ON a.role_id = roles.id
                    JOIN alliance_members am ON a.id = am.alliance_id
                    JOIN users u ON am.user_id = u.id
                    JOIN planets p ON u.planet_id = p.id
                GROUP BY a.id, a.name`,
                (err, results) => {
                    if(err) reject(err);
                    resolve(results);
                }
            );
        })
    }
    readAllAlliances() {
        return new Promise((resolve, reject) => {
            this.connexion.query('SELECT * FROM alliances', (err, result) => {
                if(err) reject(err);
                resolve(result);
            });
        });
    }
    readOneAlliances(id) {
        return new Promise((resolve, reject) => {
            this.connexion.query('SELECT * FROM alliances WHERE id = ?', [id], (err, result) => {
                if(err) reject(err)
                resolve(result);
            });
        });
    }
    createNewAlliance (alliance) {
        return new Promise((resolve, reject) => {
            return this.connexion.query(
                `INSERT INTO alliances(role_id, name, color) VALUES(?, ?, ?)`,
                [
                    alliance.role_id,
                    alliance.name,
                    alliance.color
                ],
                (err, result) => {
                if(err) reject(err)
                resolve(result);
                }
            );
        });
    }
    patchAlliances(alliance, id) {
        let sql = 'UPDATE alliances ';
        let values = Object.values(alliance);
        for (const [key] of Object.entries(alliance)) {
            if(key !== Object.keys(alliance)[Object.keys(alliance).length - 1])
                sql += ` SET ${ key.toString() } = ?, `;
            else
                sql+= `SET ${ key.toString()} = ? `;
        }
        sql += 'WHERE id = ?';
        return new Promise((resolve, reject) => {
            this.connexion.query(
                sql,
                [
                    ...values,
                    id
                ],
                (err, result) => {
                    if(err) {
                        reject(err);
                    }
                    resolve(result);
                }
            )
        })
    }
    putAlliances(resource, id) {
        return new Promise((resolve, reject) => {
            this.connexion.query(`
                UPDATE alliances
                SET name=?, 
                color=?
                WHERE id = ?
                `,
                [
                    resource.name,
                    resource.icon,
                    id
                ],
                (err, result) => {
                    if(err) reject(err);
                    resolve(result);
                }
            )
        });
    }
    deleteAlliances(id) {
        return new Promise((resolve, reject) => {
            this.connexion.query(
                'DELETE FROM alliances WHERE id=?',
                [id],
                (err, result) => {
                    if(err) reject(err)
                    resolve(result);
                }
            )
        });
    }

    /**
    * addMember
    * @version 0.0.1
    * @author Patouillard Franck<patouillardfranck3@gmail.com>
    */
    addMember(allianceMembers) {
        return new Promise((resolve, reject) => {
            this.connexion.query(
                `INSERT INTO alliance_members (user_id, alliance_id) VALUES (?, ?)`,
                [
                    allianceMembers.user_id,
                    allianceMembers.alliance_id
                ],
                (err, results) => {
                    if (err) reject(err);
                    resolve(results);
                }
            )
        })
    }
    /**
    * Messages
    * @version 0.0.1
    * @author Patouillard Franck<patouillardfranck3@gmail.com>
    */
    addMessages(allianceMessage) {
        return new Promise((resolve, reject) => {
            this.connexion.query(
                `INSERT INTO alliance_messages (alliance_id, message_id) VALUES (?, ?)`,
                [
                    allianceMessage.alliance_id,
                    allianceMessage.message_id
                ],
                (err, results) => {
                    if (err) reject(err);
                    resolve(results);
                }
            )
        })
    }
}