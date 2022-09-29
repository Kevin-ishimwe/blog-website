const express = require("express");
const app = express();
app.listen(1010);

app.set("view engine", "ejs");

app.use(express.static("./public"));

app.get("/", (req, res) => {
  res.render("index");
});
app.get("/landing", (req, res) => {
  res.render("landing");
});
app.get("/about", (req, res) => {
  res.render("about");
});
app.use((req, res) => {
  res.render("error404");
});
