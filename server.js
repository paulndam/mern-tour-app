const dotenv = require("dotenv");

dotenv.config({ path: "./.env" });
const mongoose = require("mongoose");
const app = require("./server/express");

// will log evrything in the .env file on the terminal

const PORT = process.env.PORT || 4000;

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

const server = app.listen(PORT, () => {
  console.log(`Server is up and running on Port ${PORT}`);
});

process.on("unhandledRejection", (error) => {
  console.log(`---- Unhandled Rejection 😢 😢  Shutting down----`);
  console.log(error.name, error.message);
  server.close(() => {
    process.exit(1);
  });
});
