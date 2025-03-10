DROP TABLE IF EXISTS `option_items`;

CREATE TABLE `option_items` (
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
    `options_id` CHAR(50) NOT NULL,
    `name` VARCHAR(100) NOT NULL,
    `price` INT NOT NULL DEFAULT 0,
    `seq` INT NOT NULL DEFAULT 0,
    `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `updated_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (`id`)
);
