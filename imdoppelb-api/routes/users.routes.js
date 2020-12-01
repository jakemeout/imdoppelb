module.exports = (app) => {
  const users = require("../controllers/users.controller.js");

 let router = require("express").Router();

  // Create a new User
  router.post("/", users.create);

  // Retrieve all Films
  router.get("/", users.findAll);

  // Retrieve a single Film with id
  router.get("/:id", users.findOne);

  // Update a Film with id
  router.put("/:id", users.update);

  // Delete a Film with id
  router.delete("/:id", users.delete);

  // Delete all films
  router.delete("/", users.deleteAll);

  app.use("/api/users", router);
};
