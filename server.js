const mongoose = require("mongoose");
const dotenv = require("dotenv");

const connectToDB = function () {
    dotenv.config({ path: "./config.env" });
    const db = process.env.DATABASE;

    mongoose
        .connect(db)
        .then(() => {
            console.log("Database Connected");
        })
        .catch((err) => {
            console.log(err.message);
        });
};

module.exports = connectToDB;
