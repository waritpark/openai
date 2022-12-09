// récupérer le module express
const express = require("express");
const router = express.Router();

// chercher le moteur de template
const twig = require("twig");

// bootstrap
const path = require('path');
router.use('/css', express.static(path.join('node_modules/bootstrap/dist/css')));

// requete get sur la route de base
router.get("/", (requete, reponse) => {
    reponse.render("accueil.html.twig");
});

// openai
const openaiController = require('./controllers/openaiController');
router.post("/generateimage", openaiController.openaiGenerateImage);

// Gère l'erreur 404
router.use((requete, reponse, suite) => {
    const error = new Error("Page non trouvée");
    error.status = 404;
    suite(error); // envoi à la route ci-dessous avec "error" générée
});
// Gère toutes les erreurs
router.use((error,requete,reponse,suite) => {
    reponse.status(error.status || 500);
    reponse.end(error.message);
});

// exporter ce fichier
module.exports = router;