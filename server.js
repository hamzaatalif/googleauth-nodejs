require("dotenv").config();
// dependencies
const express = require("express");
const morgan = require("morgan");
const ejs = require("ejs");
const path = require("path")
// local dependencies
const connectDB = require("./db/connect");

// initialize
const app = express();
const PORT = process.env.PORT || 6060;
// middlewares
app.use(morgan("dev"));
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"./views"));
// routes
const appRoutes = require("./routes/appRoutes");

app.use("/",appRoutes);

// start
const start = async() => {
    try {
        await connectDB();
        console.log("DB connected...");
        app.listen(PORT,()=>{console.log(`Server is listening on http://localhost:${PORT}/`)});
    } catch (error) {
        console.log(error);
    }
}

start();