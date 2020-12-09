const express= require('express');
const mongoose=require('mongoose');
const cors= require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(bodyParser.json());

//Middleware
const postsROuter= require('./router/posts.router');
const studentRouter = require('./router/Students.router');

app.use("/posts",postsROuter);
app.use("/student",studentRouter);

//routes
app.get('/',(req,res) => {
    res.send("We are on home");
});


//connect to db
mongoose.connect('mongodb://localhost:27017/School',{ useUnifiedTopology: true,useNewUrlParser: true },()=>{
    console.log("connected to db");
});

//listening the server
app.listen(5050);