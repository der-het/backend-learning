const userModel = "../src/model/user.model.js";

async function registerUser(req, res) {
  const { user, email, password } = req.body;
}

module.exports = { registerUser };
