const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

const personsRouter = require("./routes/persons");

require("dotenv/config");

// body parser middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const port = process.env.PORT || 5000;

// Home route
app.get("/", (req, res) => {
  res.send("Home");
});

// connect to DB
const uri = process.env.DB_CONNECTION;
mongoose.connect(
  uri,
  { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true },
  () => console.log("MongoDN connection established!")
);

// middlewares
app.use("/persons", personsRouter);

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
