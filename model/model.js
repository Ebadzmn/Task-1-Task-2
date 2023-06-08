const mongoose = require ('mongoose');

const Product = mongoose.Schema({

Name : {type:String},
Price : {type:Number},
Discription : {type:String}
},

{timestamps: true,versionkey: false})


const ProducModel = mongoose.model ('Product' , Product)


module.exports = ProducModel