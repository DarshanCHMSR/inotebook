const mongoose = require('mongoose');
const mongoURI ="mongodb://localhost:27017/inotebook";
const connectToMongo = ()=>{
    mongoose.connect(mongoURI,{
    
    },).then(()=>console.log("connected successfully"))
    .catch((err)=>{console.log(err)})
};
 module.exports= connectToMongo;