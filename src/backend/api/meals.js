const express = require("express");
const router = express.Router();
const knex = require("../database");

router.get("/titles", async (request, response) => {
  try {
    // knex syntax for selecting things. Look up the documentation for knex for further info
    const titles = await knex("Meal").select("title");
    response.json(titles);
  } catch (error) {
    throw error;
  }
});

router.post("/", async (request, response) => {
  try {
    // knex syntax for selecting things. Look up the documentation for knex for further info
    const meals = await knex("Meal").insert(request.body);
    response.send('it added');
  } catch (error) {
    throw error;
  }
});

router.get("/:id", async (request, response) => {
  try {
    // knex syntax for selecting things. Look up the documentation for knex for further info
    const meals = await knex("Meal").where('id', parseInt(request.params.id));
    response.json(meals);
  } catch (error) {
    throw error;
  }
});

router.put("/:id", async (request, response) => {
  try {
    // knex syntax for selecting things. Look up the documentation for knex for further info
    const meals = await knex("Meal").where('id', parseInt(request.params.id)).update(request.body);
    response.json(meals);
  } catch (error) {
    throw error;
  }
});

router.delete("/:id", async (request, response) => {
  try {
    // knex syntax for selecting things. Look up the documentation for knex for further info
    const meals = await knex("Meal").where('id', parseInt(request.params.id)).del();
    response.json(meals);
  } catch (error) {
    throw error;
  }
});

router.get("/", async (request, response) => {
  const query = request.query
  console.log(request.query)
  if (Object.keys(query).length == 0) {
    const meals = await knex("Meal");
    return response.json(meals);
  }
  if (request.query.maxPrice && !isNaN(parseInt(request.query.maxPrice)) && request.query.limit) {
    const meals = await knex("Meal").where('price', '<=', parseInt(request.query.maxPrice)).limit(parseInt(request.query.limit))
    return response.json(meals);
  }
  if (request.query.maxPrice && !isNaN(parseInt(request.query.maxPrice))) {
    const meals = await knex("Meal").where('price', '<=', parseInt(request.query.maxPrice))
    return response.json(meals);
  }
  else if (request.query.title) {
    const meals = await knex("Meal").where('title', 'like', `%${request.query.title}%`)
    return response.json(meals);
  }
  else if (request.query.createdAfter && isNaN(Date.parse(request.query.createdAfter))) {
    const meals = await knex("Meal").where('created_date', '>', request.query.createdAfter)
    return response.json(meals);
  }
  else if (request.query.limit) {
    const meals = await knex("Meal").limit(parseInt(request.query.limit))
    return response.json(meals);
  }
  else if (request.query.availableReservations) {
    const meals = await knex("Meal").join('Reservation', { 'Meal.id': 'Reservation.meal_id' })
      .select('Meal.id', 'Meal.title', "Meal.when", 'Meal.max_reservations  as Total_reservations',
        knex.raw(
          'Meal.max_reservations - sum(Reservation.number_of_guests) as "No_of_available_reservations"',
        ))
      .sum('Reservation.number_of_guests as reservations_booked')
      .having('Meal.max_reservations', '>', "sum('Reservation.number_of_guests')")
      .groupBy('Reservation.meal_id');
    return response.json(meals);
  }
  else {
    return response.status(404).send("Given query does not find any data")
  }
});


module.exports = router;
