module.exports = (app) => {
  const user = require("../controllers/user.controller.js");

  // Create a new user
  app.post("/users", user.create);

  // Retrieve all user
  app.get("/users", user.findAll);

  // // Retrieve a single user with userId
  app.get("/users/:userId", user.findOne);

  // // Update a user with userId
  app.put("/users/:userId", user.update);

  // // Delete a user with userId
  app.delete("/users/:userId", user.deleteuser);
};
