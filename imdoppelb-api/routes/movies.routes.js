module.exports = (app) => {
  const movies = require("../controllers/movies.controller.js");

  let router = require("express").Router();

  // Create a new Film
  router.post("/", movies.create);

  // Retrieve all Films
  router.get("/", movies.findAll);

  // Retrieve a single Film with id
  router.get("/:id", movies.findOne);

  // Update a Film with id
  router.put("/:id", movies.update);

  // Delete a Film with id
  router.delete("/:id", movies.delete);

  // Delete all films
  router.delete("/", fimovieslms.deleteAll);

  app.use("/api/movies", router);
};
