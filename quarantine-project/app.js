const express = require("express"); //pull in the express dependency
const app = express(); // app is the primary variable


const PORT = process.env.PORT || 3000;

app.use(express.static(__dirname));

//set the server to use static as a static folder
app.use(express.static('static'));



app.get("/", (req, res) => {
    return res.sendFile(__dirname + "/static/html/index.html");
});

app.get("/calculator", (req, res) => {
    return res.sendFile(__dirname + "/static/html/calculator.html");
});

app.get("/clock", (req, res) => {
    return res.sendFile(__dirname + "/static/html/clock.html");
});

app.get("/countdown", (req, res) => {
    return res.sendFile(__dirname + "/static/html/countdown.html");
});

app.get("/password-generator", (req, res) => {
    return res.sendFile(__dirname + "/static/html/password_gen.html");
});

app.get("/speed-typing-game", (req, res) => {
    return res.sendFile(__dirname + "/static/html/speed_typing.html");
});

app.get("/drums", (req, res) => {
    return res.sendFile(__dirname + "/static/html/drums.html");
});



app.listen(PORT, () => {
    console.log('Server listening on port number ' + PORT);
});