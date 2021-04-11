const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
    res.send("Hello World!");
});

app.get("/about", function (req, res) {
    res.send("Hello , I am Shivam!");
});

app.get("/contact", function (req, res) {
    res.send("<h1>This is my email id: goelshivam931@gmail.com</h1>");
});

app.get("/calc", function (req, res) {
    // console.log(__dirname);
    res.sendFile(__dirname + "/index.html");
});

app.post("/calc", function (req, res) {
    //     res.send("Thank you for your post.");
    console.log(req.body);

    let n1 = Number(req.body.v1);
    let n2 = Number(req.body.v2);

    let sum = n1 + n2;

    res.send("The sum of 2 Numbers is: " + sum);

});

app.get("/bmi", function (req, res) {
    // console.log(__dirname);
    res.sendFile(__dirname + "/bmi.html");
});

app.post("/bmi", function (req, res) {

    //     res.send("Thank you for your post.");

    console.log(req.body);

    let n1 = Number(req.body.height);
    let n2 = Number(req.body.weight);

    let bmi = n2 / (n1 * n1);

    res.send("The BMI is: " + bmi);

});

app.listen(3000, function (req, res) {
    console.log("Server is running at port 3000");
});

