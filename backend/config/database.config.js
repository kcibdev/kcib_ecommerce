const mongoose = require("mongoose");

const connectToDatabase = () => {
  mongoose
    .connect(`${process.env.MONGO_URI}`)
    .then(() => console.log("DB Connection Successfull!"))
    .catch((err) => {
      console.log(err);
    });
};

module.exports = connectToDatabase;
