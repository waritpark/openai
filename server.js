// récupérer le module express
const express = require("express");
// créer le serveur express
const server = express();
// dotenv
const dotenv = require('dotenv').config();
// lier router
const router = require("./router");

// body-parser sert a recup les info du formulaire
const bodyParser = require("body-parser");
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({extended:false}));

server.use(express.static("public"));
server.use('/',router);


// indique sur quel port le serveur écoute
server.listen(3000);
