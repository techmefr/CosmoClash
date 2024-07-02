import { faker } from '@faker-js/faker';
import Config from "../../config/index.js";

export default class MyFakerData {
    constructor() { }
     createUsers(incrementor) {
        return {
            username: faker.internet.userName(),
            email: faker.person.lastName().toLowerCase() + '.' + faker.person.lastName().toLowerCase() + incrementor + '@gmail.com',
            password: faker.person.lastName().toLowerCase() + '.' + faker.person.lastName().toLowerCase() + incrementor,
        }
     }
    createPlanet() {
        return {
            name: faker.person.lastName(Config.database.nbUsers)
        }
    }
}