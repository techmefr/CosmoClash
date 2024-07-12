import AbstractServices from "@/services/AbstractServices.jsx";

export default class PlanetService extends AbstractServices {
    name = '';
    constructor() {
        super();
        this.name = 'planets';
    }
    all(headerOption) {
        return super.getAll(this.name, headerOption).then();
    }
    getMaxNbShips(id, headerOption) {
        return new Promise((resolve, reject) => {
            fetch(
                (this.routes.find(route => route.name === this.name)).url + '/nbShips/' + id,
                {
                    headers: headerOption
                }
            )
                .then(
                    res => res.json()
                )
                .then((data) => {
                    resolve(data);
                })
        })
    }
}