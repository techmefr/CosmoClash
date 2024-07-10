import {
    allianceFindAll,
    allianceFind,
    allianceCreated,
    allianceUpdateAllData,
    allianceUpdateOneData,
    allianceDeleted, alliancePlanetGamer
} from '../../../core/services/AllianceServices.js'

export const index = (req, res) => {
    allianceFindAll()
        .then(dataResult => {
            if(dataResult.length > 0) {
                res.status(200).send(JSON.stringify({
                    message: 'Ok',
                    data: dataResult,
                    status: res.statusCode
                }));
            } else {
                res.status(500).send(JSON.stringify({
                    message: 'Internal Server Error: no resources',
                    status: res.statusCode
                }));
            }
        })
        .catch(err => {
            res.status(400).send(JSON.stringify({
                message: 'Bad request:' + ' ' + err.message,
                status: res.statusCode
            }));
        });
}
export const findAlliances = (req, res) => {
    allianceFind(req.params.id)
        .then(dataResult => {
            if(dataResult) {
                res.status(200).send(JSON.stringify({
                    message: 'Ok',
                    data: dataResult,
                    status: res.statusCode
                }));
            } else {
                res.status(500).send(JSON.stringify({
                    message: 'Internal Server Error: resource not in database',
                    status: res.statusCode
                }));
            }
        })
        .catch((err) => {
            res.status(400).send(JSON.stringify({
                message: 'Bad request:' + ' ' + err.message,
                status: res.statusCode
            }));
        });
}

export const putAlliances = (req, res) => {
    allianceUpdateAllData(req.body, req.params.id)
        .then(() => {
            res.status(201).send(JSON.stringify({
                message: 'Updated all alliances',
                status: res.statusCode
            }));
        })
        .catch((err) => {
            res.status(204).send(JSON.stringify({
                message: 'No content:' + ' ' + err.message,
                status: res.statusCode
            }));
        });
}
export const patchAlliances = (req, res) => {
    allianceUpdateOneData(req.body, req.params.id)
        .then(() => {
            res.status(201).send(JSON.stringify({
                message: 'Updated specific alliance migrate',
                status: res.statusCode
            }));
        })
        .catch((err) => {
            res.status(204).send(JSON.stringify({
                message: 'No content:' + ' ' + err.message,
                status: res.statusCode
            }));
        });
}


export const createAlliances = (req, res) => {
    allianceCreated(req.body)
        .then(() => {
            res.status(201).send(JSON.stringify({
                message: 'Created',
                status: res.statusCode
            }));
        })
        .catch((err) => {
            res.status(422).send(JSON.stringify({
                message: 'Unprocessable Entity:' + ' ' + err.message,
                status: res.statusCode
            }));
        });

}
export const deleteAlliances = (req, res) => {
    allianceDeleted(req.params.id)
        .then(() => {
            res.status(200).send(JSON.stringify({
                message: 'Deleted successfully',
                status: res.statusCode
            }));
        })
        .catch(err => {
            res.status(204).send(JSON.stringify({
                message: err.message,
                status: res.statusCode
            }));
        });
}

export const playerAndPlanet = (req, res) =>
    alliancePlanetGamer(req.headers.filter)
        .then((result) => {
            res.status(200).json({message: 'Ok', data: result, status: res.statusCode});
        })
        .catch((err) => {
            res.status(500).json({message: err.message, status: res.statusCode});
        })