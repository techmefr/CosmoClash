import {
    deleteShip,
    patchShips,
    shipCreated,
    shipFind,
    shipFindAll,
    putShip
} from "../../../core/services/ShipServices.js";

export const index = (req, res) => {
    shipFindAll()
        .then(dataResult => {
            if (dataResult.length > 0) {
                res.status(200).send(JSON.stringify({
                    message: 'Ok',
                    data: dataResult,
                    status: res.statusCode
                }));
            } else {
                res.status(404).send(JSON.stringify({
                    message: 'Not Found: Ships do not exist',
                    status: res.statusCode
                }));
            }
        })
        .catch(err => {
            res.status(400).send(JSON.stringify({
                message: 'Bad request: ' + err.message,
                status: res.statusCode
            }));
        });
}

export const findShips = (req, res) => {
    shipFind(req.params.id)
        .then(dataResult => {
            if (dataResult) {
                res.status(200).send(JSON.stringify({
                    message: 'Ok',
                    data: dataResult,
                    status: res.statusCode
                }));
            } else {
                res.status(404).send(JSON.stringify({
                    message: 'Not Found: Ship does not exist',
                    status: res.statusCode
                }));
            }
        })
        .catch(err => {
            res.status(400).send(JSON.stringify({
                message: 'Bad request: ' + err.message,
                status: res.statusCode
            }));
        });
}

export const createShips = (req, res) => {
    shipCreated(req.body)
        .then(dataResult => {
            if (dataResult) {
                res.status(201).send(JSON.stringify({
                    message: 'Created',
                    status: res.statusCode
                }));
            } else {
                res.status(500).send(JSON.stringify({
                    message: 'Internal Server Error: bad credentials',
                    status: res.statusCode
                }));
            }
        })
        .catch(err => {
            res.status(400).send(JSON.stringify({
                message: 'Bad request: ' + err.message,
                status: res.statusCode
            }));
        });
}

export const putShips = (req, res) => {
    putShip(req.body, req.params.id)
        .then(resultData => {
            if (resultData) {
                res.status(200).send(JSON.stringify({
                    message: 'Updated all ships',
                    status: res.statusCode
                }));
            } else {
                res.status(500).send(JSON.stringify({
                    message: 'Internal Server Error: bad credentials',
                    status: res.statusCode
                }));
            }
        })
        .catch(err => {
            res.status(400).send(JSON.stringify({
                message: 'Bad request: ' + err.message,
                status: res.statusCode
            }));
        });
}

export const patchOneShip = (req, res) => {
    patchShips(req.body, req.params.id)
        .then(resultData => {
            if (resultData) {
                res.status(200).send(JSON.stringify({
                    message: 'Updated specific ship migrate',
                    status: res.statusCode
                }));
            } else {
                res.status(500).send(JSON.stringify({
                    message: 'Internal Server Error: bad credentials',
                    status: res.statusCode
                }));
            }
        })
        .catch(err => {
            res.status(400).send(JSON.stringify({
                message: 'Bad request: ' + err.message,
                status: res.statusCode
            }));
        });
}

export const shipDelete = (req, res) => {
    deleteShip(req.params.id)
        .then(() => {
            res.status(200).send(JSON.stringify({
                message: 'Deleted successfully',
                status: res.statusCode
            }));
        })
        .catch(err => {
            res.status(400).send(JSON.stringify({
                message: 'Bad request: ' + err.message,
                status: res.statusCode
            }));
        });
}