const express = require("express");
const routes = require("./routes");
require("dotenv").config();
const sequelize = require("./config/connection");
const exphbs = require("express-handlebars");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(routes);

sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
});
