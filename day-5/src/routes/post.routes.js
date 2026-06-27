const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();

router.post("/create", async (req, res) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({
      message: "unauthorized",
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    res.send({
      message: "post created",
      userId: decoded.id,
    });
  } catch (error) {
    return res.status(401).json({
      message: "invalid token",
    });
  }
});

module.exports = router;
