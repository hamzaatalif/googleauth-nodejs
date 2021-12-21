const mongoose = require("mongoose");

const connectDB = async()=>{
    try {
        await mongoose.createConnection("mongodb://localhost:27017/googleAuth",{
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
    } catch (error) {
        console.log(error)
    }
}

module.exports = connectDB;