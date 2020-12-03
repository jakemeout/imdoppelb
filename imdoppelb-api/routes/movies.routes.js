module.exports = (app) => {
  const movies = require("../controllers/movies.controller.js");

  let router = require("express").Router();

  // Create a new movie
  router.post("/", movies.create);

  // Find the movie selected
  router.get("/:id", movies.findOne);

  // // Update a Film with id
  router.put("/:id", movies.update);

  // // Delete a Film with id
  // router.delete("/:id", movies.delete);

  // // Delete all films
  // router.delete("/", fimovieslms.deleteAll);

  app.use("/api/movies", router);
};
