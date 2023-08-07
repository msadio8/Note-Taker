const express = require("express");
const path = require("path");
const dbData = require("./db/db.json");

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);
