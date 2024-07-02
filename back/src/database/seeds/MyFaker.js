import { faker } from '@faker-js/faker';
import MyFakerData from "./MyFakerData.js";
import {actionModel, planetModel, userModel} from "../../express/core/constants/index.js";
import {bcryptUtils} from "../../express/core/utils/index.js";
import Config from "../../express/core/config/index.js";

export default class MyFaker {
    #fakerData = new MyFakerData();
    constructor() {}
    createFakeData(callback, number) {
        return faker.helpers.multiple(() => callback, {
            count: number,
        });
    }

    /**
     * Users
     * @version 0.0.1
     */
    userRunner(maxUser, start = 1) {
        const users = [];
        for (let i = start; i <= maxUser; i++) {
            let user = this.#fakerData.createUsers(i);
            bcryptUtils.createPasword(user.password).then(hash => {
                user.password = hash;
                userModel.createNewUser(user).then();
            })
        }
        console.log('user finished');
    }
    /**
     * Action
     * @version 0.0.1
     */
    planetRunner() {
        for (const planet of this.createFakeData(this.#fakerData.createPlanet(), 5)) {
            planetModel.createNewPlanets(planet).then();
        }
        console.log('planet finished');
    }
    actionRunner() {
        for (const action of this.createFakeData(this.#fakerData.createActions(), 5)) {
            actionModel.createNewActions(action).then();
        }
        console.log('action finished');
    }
    initData() {
        this.userRunner(Config.database.nbUsers);
        this.actionRunner();
        this.planetRunner();
    }
}