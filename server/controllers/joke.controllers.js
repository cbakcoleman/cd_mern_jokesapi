// All CRUD operations
// import object (joke model) into controller
const Joke = require("../models/joke.models")

// instead of MERN/MongoDB/Mongoose/Express + Mongoose/5. Use the Mongoose Models to CRUD... 'module.exports... for each 
// instead of exporting each function, export an entire object that has keys with values as functions
module.exports = {
    // IMPORTANT - what is returned here is what we get in REACT
    // READ (ALL)
    findAllJokes : (req, res) => {
        // This function goes to the database to query
        Joke.find()
        // Convention that if catch response has two keys, then success response should have two keys also (instead of just res.json({jokes:allDaJokes})), both responses should be in a unified/similar manner
        .then(allDaJokes => res.json({ message: "Success!", jokes: AllDaJokes}))
        .catch(err => res.json({ message: "Pobody's Nerfect!", error: err}));
    },
    // READ (ONE)
    findOneJoke : (req, res) => {
        // specify 'byID' in method, then don't need to use _id: (key)
        // Joke.findOne({ _id: req.params.id })
        Joke.findOneById( req.params.id )
        .then(oneJoke => res.json({ message: "Success!", joke: oneJoke}))
        .catch(err => res.json({ message: "Pobody's Nerfect!", error: err}));
    },
    // CREATE 
    createNewJoke : (req, res) => {
        Joke.create(req.body)
        .then(newJoke => res.json({ message: "Success!", joke: newJoke }))
        .catch(err => res.json({ message: "Pobody's Nerfect!", error: err}));
    },
    // UPDATE
    updateJoke : (req, res) => {
        Joke.findOneByIdAndUpdate(req.params.id, req.body,
            // by default Mongoose does not run validators on update, need to explicitly say run validators and 'new:true' says return new object created, if not specified will return previous (un-updated) object
            { new: true, runValidators: true }
        )
            .then(updateJoke => res.json({ message: "Success!", joke: updatedJoke }))
            .catch(err => res.json({ message: "Pobody's Nerfect!", error: err}));
    },
    // DESTROYYYY
    deleteJoke : (req, res) => {
        Joke.findOneByIdAndDelete( req.params.id )
        .then(result => res.json({ message: "Success!", result: result }))
        .catch(err => res.json({ message: "Pobody's Nerfect!", error: err}));
    }
}

// We will import these controllers  into our routes to query the DB ( I think! )