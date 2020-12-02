const db = require("../models");
const Movie = db.movies;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.create = (req, res) => {
  // Validate request
console.log(req.body);

  if (!req.body.title) {
    res.status(400).send({
      message: "Cannot be missing title or content"
    });
    return;
  }

  // Create a User
  const movie = {
    title: req.body.title,
    thumbsUp: req.body.thumbsUp,
    thumbsDown: req.body.thumbsDown,
    userId: req.body.userId,
    details: req.body.details
  };

  // Save User in the database
  Movie.create(movie)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the User."
      });
    });

    
};

 