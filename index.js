require("express-async-errors");
const express = require("express");
const app = express();

require("./startup/routes")(app);
require("./startup/db")();

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening to port ${port}...`));
