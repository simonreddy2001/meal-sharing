const express = require("express");
const router = express.Router();
const knex = require("../database");

router.get("/", async (request, response) => {
    try {
        // knex syntax for selecting things. Look up the documentation for knex for further info
        const reservations = await knex("Reservation");
        response.json(reservations);
    } catch (error) {
        throw error;
    }
});

router.post("/", async (request, response) => {
    try {
        // knex syntax for selecting things. Look up the documentation for knex for further info
        const reservations = await knex("Reservation").insert(request.body);
        response.send('it added');
    } catch (error) {
        throw error;
    }
});

router.get("/:id", async (request, response) => {
    try {
        // knex syntax for selecting things. Look up the documentation for knex for further info
        const reservations = await knex("Reservation").where('id', parseInt(request.params.id));
        response.json(reservations);
    } catch (error) {
        throw error;
    }
});

router.put("/:id", async (request, response) => {
    try {
        // knex syntax for selecting things. Look up the documentation for knex for further info
        const reservations = await knex("Reservation").where('id', parseInt(request.params.id)).update(request.body);
        response.json(reservations);
    } catch (error) {
        throw error;
    }
});

router.delete("/:id", async (request, response) => {
    try {
        // knex syntax for selecting things. Look up the documentation for knex for further info
        const reservations = await knex("Reservation").where('id', parseInt(request.params.id)).del();
        response.json(reservations);
    } catch (error) {
        throw error;
    }
});


module.exports = router;