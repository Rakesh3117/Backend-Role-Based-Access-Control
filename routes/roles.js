const express = require("express");
const authenticateToken = require("../middleware/auth");
const authorizeRole = require("../middleware/role");
const router = express.Router();

router.get(
  "/admin",
  authenticateToken,
  authorizeRole(["Admin"]),
  (req, res) => {
    res.json({ message: "Welcome Admin" });
  }
);

router.get(
  "/moderator",
  authenticateToken,
  authorizeRole(["Admin", "Moderator"]),
  (req, res) => {
    res.json({ message: "Welcome Moderator" });
  }
);

router.get(
  "/user",
  authenticateToken,
  authorizeRole(["User", "Admin", "Moderator"]),
  (req, res) => {
    res.json({ message: "Welcome User" });
  }
);

module.exports = router;
