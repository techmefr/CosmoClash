import {
    technoFindAll,
    technoFind,
    technoCreated,
    putTechno,
    patchTechno,
    deleteTechno
} from "../../../core/services/TechnologiesService.js";

export const index = (req, res) => {
    technoFindAll()
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

export const findTechno = (req, res) => {
    technoFind(req.params.id)
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

export const createTechno = (req, res) => {
    technoCreated(req.body)
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

export const putTechnoController = (req, res) => {
    putTechno(req.body, req.params.id)
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

export const patchOneTechno = (req, res) => {
    patchTechno(req.body, req.params.id)
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
    deleteTechno(req.params.id)
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