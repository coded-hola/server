const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    console.log("User: coded hola");
    res.send({
        user: "coded hola",
        email: "codedhola2000@gmail.com",
        password: "****"
    });   
});

module.exports = router;
