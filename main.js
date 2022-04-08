const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');
const db_utils = require("./src/utils/db_utils");
const routes = require("./src/routes/routes");

const app = express();

//db_utils.sync();

app.use(cors());
app.use(bodyParser.json());
app.use("/api", routes);

app.listen(process.env.PORT || 3000, () => {
    console.log("SERVER ON");
});
