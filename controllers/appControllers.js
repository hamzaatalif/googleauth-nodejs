const path = require("path");

const getIndex = async(req,res)=>{
    try {
        res.render(path.join(__dirname,"../views/index.ejs"),{
            msg: "Hello from controllers"
        })
    } catch (error) {
        console.log(error)
    }
}


module.exports = {getIndex}