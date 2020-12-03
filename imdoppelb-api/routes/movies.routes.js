module.exports = (app) => {
  const movies = require("../controllers/movies.controller.js");

  let router = require("express").Router();


  // Find or create the movie
  router.get("/:id", movies.findOne);

  // // Update movie with thumbs up or down
  router.put("/:id", movies.update);


  app.use("/api/movies", router);
};
