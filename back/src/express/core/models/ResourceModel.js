import AbstractModels from "../abstract/AbstractModels.js";

export default class ResourceModel extends AbstractModels {
    constructor(props) {
        super(props);
    }
    readAllResources() {
        return new Promise((resolve, reject) => {
            this.connexion.query('SELECT * FROM resources', (err, result) => {
                if(err) reject(err);
                resolve(result);
            });
        });
    }
    readOneResources(id) {
        return new Promise((resolve, reject) => {
            this.connexion.query('SELECT * FROM resources WHERE id = ?', [id], (err, result) => {
                if(err) reject(err)
                resolve(result);
            });
        });
    }
    createNewResources (resource) {
        return new Promise((resolve, reject) => {
            this.connexion.query(
                `
                    INSERT INTO resources
                        (name, icon)
                    VALUES(?, ?)
                `,
                [
                    resource.name,
                    resource.icon
                ],
                (err, result) => {
                    if(err) reject(err)
                    resolve(result);
                }
            );
        });
    }
    patchResources(resource, id) {
        let sql = 'UPDATE resources ';
        let values = Object.values(resource);
        for (const [key] of Object.entries(resource)) {
            if(key !== Object.keys(action)[Object.keys(resource).length - 1])
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
    putResources(resource, id) {
        return new Promise((resolve, reject) => {
            this.connexion.query(`
            UPDATE resources
            SET name=?, 
                icon=?
            WHERE id = ?
        `, [
                resource.name,
                resource.icon,
                id
            ], (err, result) => {
                if(err) {
                    reject(err);
                }
                resolve(result);
            })
        });
    }
    deleteResources(id) {
        return new Promise((resolve, reject) => {
            this.connexion.query('DELETE FROM resources WHERE id=?', [id], (err, result) => {
                if(err) reject(err)
                resolve(result);
            })
        })
    }
}