const express = require('express');
const router = express.Router();

const login=require('./../models/login');
router.post("/list/",async function(req, res){
    var val =  await login.find( );
    res.json(val);
});

router.post("/add",async function(req, res){
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

router.post("/delete", async function(req, res) {
    await login.deleteOne({id: req.body.id});
    const response = { message: "User Deleted"};
    res.json(response);

}) ;
module.exports = router;