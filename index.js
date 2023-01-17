//const { response } = require("express");
const express = require("express");
const path = require("path");

//set up Express app
const app = express();
const port = process.env.PORT || 8888;

//define important folders
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

//setup public folder
app.use(express.static(path.join(__dirname, "public")));


var links=[
    {
        name: "Home",
        path:"/"
    },
    {
        name: "About",
        path: "/about"
    }
];

//test Express app
app.get("/", (request, response) => {
    //response.status(200).send("Test page again");
    response.render("index", { title: "Home", menu: links });
});

app.get("/about", (request, response) => {
    response.render("about", { title: "About", menu: links });
});


//set up server listening
app.listen(port, () =>{
    console.log(`Listening on http://localhost:${port}`);
});



