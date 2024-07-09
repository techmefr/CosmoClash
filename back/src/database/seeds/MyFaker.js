import { faker } from "@faker-js/faker";
import MyFakerData from "./MyFakerData.js";
import {
    actionModel,
    planetModel,
    userModel,
    positionModel,
    allianceModel,
    technologieModel,
    shipModel,
    planetTypeModel,
} from "../../express/core/constants/index.js";
import { bcryptUtils } from "../../express/core/utils/index.js";
import Config from "../../express/core/config/index.js";

export default class MyFaker {
  #fakerData = new MyFakerData();
  constructor() {}

  createFakeData(callback, number) {
    return faker.helpers.multiple(() => callback, {
      count: number,
    });
  }

  async userRunner(maxUser, start = 1) {
    const users = [];
    for (let i = start; i <= maxUser; i++) {
      let user = this.#fakerData.createUsers(i);
      user.password = await bcryptUtils.createPasword(user.password);
      users.push(userModel.createNewUser(user));
    }
    await Promise.all(users);
    console.log("user finished");
    return users;
  }

  async planetRunner() {
    const planetTypes = await planetTypeModel.getAllPlanetTypes();
    if (planetTypes.length !== 7) {
      throw new Error("There should be exactly 7 planet types.");
    }

    const positions = await positionModel.readAllPosition();
    if (positions.length < 100) {
      throw new Error("Not enough positions available to create 100 planets.");
    }

    const planets = [];
    let positionIndex = 0;

    for (const planetType of planetTypes) {
      for (let i = 0; i < 14; i++) {
        if (positionIndex >= positions.length) {
          throw new Error(
            "Not enough positions available to create all planets."
          );
        }

        const planet = {
          name: `${planetType.type} Planet ${faker.unique(faker.unique.word)}`,
          type_id: planetType.id,
          position_id: positions[positionIndex].id,
        };

        planets.push(planetModel.createNewPlanet(planet));
        positionIndex++;
      }
    }

    await Promise.all(planets);
    console.log("planet finished");
    return planets;
  }

  async actionRunner() {
    const actions = this.createFakeData(this.#fakerData.createActions(), 5).map(
      (action) => actionModel.createNewActions(action)
    );
    await Promise.all(actions);
    console.log("action finished");
  }

  async positionRunner() {
    const positions = [];
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        const position = { coordX: i, coordY: j };
        positions.push(positionModel.createNewPosition(position));
      }
    }
    await Promise.all(positions);
    console.log("position finished");
    return positions;
  }

  async allianceRunner() {
    const alliances = this.createFakeData(
      this.#fakerData.createAlliances(),
      3
    ).map((alliance) => allianceModel.createNewAlliance(alliance));
    await Promise.all(alliances);
    console.log("alliances finished");
    return alliances;
  }

  async allianceMembersRunner(users, alliances) {
    const allianceMembers = [];
    users.forEach((user, index) => {
      const allianceId = alliances[index % alliances.length].id;
      allianceMembers.push(
        allianceMembersModel.createNewMember({
          user_id: user.id,
          alliance_id: allianceId,
        })
      );
    });
    await Promise.all(allianceMembers);
    console.log("alliance members finished");
  }

  async allianceMessagesRunner(users, alliances) {
    const allianceMessages = [];
    users.forEach((user) => {
      const allianceId = alliances.find((alliance) =>
        alliance.includes(user.id)
      ).id;
      const messageCount = faker.number.int({ min: 2, max: 5 });
      for (let i = 0; i < messageCount; i++) {
        const message = this.#fakerData.createAllianceMessages(allianceId);
        allianceMessages.push(allianceMessagesModel.createNewMessage(message));
      }
    });
    await Promise.all(allianceMessages);
    console.log("alliance messages finished");
  }

  async technologyRunner(maxTechnologies) {
    const technologies = this.createFakeData(
      this.#fakerData.createTechnologies(),
      maxTechnologies
    ).map((technology) => technologieModel.createNewTechnology(technology));
    await Promise.all(technologies);
    console.log("technologies finished");
  }

  async shipRunner(planets) {
    const ships = planets.map((planet) => {
      const ship = this.#fakerData.createShips(planet.position);
      return shipModel.createNewShip(ship);
    });
    await Promise.all(ships);
    console.log("ships finished");
  }

  async planetTypeRunner() {
    const planetTypes = this.#fakerData.createPlanetTypes();
    const planetTypePromises = planetTypes.map((planetType) =>
      planetTypeModel.createNewPlanetType(planetType)
    );
    await Promise.all(planetTypePromises);
    console.log("planet types finished");
  }

  async initData() {
    try {
      await this.planetTypeRunner();
      const users = await this.userRunner(Config.database.nbUsers);
      await this.actionRunner();
      const positions = await this.positionRunner();
      const planets = await this.planetRunner();
      const alliances = await this.allianceRunner();
      await this.allianceMembersRunner(users, alliances);
      await this.allianceMessagesRunner(users, alliances);
      await this.technologyRunner(10);
      await this.shipRunner(planets);
      console.log("All data initialization finished");
    } catch (error) {
      console.error("Error initializing data:", error);
    }
  }
}
