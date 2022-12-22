const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => res.sendFile(__dirname + "/index.html"));

app.post("/", function (req, res) {
  var n1 = req.body.n1;
  var n2 = req.body.n2;
  var result = Number(n1) + Number(n2);
  res.send("The result of the calculation is: " + result);
});
app.listen(8000, () => console.log("Server is running on port 8000"));
