const searchButton = document.getElementById("searchBtn");
searchButton.addEventListener("click", e => postBook(prompt("Enter the book you want to add")))

async function postBook(name){
    const books = document.getElementById("books");
    const res = await fetch("http://localhost:3000/books",  {"method": "post", "headers": {"content-type": "application/json"}, "body": JSON.stringify({"name": name })})
    const a = await res.json();
    alert(JSON.stringify(a));
}