"use strict";
const http = require("http");
const quotes = require("./quotes")
http.createServer((req, res) => {
    const index = Math.floor(Math.random() * quotes.length);
 res.writeHead(200, {"Content-type": "text/html"});
 res.write(quotes[index]);
 res.end();
}).listen(8888);

//const quotes =["Hello" "World"];

// console.log("Hello, Node.js!");
// // node hellonode.js

// const quotes = ["Hello", "World"];
// randomQuote = ["Food is Medicine", "You are what you eat"]
// console.log(randomQuote);