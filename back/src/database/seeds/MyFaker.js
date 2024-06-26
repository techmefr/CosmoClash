import { faker } from '@faker-js/faker';
import MyFakerData from "./MyFakerData.js";
import {actionModel, planetModel} from "../../express/core/constants/index.js";

export default class MyFaker {
    #fakerData = new MyFakerData();
    constructor() {}
    createFakeData(callback, number) {
        return faker.helpers.multiple(() => callback, {
            count: number,
        });
    }
    /**
     * Action
     * @version 0.0.1
     */
    planetRunner() {
        for (const planet of this.createFakeData(this.#fakerData.createPlanet(), 5)) {
            planetModel.createNewPlanets(planet).then();
        }
    }
    actionRunner() {
        for (const action of this.createFakeData(this.#fakerData.createActions(), 5)) {
            actionModel.createNewActions(action).then();
        }
    }
    initData() {
        this.actionRunner();
        this.planetRunner();
    }
}