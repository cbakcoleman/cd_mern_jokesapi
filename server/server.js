// 1. set up server using three lines below and app.listen(PORT......)
const express = require("express");
const app = express();
const PORT = 3000;

// MIDDLEWARE
app.use(express.json(), express.urlencoded({extended: true}))
// This is the only server running in entire file (nodemon server.js), so if want to execute something from another file (see mongoose.config.js) then have to import that file into server.js
// 3. connect to mongodb, require file below
require("./config/mongoose.config");

app.listen(PORT, () => console.log(`Server up on port: ${PORT}`))