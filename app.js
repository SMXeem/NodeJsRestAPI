const express= require('express');
const mongoose=require('mongoose');
const cors= require('cors');

const app = express();
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.json());

//Middleware
const postsROuter= require('./posts');
app.use("/posts",postsROuter);

//routes
app.get('/',(req,res) => {
    res.send("We are on home");
});


//connnet to db
mongoose.connect('mongodb://localhost:27017/School',{ useUnifiedTopology: true,useNewUrlParser: true },()=>{
    console.log("connected to db");
});

//listening the servere
app.listen(5050);