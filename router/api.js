const express =require('express');
// const {Createprofile,Login}= require("../controller/ProfileCt")
const {insert,getAllPosts} = require("../controller/get")

const router =express.Router();

router.get("/Products", getAllPosts);

router.post("/Products", insert);



module.exports=router;