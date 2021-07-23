const express = require("express");
var cors = require("cors");

const app = express();
const bodyParser = require("body-parser");

var upload = require('express-fileupload');
var PropertiesReader = require("properties-reader");
var properties = PropertiesReader("server.properties");

//server details
const port = properties.get("server.port.number");
const serverName = properties.get("server.host.name");

//const routes = require('./routes');

//To make app run on any cross origin
app.use(cors());
//////////////////////////////////////
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header('Access-Control-Allow-Credentials', true);
res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  next();
});
//////////////////////////////////////

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(bodyParser.json());
app.use(upload());


//route check upload
app.get("/",function(req,res){
  res.setHeader('Content-Type', 'application/json');
  res.send({type:"welcome message"});
})

app.use(require('./routes/api/user'));
app.use(require('./routes/api/file'));

//To Make app listen at particular port
app.listen(port, serverName, function() {
  console.log("Server is running on " + port + " port");
});
