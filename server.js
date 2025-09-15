const path = require("path");
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const port = process.env.PORT || 4000;
const connectDB = require("./config/db");

connectDB();

const app = express();

// Static Folder
app.use(express.static(path.join(__dirname, "public")));

// Body parse middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Cors middleware
app.use(
  cors({
    origin: ["http://localhost:4000", "http://localhost:3000"],
    credentials: true,
  })
);

// Default route for the root path
app.get("/", (req, res) => {
  res.send({ message: "Welcome to the RandomIdeas API" });
});

// Import the ideasRouter and use it for the "/api/ideas" route
const ideasRouter = require("./routes/ideas");
app.use("/api/ideas", ideasRouter);

// Start the server
app.listen(port, () => {
  console.log(`Server Listening on port ${port}`);
});
