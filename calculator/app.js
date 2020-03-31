const express = require("express"); //pull in the express dependency
const app = express(); // app is the primary variable


const PORT = process.env.PORT || 3000;

app.use(express.static(__dirname));

//set the server to use static as a static folder
app.use(express.static('static'));

app.get("/", (req, res) => {
    return res.sendFile(__dirname + "/static/html/index.html");
});

app.listen(PORT, () => {
    console.log('Server listening on port number ' + PORT);
});