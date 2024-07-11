import { faker } from "@faker-js/faker";
import MyFakerData from "./MyFakerData.js";
import {
    allianceMembersModel,
    allianceModel,
    marketShipsModel,
    marketTransactionModel,
    planetModel,
    shipModel,
    technologieModel,
    userModel,
    planetShipsModel
} from "../../express/core/constants/index.js";
export default class MyFaker {
    #fakerData = new MyFakerData();
    constructor() {}

    createFakeData(callback, number) {
        return faker.helpers.multiple(() => callback, {
            count: number,
        });
    }
    ended(runner) {
        console.log(runner.charAt(0).toUpperCase() + runner.slice(1) + 's' + ' ' + 'runner finished');
    }
    userRunner() {
        const users = [];
        let i = 1;
        while(i <= 7) {
            for (const user of this.createFakeData(this.#fakerData.createUsers(i), 1)) {
                users.push(user);
            }
            i += 1;
        }
        for (const user of users) {
            userModel.createNewUser(user).then();
        }
        this.ended('user');
    }
    transactionRunner() {
        const transactions = [];
        let i = 1;
        while(i <= 7) {
            for (const transaction of this.createFakeData(this.#fakerData.createMarketTransaction(i), 1)) {
                transactions.push(transaction);
            }
            i += 1;
        }
        for (const transaction of transactions) {
            marketTransactionModel.createNewMarketTransaction(transaction).then();
        }
        this.ended('transaction');
    }
    allianceMembersRunner() {
        const alliancesMembers = [];
        let i = 1;
        while(i <= 7) {
            for (const allianceMembers of this.createFakeData(this.#fakerData.createAllianceMembers(i), 1)) {
                alliancesMembers.push(allianceMembers);
            }
            i += 1;
        }
        for (const allianceMember of alliancesMembers) {
            allianceMembersModel.addedNewAlliancesMembers(allianceMember).then();
        }
        this.ended('member');
    }
    allianceRunner() {
        const alliances = [];
        let i = 1;
        while(i <= 50) {
            for (const alliance of this.createFakeData(this.#fakerData.createAlliance(i), 1)) {
                alliances.push(alliance);
            }
            i += 1;
        }
        for (const alliance of alliances) {
            allianceModel.createNewAlliance(alliance).then();
        }
        this.ended('alliance');
    }
    planetRunner() {
        let planets = [];
        let i = 1;
        while(i <= 7) {
            for (const planet of this.createFakeData(this.#fakerData.createPlanet(i), 1)) {
                planets.push(planet);
            }
            i += 1;
        }
        for (const planet of planets) {
            planetModel.createNewPlanet(planet).then();
        }
        this.ended('planet');
    }
    addShipToMarketRunner() {
        let shipMarkets = [];
        let i = 1;
        while(i <= 7) {
            for (const shipMarket of this.createFakeData(this.#fakerData.addShipToMarket(i), 1)) {
                shipMarkets.push(shipMarket);
            }
            i += 1;
        }
        for (const shipMarket of shipMarkets) {
            marketShipsModel.addShipsToMarket(shipMarket).then();
        }
        this.ended('ship Market');
    }
    planetShipRunner() {
        let planetShips = [];
        let i = 1;
        while(i <= 25) {
            for (const ship of this.createFakeData(this.#fakerData.createShipPlanet(), 1)) {
                planetShips.push(ship);
            }
            i += 1;
        }
        for (const planetShip of planetShips) {
            planetShipsModel.addShipToPlanet(planetShip).then();
        }
        this.ended('planet Ship');
    }
    shipRunner() {
        let ships = [];
        let i = 1;
        while(i <= 50) {
            for (const ship of this.createFakeData(this.#fakerData.createShip(i), 1)) {
                ships.push(ship);
            }
            i += 1;
        }
        for (const ship of ships) {
            shipModel.createNewShip(ship).then();
        }
        this.ended('ship');
    }
    technologyRunner() {
        let technologies = [];
        let i = 1;
        while(i <= 280) {
            for (const technology of this.createFakeData(this.#fakerData.createTechnology(i), 1)) {
                technologies.push(technology);
            }
            i += 1;
        }
        for (const technology of technologies) {
            technologieModel.createNewTechnologies(technology).then();
        }
        this.ended('technologie');
    }
    planetWithShipsAndResources() {
        this.planetRunner();
        this.shipRunner();
        this.technologyRunner();
    }
    initData() {
        this.planetWithShipsAndResources();
        this.allianceRunner();
        setTimeout(() => this.userRunner(), 5000);
        setTimeout(() => this.allianceMembersRunner(), 10000);
        setTimeout(() => this.transactionRunner(), 10000);
        setTimeout(() => this.addShipToMarketRunner(), 15000);
        setTimeout(() => this.planetShipRunner(), 20000);

    }
}
