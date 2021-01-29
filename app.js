const express = require("express");
const fs = require("fs");
const app = express();

app.use(express.json());

var books = ["Mistborn"]

app.get("/", (req, res) => {
    let ind = fs.readFileSync(__dirname + "/index.html")
    
    const s = books.reduce((a, c) => {
        return `${a}<li>${c}</li>`
    }, "")
    ind = ind.toString().replace("<!-- LIST -->", s);
    res.send(ind);
});

app.get ("/js", (req, res )=> {
    res.sendFile(__dirname + "/search.js")
});

app.get("/books", (req, res) =>{
    res.send(books);
})



app.post("/books", (req, res) =>{    
    books.push(req.body.name);
    res.send({"success":true})
})


app.listen(3000);
console.log("Server is running...")