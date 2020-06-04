// require the Express module
const express = require("express");

//creates a new router object
const routes = express.Router();
// step 4 - make instance
const pool = require("./connection");

routes.get("/todo", (request, response) => {
    pool.query("SELECT * FROM tasks").then(result => {
        response.json(result.rows);
    })
})

routes.post("/todo", (request, response) => {
    pool.query("INSERT INTO tasks(task, completed) VALUES ($1::varchar, $2::boolean)", [request.body.task, request.body.completed]).then(() => {
        response.json(request.body) //sends back what was added
    })
});

routes.delete("/todo", (request, response) => {
    pool.query("DELETE FROM tasks WHERE id=$1::int", [request.params.id]).then(() => {
        response.sendStatus(200).json(`${request.params.id}`);
    });
})

module.exports = { routes };