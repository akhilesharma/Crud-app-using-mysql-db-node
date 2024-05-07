const db = require("./config");

// Create a new user
exports.createUser = (req, res) => {
  const { username, email } = req.body;
  if (!username || !email) {
    return res.status(400).json({ error: "Username and email are required" });
  }

  const user = { username, email };
  db.query("INSERT INTO users SET ?", user, (error, result) => {
    if (error) {
      console.error("Error creating user:", error);
      return res.status(500).json({ error: "Error creating user" });
    }
    user.id = result.insertId;
    res.status(201).json(user);
  });
};

// Get all users
exports.getAllUsers = (req, res) => {
  db.query("select * FROM users", (error, results) => {
    if (error) {
      console.error("Error fetching users:", error);
      return res.status(500).json({ error: "Error fetching users" });
    }
    res.json(results);
  });
};

// Get user by ID
exports.getUserById = (req, res) => {
  const userId = req.params.id;
  db.query("SELECT * FROM users WHERE id = ?", userId, (error, results) => {
    if (error) {
      console.error("Error fetching user:", error);
      return res.status(500).json({ error: "Error fetching user" });
    }
    if (results.length === 0) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json(results);
  });
};

// Update user by ID
exports.updateUser = (req, res) => {
  const userId = req.params.id;
  const { username, email } = req.body;
  if (!username || !email) {
    return res.status(400).json({ error: "Username and email are required" });
  }

  const user = { username, email };
  db.query("UPDATE users SET ? WHERE id = ?", [user, userId], (error) => {
    if (error) {
      console.error("Error updating user:", error);
      return res.status(500).json({ error: "Error updating user" });
    }
    res.json({ message: "User updated successfully" });
  });
};

// Delete user by ID
exports.deleteUser = (req, res) => {
  const userId = req.params.id;
  db.query("DELETE FROM users WHERE id = ?", userId, (error) => {
    if (error) {
      console.error("Error deleting user:", error);
      return res.status(500).json({ error: "Error deleting user" });
    }
    res.json({ message: "User deleted successfully" });
  });
};
