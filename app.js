const express = require('express')
const router = require('./router/api')
const app = new express()
require("dotenv").config();
const cors = require('cors');
const bodyParser = require('body-parser')



const mongoose = require ('mongoose')
app.use(router);
app.use(cors());
app.use (bodyParser.json())


mongoose.connect(process.env.DATABASE)
.then(() => {
   console.log("All ok database") 
}).catch((err) => {
    console.log(err)
});




app.use("/api/v1", router)




// app.use("*",(req,res) => {
//     res.status(404).json({Msg : "Fail" , data: "No data"})
// })


module.exports = app;