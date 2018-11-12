const express = require('express');
const passport = require('passport');
const router = express.Router();

/* GET Google Authentication API. */
router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);
router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/", session: false }),
  function(req, res) {
      var token = req.user.token;
      res.redirect("https://shopping-cart-online.herokuapp.com/login?token=" + token);
      // res.redirect("http://localhost:3000/login?token=" + token);

  }
);

module.exports = router;