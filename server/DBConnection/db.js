const mongoose = require("mongoose");

const DB_URL =
"mongodb+srv://gaurmet:gaurmet@gaurmet-database.l9jb9am.mongodb.net/gaurmet-database?retryWrites=true&w=majority";

const warningParam={ useNewUrlParser: true };

const dbConnection = () => {
 mongoose
    .connect(DB_URL, warningParam)
    .then(() => {
      console.log("DB connection has been made");
    })
    .catch((error) => {
      console.log("Error while making db connection", error);
    });
};

module.exports = dbConnection;
