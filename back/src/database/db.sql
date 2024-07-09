DROP DATABASE dbcosmoclash;
CREATE DATABASE dbcosmoclash;
USE dbcosmoclash;

CREATE TABLE roles (
id INT AUTO_INCREMENT PRIMARY KEY,
roles JSON NOT NULL,
token_expiration TIME NOT NULL
);

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    role_id INT ,
    planet_id INT ,
    username VARCHAR(255) NOT NULL UNIQUE,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    bearer_token VARCHAR(255),
    created_at DATETIME DEFAULT NOW(),
    is_banishment BOOLEAN DEFAULT 0,
    banishment_at DATETIME NULL DEFAULT NULL,
    ended_banishment_at DATETIME DEFAULT NULL
);

CREATE TABLE planet_type (
    id INT AUTO_INCREMENT PRIMARY KEY,
    type VARCHAR(12)
);

CREATE TABLE planets_ships(
  id INT AUTO_INCREMENT PRIMARY KEY,
  ship_id INT NOT NULL,
  planet_id INT NOT NULL
);

CREATE TABLE planets (
    id INT AUTO_INCREMENT PRIMARY KEY,
    planet_type_id INT NULL,
    energy INT DEFAULT 0,
    money INT DEFAULT 0,
    material INT DEFAULT 0,
    position_id INT UNIQUE,
    coordX TINYINT CHECK (coordX BETWEEN 0 AND 9) UNIQUE,
    coordY TINYINT CHECK (coordY BETWEEN 0 AND 9) UNIQUE
);
CREATE TABLE market_ships(
    id INT AUTO_INCREMENT PRIMARY KEY,
    ship_id INT NULL,
    market_id INT NULL
);
CREATE TABLE ships (
    id INT AUTO_INCREMENT PRIMARY KEY,
    ship_type BIGINT DEFAULT 0,
    name VARCHAR(255) NOT NULL,
    quantity INT DEFAULT 0,
    speed INT DEFAULT 0,
    attack INT DEFAULT 0,
    defense INT DEFAULT 0
);

CREATE TABLE technologies (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    energy_cost INT,
    money_cost INT,
    material_cost INT,
    speed_benefit INT,
    attack_benefit INT,
    defense_benefit INT
);

CREATE TABLE alliances (
    id INT AUTO_INCREMENT PRIMARY KEY,
    role_id INT NOT NULL,
    name VARCHAR(255) NOT NULL UNIQUE,
    color CHAR(6) NOT NULL
);

-- alliance_members => liés a alliance et user et les deux sont primaires
-- alliance_members => pas d'identification

CREATE TABLE alliance_members (
    user_id INT,
    alliance_id INT,
    PRIMARY KEY (user_id, alliance_id)
);

CREATE TABLE market_transactions (
    id INT PRIMARY KEY,
    user_id INT,
    technology_id INT,
    transaction_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    ship_type BIGINT DEFAULT 0
);


ALTER TABLE users
    ADD FOREIGN KEY (planet_id) REFERENCES planets(id);

ALTER TABLE alliance_members
ADD FOREIGN KEY (user_id)
REFERENCES users(id);
ALTER TABLE alliance_members
ADD FOREIGN KEY (alliance_id)
REFERENCES alliances(id);

ALTER TABLE market_transactions
ADD FOREIGN KEY (user_id)
REFERENCES users(id);
ALTER TABLE market_transactions
ADD FOREIGN KEY (technology_id)
REFERENCES technologies(id);
ALTER TABLE planets
ADD FOREIGN KEY (planet_type_id)
REFERENCES planet_type(id);

ALTER TABLE users ADD FOREIGN KEY (role_id) REFERENCES roles(id);
ALTER TABLE alliances ADD FOREIGN KEY (role_id) REFERENCES roles(id);

ALTER TABLE planets_ships ADD FOREIGN KEY (ship_id) REFERENCES ships(id),
    ADD FOREIGN KEY (planet_id) REFERENCES planets(id);

ALTER TABLE market_ships ADD FOREIGN KEY (ship_id) REFERENCES ships(id),
    ADD FOREIGN KEY (market_id) REFERENCES market_transactions(id);

INSERT INTO roles(roles, token_expiration) VALUES(CAST('{"roles": "ROLE_ADMIN"}' AS JSON), CURRENT_TIME),
                               (CAST('{"roles": "ROLE_ALLIANCE"}' AS JSON), CURRENT_TIME),
                               (CAST('{"roles": "ROLE_PLAYER"}' AS JSON), CURRENT_TIME);

INSERT INTO planet_type(type) VALUES ('balanced'),
                               ('energyRich'),
                               ('moneyRich'),
                               ('materialRich'),
                               ('energyOnly'),
                               ('materialOnly'),
                               ('moneyOnly');