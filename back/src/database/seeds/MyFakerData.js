import { faker } from "@faker-js/faker";

export default class MyFakerData {
  constructor() {}

  createUsers(incrementor) {
    return {
      username: faker.internet.userName(),
      email:
        faker.person.lastName().toLowerCase() +
        "." +
        faker.person.lastName().toLowerCase() +
        incrementor +
        "@gmail.com",
      password:
        faker.person.lastName().toLowerCase() +
        "." +
        faker.person.lastName().toLowerCase() +
        incrementor,
    };
  }

  createPlanet() {
    return {
      name: faker.person.lastName() + " Planet",
    };
  }

  createPosition() {
    return {
      coordX: faker.number.int({ min: 0, max: 9 }),
      coordY: faker.number.int({ min: 0, max: 9 }),
    };
  }

  createAlliances() {
    return {
      name: faker.company.name() + " Alliance",
      description:
        faker.lorem.sentence({ min: 10, max: 20 }) +
        " in the vast expanse of space, uniting " +
        faker.word.words({ count: { min: 1, max: 3 } }) +
        " alien races.",
    };
  }

  createAllianceMembers(userId, allianceId) {
    return {
      user_id: userId,
      alliance_id: allianceId,
    };
  }

  createAllianceMessages(allianceId) {
    return {
      alliance_id: allianceId,
      message_id: faker.number.int({ min: 1, max: 1000 }),
      content: faker.lorem.sentence(),
    };
  }

  createTechnologies() {
    const resourceTypes = ["energy_cost", "money_cost", "material_cost"];
    const benefitTypes = ["speed_benefit", "attack_benefit", "defense_benefit"];

    const randomResource = () => {
      const selectedResources = faker.helpers.arrayElements(
        resourceTypes,
        faker.number.int({ min: 0, max: 2 })
      );
      return resourceTypes.reduce((acc, type) => {
        acc[type] = selectedResources.includes(type)
          ? faker.number.int({ min: 100, max: 1000 })
          : null;
        return acc;
      }, {});
    };

    const randomBenefit = () => {
      const selectedBenefits = faker.helpers.arrayElements(
        benefitTypes,
        faker.number.int({ min: 0, max: 2 })
      );
      return benefitTypes.reduce((acc, type) => {
        acc[type] = selectedBenefits.includes(type)
          ? faker.number.int({ min: 10, max: 50 })
          : null;
        return acc;
      }, {});
    };

    return {
      name: faker.lorem.words({ min: 2, max: 3 }),
      ...randomResource(),
      ...randomBenefit(),
    };
  }

  createShips(position) {
    return {
      name: faker.vehicle.vehicle() + " Ship",
      position_id: position.id,
      ship_type: faker.number.int({ min: 1, max: 10 }),
      quantity: faker.number.int({ min: 1, max: 10 }),
      speed: faker.number.int({ min: 1, max: 100 }),
      attack: faker.number.int({ min: 1, max: 100 }),
      defense: faker.number.int({ min: 1, max: 100 }),
    };
  }

  createPlanetTypes() {
    return [
      { type: "balanced", energy: 2, money: 2, material: 2 },
      {
        type: "energyRich",
        energy: faker.number.int({ min: 3, max: 6 }),
        money: faker.number.int({ min: 0, max: 2 }),
        material: faker.number.int({ min: 0, max: 2 }),
      },
      {
        type: "moneyRich",
        energy: faker.number.int({ min: 0, max: 2 }),
        money: faker.number.int({ min: 3, max: 6 }),
        material: faker.number.int({ min: 0, max: 2 }),
      },
      {
        type: "materialRich",
        energy: faker.number.int({ min: 0, max: 2 }),
        money: faker.number.int({ min: 0, max: 2 }),
        material: faker.number.int({ min: 3, max: 6 }),
      },
      { type: "energyOnly", energy: 6, money: 0, material: 0 },
      { type: "moneyOnly", energy: 0, money: 6, material: 0 },
      { type: "materialOnly", energy: 0, money: 0, material: 6 },
    ];
  }
}
