
const express = require('express');
const app = express();


const mongoose = require('mongoose');
const login = require('./models/login')
const bodyparser = require('body-parser');
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

mongoose.connect("mongodb+srv://msvarsha02:Varsha2820@cluster0.7d53sa6.mongodb.net/appdb").then(function()
{
    app.get("/",function(req, res){
        const response = { message: "API Works" };
        res.json(response);
    });
    // const loginrouter = require("./routes/login");
    // app.use("./login", loginrouter);
    app.post("/login/list/",async function(req, res){
        var val =  await login.find( );
        res.json(val);
    });
    
    app.post("/login/add",async function(req, res){
       await login.deleteOne({id: req.body.id});
       const newval = new login({
        id: req.body.id,
        Name: req.body.Name,
        Phno: req.body.Phno,
        Email: req.body.Email
       });
        await newval.save();
        const response = { message: "User Added"};
        res.json(response);
    });
    
    app.post("/login/delete", async function(req, res) {
        await login.deleteOne({id: req.body.id});
        const response = { message: "User Deleted"};
        res.json(response);
    
    }) ;
});


app.listen(5000, function() {
    console.log("Server started at PORT : 5000");
});