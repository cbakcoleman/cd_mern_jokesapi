// 2. import mongoose (from node_modules, we installed it), require mongoose
const mongoose = require("mongoose");
const db_name = "jokesapi";


// instead of hardcoding database name, can concatenate and declare db_name above
// else mongoose.connect("mongodb://localhost/DBNAME", {......})
mongoose.connect("mongodb://localhost/" + db_name, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    // Don't forget to use backticks for string interpolation
    .then(() => console.log(`Established a connection to the ${db_name} database`))
    .catch(error => console.log("Something went wrong when connecting to the database", error))

// This config file attaches project to a databse