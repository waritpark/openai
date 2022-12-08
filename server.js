// récupérer le module express
const express = require("express");

// créer le serveur express
const server = express();

const router = require("./router");

server.use(express.static("public"));
server.use('/',router);

// indique sur quel port le serveur écoute
server.listen(3000);
