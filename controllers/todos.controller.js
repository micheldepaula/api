const Todos = require("../data_access_layer/todos.dal");

exports.create = (req, res) => {
  if (!req.body || !req.body.title) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  Todos.create(req.body.title)
    .then((data) => {
      res.status(201).send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the To do.",
      });
    });
};

exports.completed = (req, res) => {
  Todos.update({ id: req.params.id, completed: true })
    .then(() => {
      res.status(200).send({
        message: "Todo was updated successfully.",
      });
    })
    .catch((err) => {
      res.status(err.http_code).send(err.message);
    });
};

exports.uncompleted = (req, res) => {
  Todos.update({ id: req.params.id, completed: false })
    .then(() => {
      res.status(200).send({
        message: "Todo was updated successfully.",
      });
    })
    .catch(() => {
      res.status(500).send({
        message: "Error updating Todo with id=" + req.params.id,
      });
    });
};

exports.delete = (req, res) => {
  Todos.delete(req.params.id)
    .then((num) => {
      res.send({
        message: "Todo was deleted successfully!",
      });
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Todo with id=" + id,
      });
    });
};

exports.findAll = (req, res) => {
  Todos.getAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving todos.",
      });
    });
};
