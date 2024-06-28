import {
    positionFindAll,
    positionFind,
    positionCreated,
    putPosition,
    patchPosition,
    deletePosition
} from "../../../core/services/positionService.js";

export const index = (req, res) => {
    positionFindAll()
        .then(dataResult => {
            if (dataResult.length > 0) {
                res.status(200).send(JSON.stringify({
                    message: 'Ok',
                    data: dataResult,
                    status: res.statusCode
                }));
            } else {
                res.status(404).send(JSON.stringify({
                    message: 'Not Found: position do not exist',
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

export const findPosition = (req, res) => {
    positionFind(req.params.id)
        .then(dataResult => {
            if (dataResult[0]) {
                res.status(200).send(JSON.stringify({
                    message: 'Ok',
                    data: dataResult[0],
                    status: res.statusCode
                }));
            } else {
                res.status(404).send(JSON.stringify({
                    message: 'Position number ' + req.params.id + ' not found',
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

export const createPosition = (req, res) => {
    positionCreated(req.body)
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

export const putPositionController = (req, res) => {
    putPosition(req.body, req.params.id)
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

export const patchOnePosition = (req, res) => {
    patchPosition(req.body, req.params.id)
        .then(resultData => {
            if (resultData) {
                res.status(200).send(JSON.stringify({
                    message: 'Updated specific ship data',
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

export const positionDelete = (req, res) => {
    deletePosition(req.params.id)
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