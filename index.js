const express = require('express');
const dotenv = require('dotenv');
const bodyparser  =require('body-parser');
const mongoose = require('mongoose');

dotenv.config({path:'config.env'});

const Port = process.env.Port || 8080

const app = express();

mongoose.Promise = global.Promise;

app.use(bodyparser.json());

app.use(bodyparser.urlencoded({extended:true}));

app.listen(Port,()=>{
    console.log(`Port is running on ${Port}`)
})

//Connecting MongoDB
mongoose.connect(process.env.MongoLink,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(()=>{
    console.log("database connected succesfully")
})
.catch((err)=>[
    console.log("Database not connected",err)
])

//Setting Routes
require('./Routes/routes')(app);