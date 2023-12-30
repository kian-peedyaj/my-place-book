const express = require("express");
const {
  getAllUsers,
  signUp,
  signIn,
} = require("../controllers/users-controller");
const { check } = require("express-validator");

const router = express.Router();

router.get("/", getAllUsers);
router.post(
  "/signup",
  [
    check("email").normalizeEmail().isEmail(),
    check("password").isLength({ min: 6 }),
    check("name").notEmpty(),
  ],
  signUp
);
router.post("/signin", signIn);

module.exports = router;
