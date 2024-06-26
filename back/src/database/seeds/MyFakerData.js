import { faker } from '@faker-js/faker';

export default class MyFakerData {
    constructor() { }
    createActions() {
        return {
            name: faker.number.int(),
            begin: faker.date.anytime(),
            end: faker.date.future(),
            result: faker.number.int(),
            resources_win: faker.number.int(),
            resources_lose: faker.number.int(),
            ship_lose: faker.number.int(),
            money_win: faker.number.int(),
            money_lose: faker.number.int(),
            history: faker.lorem.text()
        };
    }
    createPlanet() {
        return {
            name: faker.person.lastName()
        }
    }
}