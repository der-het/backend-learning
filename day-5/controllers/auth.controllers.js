const userModel = require("../src/model/user.model");
const jwt = require("jsonwebtoken");

async function registerUser(req, res) {
  const { username, email, password } = req.body; //routes mathi ayaa avshe
  const user = await userModel.create({
    username,
    email,
    password,
  }); //user crate karyo

  //json token create here
  const token = jwt.sign(
    {
      id: user._id,
    },
    process.env.JWT_SECRET,
  );
  res.status(201).json({
    message: "user has registered",
    user,
    token,
  });
}

module.exports = { registerUser };
