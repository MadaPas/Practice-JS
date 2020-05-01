const express = require("express"); //pull in the express dependency
const app = express(); // app is the primary variable


const PORT = process.env.PORT || 3000;

app.use(express.static(__dirname));

//set the server to use static as a static folder
app.use(express.static('static'));



app.get("/", (req, res) => {
    return res.sendFile(__dirname + "/static/html/index.html");
});

app.get("/calculator-1", (req, res) => {
    return res.sendFile(__dirname + "/static/html/calculator-1.html");
});

app.get("/calculator-2", (req, res) => {
    return res.sendFile(__dirname + "/static/html/calculator-2.html");
});

app.get("/clock", (req, res) => {
    return res.sendFile(__dirname + "/static/html/clock.html");
});

app.get("/password-generator", (req, res) => {
    return res.sendFile(__dirname + "/static/html/password_gen.html");
});

app.get("/speed-typing-game", (req, res) => {
    return res.sendFile(__dirname + "/static/html/speed_typing.html");
});



app.listen(PORT, () => {
    console.log('Server listening on port number ' + PORT);
});