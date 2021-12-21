// dependencies
const express = require("express");
const morgan = require("morgan");
// local dependencies
const connectDB = require("./db/connect");

// initialize
const app = express();
const PORT = process.env.PORT || 6060;
// middlewares
app.use(morgan("dev"))
// start
const start = async() => {
    try {
        connectDB();
        console.log("DB connected...");
        app.listen(PORT,()=>{console.log(`Server is listening on http://localhost:${PORT}/`)});
    } catch (error) {
        console.log(error)
    }
}

start();