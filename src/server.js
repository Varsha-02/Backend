
const express = require('express');
const app = express();

const mongoose = require('mongoose');
const login = require('./models/login')
const bodyparser = require('body-parser');
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

const mongodbpath = "mongodb+srv://msvarsha02:Varsha2820@cluster0.7d53sa6.mongodb.net/appdb";
mongoose.connect(mongodbpath).then(function()
{
    app.get("/",function(req, res){
        const response = { message: "API Works" };
        res.json(response);
    });
    const loginrouter = require("./routes/login");
    app.use("./login", loginrouter);
});

const PORT = process.env.PORT || 9000;
app.listen(PORT, function() {
    console.log("Server started at PORT : " + PORT);
});