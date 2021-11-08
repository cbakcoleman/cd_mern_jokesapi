// 6. Create Routes to execute functions to the DB

// import controller object into routes
const JokeController = require("../controllers/joke.controllers");
console.log("------", JokeController);

// destructure keys from controller, can just call on as functions (see below)
const {findAllJokes, findOneJoke, updateJoke, createNewJoke, deleteJoke} = require("../controllers/joke.controllers");
// Exporting anonymous function
module.exports = app => {
    // first param url, second param callback function, remove 'JokeController.' portion see above line 6 - 7
    // app.get("/api/jokes", JokeController.findAllJokes);
    app.get("/api/jokes", findAllJokes);
    app.get("/api/jokes/:id", findOneJoke);
    app.put("/api/jokes/:id", updateJoke);
    app.post("/api/jokes/new", createNewJoke);
    app.delete("/api/jokes/update/:id", deleteJoke);
}