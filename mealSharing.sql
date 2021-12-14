SET
  NAMES utf8mb4;
CREATE Database mealSharing;
Use mealSharing;
create Table Meal(
    `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `title` varchar(255),
    `description` text,
    `location` varchar(255),
    `when` datetime,
    `max_reservations` int(50),
    `price` decimal,
    `created_date` date
  );
create Table Reservation(
    `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `number_of_guests` int(50),
    `meal_id` int(10) unsigned,
    `created_date` date,
    `contact_phonenumber` varchar(255),
    `contact_name` varchar(255),
    `contact_email` varchar(255),
    CONSTRAINT `fk_meal_reservation` FOREIGN KEY (`meal_id`) REFERENCES `Meal` (`id`)
  );
create Table Review(
    `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `title` varchar(255),
    `description` text,
    `meal_id` int(10) unsigned,
    `stars` int(50),
    `created_date` date,
    CONSTRAINT `fk_meal_review` FOREIGN KEY (`meal_id`) REFERENCES `Meal` (`id`)
  );
INSERT INTO
  Meal(
    title,
    description,
    location,
    `when`,
    max_reservations,
    price,
    created_date
  )
VALUES
  (
    'KFC',
    'fried chicken',
    'valby',
    '2021-07-23',
    11,
    200,
    '2021-02-23'
  );
INSERT INTO
  Meal(
    title,
    description,
    location,
    `when`,
    max_reservations,
    price,
    created_date
  )
VALUES
  (
    'BurgerKing',
    'burgers with beef',
    'koge',
    '2021-07-30',
    '6',
    '300',
    '2021-01-30'
  );
INSERT INTO
  Meal(
    title,
    description,
    location,
    `when`,
    max_reservations,
    price,
    created_date
  )
VALUES
  (
    'Mcdonalds',
    'burgers with beef and chicken',
    'odence',
    '2021-07-20',
    '8',
    '400',
    '2021-01-20'
  );
INSERT INTO
  Meal(
    title,
    description,
    location,
    `when`,
    max_reservations,
    price,
    created_date
  )
VALUES
  (
    'Maxburger',
    'copied from mcd and bk',
    'arhus',
    '2021-07-15',
    '3',
    '250',
    '2021-01-15'
  );
INSERT INTO
  Meal(
    title,
    description,
    location,
    `when`,
    max_reservations,
    price,
    created_date
  )
VALUES
  (
    'subway',
    'healthy food',
    'alborg',
    '2021-07-15',
    '6',
    '350',
    '2021-07-16'
  );
select
  *
FROM
  Meal;
-- Get a meal with any id, fx 1
SELECT
  *
from
  Meal
WHERE
  id = 6;
-- Update a meal with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE
  Meal
SET
  `title` = 'KFC fried chicken',
  `price` = 35
WHERE
  id = 6;
-- Delete a meal with any id, fx 1
DELETE FROM
  Meal
WHERE
  id = 6;
INSERT INTO
  Reservation (
    number_of_guests,
    meal_id,
    created_date,
    contact_phonenumber,
    contact_name,
    contact_email
  )
VALUES
  (
    4,
    1,
    '2021-08-12',
    '23456712',
    'remo',
    'remo@dk.com'
  );
INSERT INTO
  Reservation (
    number_of_guests,
    meal_id,
    created_date,
    contact_phonenumber,
    contact_name,
    contact_email
  )
VALUES
  (
    4,
    2,
    '2021-08-14',
    '23456723',
    'demo',
    'demo@dk.com'
  );
INSERT INTO
  Reservation (
    number_of_guests,
    meal_id,
    created_date,
    contact_phonenumber,
    contact_name,
    contact_email
  )
VALUES
  (
    6,
    3,
    '2021-08-28',
    '23456734',
    'semo',
    'semo@dk.com'
  );
INSERT INTO
  Reservation (
    number_of_guests,
    meal_id,
    created_date,
    contact_phonenumber,
    contact_name,
    contact_email
  )
VALUES
  (
    5,
    4,
    '2021-08-30',
    '23456764',
    'zoom',
    'zoom@dk.com'
  );
INSERT INTO
  Reservation (
    number_of_guests,
    meal_id,
    created_date,
    contact_phonenumber,
    contact_name,
    contact_email
  )
VALUES
  (
    5,
    5,
    '2021-08-03',
    '23456763',
    'bingo',
    'bingo@dk.com'
  );
select
  *
FROM
  Reservation;
-- Get a Reservation with any id, fx 1
SELECT
  *
from
  Reservation
WHERE
  id = 4;
-- Update a Reservation with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE
  Reservation
SET
  `number_of_guests` = 7,
  `contact_name` = 'Simon',
  `contact_email` = 'simon@dk.com'
WHERE
  id = 3;
-- Delete a Reservation with any id, fx 1
DELETE FROM
  Reservation
WHERE
  id = 5;
INSERT INTO
  Review (
    title,
    `description`,
    meal_id,
    stars,
    created_date
  )
VALUES
  ('nice', 'nice experience', 3, 5, '2021-07-25');
INSERT INTO
  Review (
    title,
    `description`,
    meal_id,
    stars,
    created_date
  )
VALUES
  (
    'good',
    'lovely food with best experience',
    4,
    4,
    '2021-07-26'
  );
INSERT INTO
  Review (
    title,
    `description`,
    meal_id,
    stars,
    created_date
  )
VALUES
  ('tastes good', 'awesome.', 2, 4, '2021-07-27');
INSERT INTO
  Review (
    title,
    `description`,
    meal_id,
    stars,
    created_date
  )
VALUES
  ('fine', 'delicious food', 2, 2, '2021-07-28');
INSERT INTO
  Review (
    title,
    `description`,
    meal_id,
    stars,
    created_date
  )
VALUES
  (
    'best',
    'enjoyed every bit of it',
    6,
    3,
    '2021-07-28'
  );
select
  *
FROM
  Review;
-- Get a Review with any id, fx 1
SELECT
  *
from
  Review
WHERE
  id = 4;
-- Update a Review with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE
  Review
SET
  `title` = 'super',
  `stars` = 5
WHERE
  id = 3;
-- Delete a Review with any id, fx 1
DELETE FROM
  Review
WHERE
  id = 5;
-- Additional queries
  -- Get meals that has a price smaller than a specific price fx 90
SELECT
  *
FROM
  Meal
WHERE
  price < 350;
-- Get meals that still has available reservations
SELECT
  Meal.id,
  Meal.title,
  Meal.max_reservations,
  Reservation.id AS reservation_id,
  Reservation.number_of_guests
FROM
  Meal
  LEFT JOIN Reservation ON Reservation.meal_id = Meal.id
WHERE
  Meal.max_reservations > (
    SELECT
      SUM(number_of_guests)
    FROM
      Reservation
    WHERE
      Reservation.meal_id = Meal.id
  )
ORDER BY
  Meal.id;
-- Get meals that partially match a title. Rød grød med will match the meal with the title Rød grød med fløde
SELECT
  *
FROM
  Meal
WHERE
  title LIKE '%burger%';
-- Get meals that has been created between two dates
SELECT
  *
FROM
  Meal
WHERE
  created_date > '2021-07-12'
  AND created_date < '2021-08-15';
-- Get only specific number of meals fx return only 5 meals
SELECT
  *
FROM
  Meal
ORDER BY
  price
LIMIT
  5;
-- Get the meals that have good reviews
SELECT
  *
FROM
  Meal
WHERE
  id IN (
    SELECT
      meal_id
    FROM
      Review
    WHERE
      stars = 4
  );
-- Get reservations for a specific meal sorted by created_date
SELECT
  *
FROM
  Reservation
WHERE
  meal_id IN (
    SELECT
      id
    FROM
      Meal
    WHERE
      title = 'fried chicken'
  )
ORDER BY
  created_date;
-- Sort all meals by average number of stars in the reviews
SELECT
  Meal.title,
  AVG(Review.stars) as Avg_stars
FROM
  Meal
  JOIN Review ON Meal.id = Review.meal_id
GROUP BY
  Meal.id
ORDER BY
  Avg_stars DESC;