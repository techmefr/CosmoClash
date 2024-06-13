DROP DATABASE IF EXISTS dbCosmoClash;

CREATE DATABASE dbCosmoClash;

USE dbCosmoClash;

CREATE TABLE `user`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `username` VARCHAR(80) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `password` VARCHAR(255) NOT NULL,
    `admin` BOOLEAN NOT NULL,
    `action_id` BIGINT NOT NULL,
    `alliance_id` BIGINT NOT NULL,
    `planet_id` BIGINT NOT NULL
);
CREATE TABLE `action`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(255) NOT NULL,
    `begin` DATETIME NOT NULL,
    `intermed` DATETIME NULL,
    `end` DATETIME NOT NULL,
    `result` BIGINT NULL,
    `ressourcesWin` BIGINT NULL,
    `ressourcesLose` BIGINT NULL,
    `shipLose` BIGINT NULL,
    `moneyWin` BIGINT NULL,
    `moneyLose` BIGINT NULL,
    `history` TEXT NULL
);
CREATE TABLE `ship_technology`(
    `id` BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `ship_id` BIGINT NOT NULL,
    `technology_id` BIGINT NOT NULL
);
CREATE TABLE `ship`(
    `id` BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(80) NOT NULL,
    `carateristic_id` BIGINT NOT NULL, // TODO! Refaire ceci
    `position_id` BIGINT NOT NULL
);
CREATE TABLE `position`(
    `id` BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `coordX` BIGINT NOT NULL,
    `coordY` BIGINT NOT NULL,
    `coordZ` BIGINT NOT NULL // TODO! à confirmer sinon juste 2D on peut laisser pour plus tard
);
CREATE TABLE `ressource`(
    `id` BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(25) NOT NULL,
    `icon` VARCHAR(255) NOT NULL
);
CREATE TABLE `planet`(
    `id` BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(80) NOT NULL,
    `ressources_id` BIGINT NOT NULL,
    `position_id` BIGINT NOT NULL,
    `ship_id` BIGINT NOT NULL,
    `position_id` BIGINT NOT NULL
);
CREATE TABLE `planet_ressource`(
    `id` BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `planet_id` BIGINT NOT NULL,
    `ressource_id` BIGINT NOT NULL
);
CREATE TABLE `alliance`(
    `id` BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(255) NOT NULL,
    `color` VARCHAR(255) NOT NULL
);
CREATE TABLE `technology`(
    `id` BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(255) NOT NULL
);
ALTER TABLE
    `ship` ADD CONSTRAINT `ship_position_id_foreign` FOREIGN KEY(`position_id`) REFERENCES `position`(`id`);
ALTER TABLE
    `user` ADD CONSTRAINT `user_planet_id_foreign` FOREIGN KEY(`planet_id`) REFERENCES `planet`(`id`);
ALTER TABLE
    `planet_ressource` ADD CONSTRAINT `planet_ressource_planet_id_foreign` FOREIGN KEY(`planet_id`) REFERENCES `planet`(`id`);
ALTER TABLE
    `planet_ressource` ADD CONSTRAINT `planet_ressource_ressource_id_foreign` FOREIGN KEY(`ressource_id`) REFERENCES `ressource`(`id`);
ALTER TABLE
    `planet` ADD CONSTRAINT `planet_ship_id_foreign` FOREIGN KEY(`ship_id`) REFERENCES `ship`(`id`);
ALTER TABLE
    `ship_technology` ADD CONSTRAINT `ship_technology_ship_id_foreign` FOREIGN KEY(`ship_id`) REFERENCES `ship`(`id`);
ALTER TABLE
    `planet` ADD CONSTRAINT `planet_position_id_foreign` FOREIGN KEY(`position_id`) REFERENCES `position`(`id`);
ALTER TABLE
    `user` ADD CONSTRAINT `user_action_id_foreign` FOREIGN KEY(`action_id`) REFERENCES `action`(`id`);
ALTER TABLE
    `ship_technology` ADD CONSTRAINT `ship_technology_technology_id_foreign` FOREIGN KEY(`technology_id`) REFERENCES `technology`(`id`);
ALTER TABLE
    `user` ADD CONSTRAINT `user_alliance_id_foreign` FOREIGN KEY(`alliance_id`) REFERENCES `alliance`(`id`);