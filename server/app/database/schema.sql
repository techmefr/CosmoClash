DROP DATABASE IF EXISTS dbCosmoClash;

CREATE DATABASE dbCosmoClash;

USE dbCosmoClash;
-- test
CREATE TABLE technologies (
    `id` INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    `name` VARCHAR(100) NOT NULL
);
CREATE TABLE ships_technologies(
    `id` INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    `technology_id` INT NULL DEFAULT NULL,
    `ship_id` INT NULL DEFAULT NULL
);
CREATE TABLE ships (
    `id` INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    `name` VARCHAR(100)
);

CREATE TABLE planets_ships (
    `id` INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    `ship_id` INT NULL DEFAULT NULL,
    planet_id INT NULL DEFAULT NULL
);

CREATE TABLE resources (
    `id` INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    `name` VARCHAR(100) NOT NULL,
    `icon` VARCHAR(100) NOT NULL
);

CREATE TABLE planets_resources(
    `id` INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    `resource_id` INT NOT NULL,
    `planet_id` INT NOT NULL
);

CREATE TABLE positions (
    `id` INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    coord_x BIGINT NOT NULL,
    coord_y BIGINT NOT NULL
);
CREATE TABLE alliances (
    `id` INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    `name` VARCHAR(100) NULL DEFAULT NULL,
    `color` VARCHAR(100) NULL DEFAULT NULL
);

CREATE TABLE planets (
    `id` INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    `name` VARCHAR(100) NOT NULL,
    `position_id` INT NULL DEFAULT NULL
);

CREATE TABLE users_planets (
    `id` INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    `user_id` INT NULL DEFAULT NULL,
    `planet_id` INT NULL DEFAULT NULL
);

CREATE TABLE users (
    `id` INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    `username` VARCHAR(100) NOT NULL,
    `email` VARCHAR(150) NOT NULL UNIQUE,
    `password` VARCHAR(100) NOT NULL UNIQUE,
    `alliance_id` INT NULL DEFAULT NULL
);

CREATE TABLE users_actions (
    `id` INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    `user_id` INT NULL DEFAULT NULL,
    `action_id` INT NULL DEFAULT NULL
);

CREATE TABLE actions (
    `id` INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    `name` BIGINT NOT NULL,
    `begin` DATETIME DEFAULT NOW(),
    `intermed` DATETIME NULL DEFAULT NULL,
    `end` DATETIME,
    `result` BIGINT NOT NULL,
    `resources_win` BIGINT NOT NULL,
    `resources_lose` BIGINT NOT NULL,
    `ship_lose` BIGINT NOT NULL,
    `money_win` BIGINT NOT NULL,
    `money_lose` BIGINT NOT NULL,
    `history` TEXT NULL DEFAULT NULL
);

/*
    ALTER TABLES
*/

# OneToMany

-- users
ALTER TABLE users ADD CONSTRAINT FK_ALLIANCES FOREIGN KEY (`alliance_id`) REFERENCES alliances(`id`)
    ON DELETE SET NULL;

-- users_planets
ALTER TABLE users_planets ADD CONSTRAINT FK_PLANETS_USERS FOREIGN KEY (`user_id`) REFERENCES users(`id`)
    ON DELETE SET NULL;

# ManyToMany
-- users_actions
ALTER TABLE users_actions ADD CONSTRAINT FK_ACTIONS_USERS FOREIGN KEY (`user_id`) REFERENCES users(`id`)
    ON DELETE SET NULL;
ALTER TABLE users_actions ADD CONSTRAINT FK_ACTIONS FOREIGN KEY (`action_id`) REFERENCES actions(`id`)
    ON DELETE SET NULL;

-- planets
ALTER TABLE planets ADD CONSTRAINT FK_POSITIONS FOREIGN KEY (`position_id`) REFERENCES positions(`id`)
    ON DELETE SET NULL;
ALTER TABLE users_planets ADD CONSTRAINT FK_PLANETS FOREIGN KEY (`planet_id`) REFERENCES planets(`id`)
    ON DELETE SET NULL;

-- planets_resources
ALTER TABLE planets_resources ADD FOREIGN KEY (`resource_id`) REFERENCES resources(`id`);
ALTER TABLE planets_resources ADD FOREIGN KEY (`planet_id`) REFERENCES planets(`id`);

-- planets_ships
ALTER TABLE planets_ships ADD CONSTRAINT FK_PLANETS_RESOURCES FOREIGN KEY (`ship_id`)
    REFERENCES ships(`id`) ON DELETE SET NULL;
ALTER TABLE planets_ships ADD CONSTRAINT FK_RESOURCES_PLANETS FOREIGN KEY (`planet_id`)
    REFERENCES planets(`id`) ON DELETE SET NULL;

-- ships_technologies
ALTER TABLE ships_technologies ADD CONSTRAINT FK_TECHNOLOGIES_DELETE FOREIGN KEY (`technology_id`)
    REFERENCES technologies(`id`) ON DELETE SET NULL;
ALTER TABLE ships_technologies ADD CONSTRAINT FK_SHIPS_DELETE FOREIGN KEY (`ship_id`)
    REFERENCES ships(`id`) ON DELETE SET NULL;