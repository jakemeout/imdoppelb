const db = require("../models");
const Movie = db.movies;


//find Movie or create the movie/thumbs
exports.findOne = (req, res) => {
  const id = req.params.id;
  Movie.findOrCreate({
    where: { movieApiId: id },
    defaults: { thumbsUp: 0, thumbsDown: 0 },
  })
    .then((data) => {
      res.send(data[0]);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || `Error retrieving movie with id=${id}`,
      });
    });
};

//update thumbs
exports.update = (req, res) => {
  const id = req.params.id;
  Movie.update(req.body, { where: { movieApiId: id }, returning: true })
    .then((data) => {
      res.send(data?.[1]?.[0]);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || `Error retrieving movie with id=${id}`,
      });
    });
};
