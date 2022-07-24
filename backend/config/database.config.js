const mongoose = require("mongoose");

const connectToDatabase = () => {
  mongoose
    .connect(`${process.env.MONGO_URI}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("DB Connection Successfull!"))
    .catch((err) => {
      console.log(err);
    });
};

module.exports = connectToDatabase;
