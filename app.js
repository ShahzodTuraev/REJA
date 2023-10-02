// console.log('Web serverni boshlash');
const express = require("express");
const app = express();

const fs = require("fs");
// MongoDB chaqirish
const db = require("./server").db();

let user;
fs.readFile("database/user.json", "utf-8", (err, data)=>{
    if(err){
        console.log("ERROR:", err);
    }else{
        user = JSON.parse(data);
    }
});

// 1: Kirish kodlari. expressga kirib kelayotgan ma'lumotlarga bog'liq bo'lgan kodlar yoziladi.
app.use(express.static("public")); // chrome express ga request qilayotgan payti public folderni clientlarga ochib beradi.
app.use(express.json()); //kirib kelayotgan json farmatidagi datani objectga ugirib beradi.
app.use(express.urlencoded({extended: false})); //html dan form request (form data post qilsa express qabul qilib oladi)

// 2 Session larga bog'liq bo'lgan codelar yoziladi

// 3 View code
app.set("views", "views");
app.set("view engine", "ejs");

// 4 Routing code
app.post('/create-item', (req, res)=>{
    console.log("user entered /create-item");
    const new_reja = req.body.reja;
    db.collection("plans").insertOne({reja: new_reja}, (err, data) => {
        console.log(data.ops);
        res.json(data.ops[0]);
    });
});
app.get("/author", (req, res)=>{
    res.render("author", {user: user});
})
app.get("/", function(req, res){
    console.log("user entered /");
    db.collection("plans")
    .find()
    .toArray((err, data) => {
        if(err){
            console.log(err);
            res.end("something went wrong");
        }else{
            res.render("reja", {items: data});
        }
    });
});

module.exports = app;
