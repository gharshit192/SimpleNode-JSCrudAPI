var express = require('express');
const res = require('express/lib/response');
var app = express.Router();
var userService = require("../services/UserService")


app.post("/user",  (req, res) => {
    console.log(req.body)
    var data = req.body
    userService.saveUser(data).then(_ => {
        res.send(_);
    })
    .catch(e => {
        console.log(e)
        res.status(400).send("Error While Adding User " + e);
    });
});

app.get("/user", (req, res) => {
    var id = req.query.id
    console.log(id)
    userService.getUserById(id).then(data => {
        res.send(data);
    })
    .catch( e =>{
        console.log(e)
        res.status(400).send("Error While Getting User By Id" + e);
    });
});

app.put("/user",  (req, res) => {
    var id = req.query.id
    var data = req.body
    userService.updateUser(id, data).then(_ => {
        res.send(_);
    })
    .catch(e => {
        console.log(e)
        res.status(400).send("Error While Updating User " + e);
    });
});


app.delete("/user", (req,res) =>{
    var id = req.query.id
    console.log(id)
    userService.deleteUSerById(id).then(data =>{
        res.send(data) 
    }).catch(e =>{
        res.send("Error While Delteing User By Id", e)
    })
});



module.exports = app
