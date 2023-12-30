const express = require("express");
const { check } = require("express-validator");

const {
  getPlaceByID,
  getPlaceByUserID,
  addPlace,
  updatePlace,
  deletePlace,
} = require("../controllers/places-controller");

const router = express.Router();

router.get("/:placeID", getPlaceByID);
router.get("/user/:userID", getPlaceByUserID);
router.post(
  "/add",
  [
    check("title").notEmpty(),
    check("description").isLength({ min: 5 }),
    check("address").notEmpty(),
  ],
  addPlace
);
router.patch(
  "/:placeID",
  [check("title").notEmpty(), check("description").isLength({ min: 5 })],
  updatePlace
);
router.delete("/:placeID", deletePlace);

module.exports = router;
