const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const message = require("./routes/message");
const connectDB = require("./config/db");

connectDB();
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("home page");
});

app.use("/api/formData", message);

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`server is listening on port:${port}`);
});
