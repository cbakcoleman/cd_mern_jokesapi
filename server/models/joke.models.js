// 4. Create the mongoose schema
// import Mongoose to use to create schema

const mongoose = require("mongoose");

// using 'new' creates instance of Mongoose class
// Schema is method of Mongoose class
// Rules for entries into DB
const JokeSchema = new mongoose.Schema({
    setup: String,
    punchline: String
}, {timestamps: true})
// Second optional parameter of timestamps creates 'CreatedAt' and 'UpdatedAt'

// Return object from instantiating Mongoose Class
// The model, use to make actual queries to DB
const Joke = mongoose.model("Joke", JokeSchema);

// Export return object
module.exports = Joke;