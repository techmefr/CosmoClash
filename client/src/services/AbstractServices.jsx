import { urlsRouter } from "@/constants/apiRoutes.jsx";

export default class AbstractServices {
    routes = urlsRouter;
    data = [];
    constructor() { }
    getAll(name, headerOption) {
        return new Promise((resolve, reject) => {
            fetch((this.routes.find(route => route.name === name)).url, {
                headers: headerOption
            }).then(res => res.json()).then((data) => {
                this.data = data.data;
                if(this.data.length > 0) resolve(this.data);
                reject('Bad authentication or bad request');
            })
        })
    }
}