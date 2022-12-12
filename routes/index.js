module.exports = (app) => {
  const todos = require("../controllers/todos.controller");

  var router = require("express").Router();

  router.post("/", todos.create);

  router.put("/completed/:id", todos.completed);

  router.put("/uncompleted/:id", todos.uncompleted);

  router.delete("/:id", todos.delete);

  router.get("/", todos.findAll);

  app.use("/api/todos", router);
};
