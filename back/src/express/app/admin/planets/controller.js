import {
    deletePlanet, getShipsPlanet,
    patchPlanet, patchPositionPlanet,
    planetCreated,
    planetFind,
    planetFindAll, putPlanet
} from "../../../core/services/PlanetServices.js";

export const index = (req, res) => {
    planetFindAll()
        .then(dataResult => {
            if(dataResult.length > 0) {
                res.status(200).send(JSON.stringify({
                    message: 'Ok', data: dataResult,
                    status: res.statusCode
                }));
            } else {
                res.status(500).send(JSON.stringify({
                    message: 'Internal Server Error: no planets',
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
export const findPlanets = (req, res) => {
    planetFind(req.params.id)
        .then(dataResult => {
            if(dataResult.length > 0) {
                res.status(200).send(JSON.stringify({
                    message: 'Ok', data: dataResult,
                    status: res.statusCode
                }));
            } else {
                res.status(500).send(JSON.stringify({
                    message: 'Internal Server Error: no planets',
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
export const createPlanets = (req, res) => {
    planetCreated(req.body)
        .then(dataResult => {
            if(dataResult.length > 0) {
                res.status(201).send(JSON.stringify({
                    message: 'Created',
                    status: res.statusCode
                }));
            } else {
                res.status(500).send(JSON.stringify({
                    message: 'Internal Server Error: no planets',
                    status: res.statusCode
                }));
            }
        })
        .catch((err) => {
            res.status(422).send(JSON.stringify({
                message: 'Unprocessable Entity:' + ' ' + err.message,
                status: res.statusCode
            }));
        });

}
export const putPlanets = (req, res) => {
    putPlanet(req.body, req.params.id)
        .then(resultData => {
            if(resultData)
                res.status(201).send(JSON.stringify({
                    message: 'Updated all actions',
                    status: res.statusCode
                }));
            else
                res.status(500).send(JSON.stringify({
                    message: 'Internal Server Error: bad credentials',
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
export const patchPlanets = (req, res) => {
    patchPlanet(req.body, req.params.id)
        .then(resultData => {
            if(resultData)
                res.status(201).send(JSON.stringify({
                    message: 'Updated all actions',
                    status: res.statusCode
                }));
            else
                res.status(500).send(JSON.stringify({
                    message: 'Internal Server Error: bad credentials',
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
export const deletePlanets = (req, res) => {
    deletePlanet(req.params.id)
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

export const addedPositionToPlanet = (req, res) => {
    patchPositionPlanet(req.body, req.params.id)
        .then(resultData => {
            if(resultData)
                res.status(201).send(JSON.stringify({
                    message: 'Updated all position of planet',
                    status: res.statusCode
                }));
            else
                res.status(500).send(JSON.stringify({
                    message: 'Internal Server Error: bad credentials',
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
export const getShips = (req, res) => {
    getShipsPlanet(parseInt(req.params.id))
        .then(resultData => {
            return res.status(200).json({message: 'Ok', data: resultData[0], status: res.statusCode});
        })
        .catch(err => {
            res.status(404).json({message: err.message, status: res.statusCode});
        })
}