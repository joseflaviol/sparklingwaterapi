const express = require("express");
const bodyParser = require("body-parser");
const db_utils = require("./src/utils/db_utils");
const routes = require("./src/routes/routes");

const app = express();

//db_utils.sync();

app.use(bodyParser.json());
app.use("/api", routes);

app.listen(process.env.PORT || 3000, () => {
    console.log("SERVER ON");
});
