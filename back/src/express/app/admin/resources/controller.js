import {
    resourceFindAll,
    resourceFind,
    resourceUpdateAllData,
    resourceUpdateOneData,
    resourceDeleted
} from '../../../core/services/ResourceServices.js'

export const index = (req, res) => {
    resourceFindAll()
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
export const findResource = (req, res) => {
    resourceFind(req.params.id)
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

export const putResource = (req, res) => {
    resourceUpdateAllData(req.body, req.params.id)
        .then(() => {
            res.status(201).send(JSON.stringify({
                message: 'Updated all resources',
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
export const patchResource = (req, res) => {
    resourceUpdateOneData(req.body, req.params.id)
        .then(() => {
            res.status(201).send(JSON.stringify({
                message: 'Updated specific resource data',
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
export const deletedResource = (req, res) => {
    resourceDeleted(req.params.id)
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