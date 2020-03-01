var express = require("express");
var path = require("path");
var app = express();
var bodyParser = require("body-parser");
var thirdparty = require("web-push");
var browseridentifier = [];
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./views"));
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());
thirdparty.setVapidDetails(
  "mailto:knksp234@gmail.com",
  "BOZrOZAASIEUEpOn1UhsdV7meIwyhyXqbQ_JJ-RKIQL3V2W-wqucHiBu_aGjrW0OkAkGTo5MyI5l6fmIJIallEc",
  "ZxzIa_sU22ZoODgOm2mhGBcpB9mY3OTRPsV7vTKffIo"
);
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");

  next();
});
app.get("/", (req, res) => {
  res.render("home");
});
app.get("/admin", (req, res) => {
  res.render("admin");
});

app.post("/notify", (req, res) => {
  if (req.body.message == "sendnotification") {
    if (browseridentifier.length != 0) {
      for (var i = 0; i < browseridentifier.length; i++) {
        let message = req.body.topic;

        thirdparty.sendNotification(browseridentifier[i], message);
      }
    }
  } else {
    browseridentifier.push(req.body);
  }
});
app.listen(process.env.PORT || 3000, () => {
  console.log("done");
});
