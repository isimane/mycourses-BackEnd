//Configuring Dotenv to use environment variables from .env file
require("dotenv").config();

//Creating express server
const express = require("express");
const app = express();

// Specifying the port
const port = process.env.PORT || 5000;

//Using Express.JSON
app.use(express.json());

// CORS Handler
const cors = require("cors");
app.use(cors());

// Disabling the X-Powered-By header
app.disable("x-powered-by");

// use helmet 
const helmet = require("helmet");
app.use(helmet())


const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100 // Limit each IP to 100 requests per window
});

app.use(limiter);


// routes
app.use("/api/user");
app.use("/api/course");



//Listening om the port
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
