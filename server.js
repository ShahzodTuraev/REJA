// console.log('Web serverni boshlash');
const express = require("express");
const app = express();
const http = require('http');

// 1: Kirish kodlari. expressga kirib kelayotgan ma'lumotlarga bog'liq bo'lgan kodlar yoziladi.
app.use(express.static("public")); // chrome express ga request qilayotgan payti public folderni clientlarga ochib beradi.
app.use(express.json()); //kirib kelayotgan json farmatidagi datani objectga ugirib beradi.
app.use(express.urlencoded({extended: true})); //html dan form request (form data post qilsa express qabul qilib oladi)

// 2 Session larga bog'liq bo'lgan codelar yoziladi

// 3 View code
app.set("views", "views");
app.set("view engine", "ejs");

// 4 Routing code
app.get("/hello", function(req, res){
    res.end(`<h1 style="background: coral">Hello World by Shon</h1>`);
});
app.get("/gift", function(req, res){
    res.end(`<h1 style="background: coral">You are in the gifts page</h1>`);
});

const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function(){
    console.log(`The server is running successfully on port: ${PORT}`);
});

