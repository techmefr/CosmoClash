export default class MyFakerData {

    getRandomIntInclusive(min, max) {
        return Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min) + 1)) + Math.ceil(min);
    }
    createMarketTransaction(i) {
        return {
            id: i,
            user_id: this.getRandomIntInclusive(1, 7),
            technology_id: this.getRandomIntInclusive(1, 25),
            ship_type: this.getRandomIntInclusive(1, 25)
        }
    }
    addShipToMarket(i) {
        return {
            ship_id: this.getRandomIntInclusive(1, 25),
            market_id: this.getRandomIntInclusive(1, 7)
        }
    }
    createAllianceMembers(i) {
        return {
            alliance_id: parseInt(this.getRandomIntInclusive(1, 50)),
            user_id: parseInt(this.getRandomIntInclusive(1, 7))
        }
    }
    createUsers(i) {
        const usernames = ['skrillex', 'toto', 'titi', 'tata'];
        const names = ['toto', 'titi', 'tata', 'toto'];
        return {
            role_id: 2,
            planet_id: this.getRandomIntInclusive(1, 7),
            username: usernames[this.getRandomIntInclusive(1, 3)]   + '-' + i.toString() ,
            email: names[this.getRandomIntInclusive(1, 3)] + '-' + i.toString() + '@gmail.com',
            password_hash: '$2a$10$Sh0gteSQ7sJmyon3Q7ZPD.AJ3.YC3OSHG1XpnxkcXZQmyDycTIBFq',
            bearer_token: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.I-u_fFFWLpuywjIxGHcEY-lSHWImD4XlsdFm6RQD_fo'
        }
    }
    createAlliance(i) {
        let colors = ['red', 'green', 'blue'];
        return {
            role_id: 2,
            name: 'alliance-' + i.toString(),
            color: colors[this.getRandomIntInclusive(0, 2)]
        };
    }
    createPlanet(i) {
        return {
            planet_type_id: i,
            energy: this.getRandomIntInclusive(1, 255),
            money: this.getRandomIntInclusive(1, 255),
            material: this.getRandomIntInclusive(1, 255),
            position_id: i,
            coordX: i,
            coordY: i,
        }
    }
    createShip(i) {
        return {
            position_id: i,
            ship_type: i,
            quantity: this.getRandomIntInclusive(1, 255),
            speed: this.getRandomIntInclusive(1, 255),
            attack: this.getRandomIntInclusive(1, 255),
            defense: this.getRandomIntInclusive(1, 255),
            name: 'ship-' + i.toString(),
        }
    }
    createShipPlanet() {
        return {
            ship_id: parseInt(this.getRandomIntInclusive(1, 25)),
            planet_id: parseInt(this.getRandomIntInclusive(1, 7)),
        }
    }
    createTechnology(i) {
        return {
            name: 'technology-' + i.toString(),
            energy_cost: this.getRandomIntInclusive(1, 255),
            money_cost: this.getRandomIntInclusive(1, 255),
            material_cost: this.getRandomIntInclusive(1, 255),
            speed_benefit: this.getRandomIntInclusive(1, 255),
            attack_benefit: this.getRandomIntInclusive(1, 255),
            defense_benefit: this.getRandomIntInclusive(1, 255)
        }
    }
}
