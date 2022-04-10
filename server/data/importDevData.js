const fs = require("fs");

const dotenv = require("dotenv");
const mongoose = require("mongoose");

const Tour = require("../models/tourModel");

dotenv.config({ path: "./.env" });

// will log evrything in the .env file on the terminal

const DB = process.env.DATABASE.replace(
  "<password>",
  process.env.DATABASE_PASSWORD
);

// Database Connection URL
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    // useCreateIndex: true,
    // useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(`Connection with DataBase successful  🦾 🤠`);
  });

//   READ JSON FILE FROM tourData.json and load documents into DB.
const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/tourData.json`, `utf-8`)
);

const importData = async () => {
  try {
    const tourData = await Tour.create(tours);
    console.log("Data loaded to DB successfuly");
    console.log(tourData);
    process.exit();
  } catch (err) {
    console.log(err);
  }
};

const deleteAllData = async () => {
  try {
    const tourData = await Tour.deleteMany();
    console.log("Data loaded to DB successfuly");
    console.log(tourData);
    process.exit();
  } catch (err) {
    console.log(err);
  }
};
// calling above functions that will interact with cmd line and run the function.

if (process.argv[2] === "--import") {
  importData();
} else if (process.argv[2] === "--delete") {
  deleteAllData();
}
