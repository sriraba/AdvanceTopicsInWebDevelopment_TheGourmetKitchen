const mongoose = require("mongoose");

const DB_URL =
"mongodb+srv://purvisha08:purvisha08@tutorial6.uwf0pof.mongodb.net/gormetkitchen";

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
