import {
    actionCreated, actionDeleted,
    actionFind,
    actionFindAll,
    actionUpdateAllData,
    actionUpdateOneData
} from "../../../core/services/ActionServices.js";

export const index = (req, res) => {
    actionFindAll()
    .then(dataResult => {
        if(dataResult.length > 0) {
            res.status(200).send(JSON.stringify({
                message: 'Ok', data: data,
                status: res.statusCode
            }));
        } else {
            res.status(500).send(JSON.stringify({
                message: 'Internal Server Error: no actions',
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

export const findActions = (req, res) => {
    actionFind(req.params.id)
    .then(dataResult => {
        if(dataResult.length > 0) {
            res.status(200).send(JSON.stringify({
                message: 'Ok', data: data,
                status: res.statusCode
            }));
        } else {
            res.status(500).send(JSON.stringify({
                message: 'Internal Server Error: no actions',
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

export const createActions = (req, res) => {
    actionCreated(req.body)
    .then(dataResult => {
        if(dataResult) {
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
    .catch((err) => {
        res.status(400).send(JSON.stringify({
            message: 'Bad request:' + ' ' + err.message,
            status: res.statusCode
        }));
    });
}

export const putActions = (req, res) => {
    actionUpdateAllData(req.body, req.params.id)
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
export const patchActions = (req, res) => {
    actionUpdateOneData(req.body, req.params.id)
    .then(resultData => {
        if(resultData)
            res.status(201).send(JSON.stringify({
                message: 'Updated specific action data',
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
export const deleteActions = (req, res) => {
    actionDeleted(req.params.id)
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