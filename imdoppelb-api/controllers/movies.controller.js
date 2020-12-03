const db = require("../models");
const Movie = db.movies;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.create = (req, res) => {
  // Validate request
  console.log(req.body);

  if (!req.body.title) {
    res.status(400).send({
      message: "Cannot be missing title or content",
    });
    return;
  }

  // Create a User
  const movie = {
    title: req.body.title,
    thumbsUp: req.body.thumbsUp,
    thumbsDown: req.body.thumbsDown,
    movieApiId: req.body.movieApiId,
    details: req.body.details,
  };

  // Save User in the database
  Movie.create(movie)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the User.",
      });
    });
};

//find Movie
exports.findOne = (req, res) => {
  const id = req.params.id;
  Movie.findOne({ where: { movieApiId: id } })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || `Error retrieving movie with id=${id}`,
      });
    });
};

exports.update = (req, res) => {
  const id = req.params.id;
  Movie.update(req.body, { where: { movieApiId: id } })
  .then((data) => {
    res.send(data);
  })
  .catch((err) => {
    res.status(500).send({
      message: err.message || `Error retrieving movie with id=${id}`,
    });
  });
};
