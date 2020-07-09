const express = require("express");
const jwt = require("jsonwebtoken");
const passport = require("passport");
const Pme = require("../models/pmeSchema");
const User = require("../models/userSchema");
const categorie = require("../models/categorieSchema")

const router = express.Router();
/*******************add categorie produit ************ */
router.post("/add/:id",passport.authenticate("bearer", { session: false }),async(req,res)=>{
    const pme = await Pme.findById(req.params.id);
    const user = await User.findById(req.user.user);

    if (!pme) return res.status(400).send({ message: "pme does not exist" });

    if (!user) return res.status(400).send({ message: "Unauthorized" });
    const newcategorie = req.body;
    newcategorie.pme = req.params.id
  
    const Categorie = new categorie(newcategorie);

    await Categorie.save();

    res.send(Categorie);
})


module.exports = router;