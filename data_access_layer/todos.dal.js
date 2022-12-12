const model = require(".");
const Todos = model.todos;

exports.create = (title) => {
  const todo = {
    title: title,
    completed: false,
  };

  return new Promise((resolve, reject) => {
    Todos.create(todo)
      .then((data) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

exports.update = (todo) => {
  return new Promise((resolve, reject) => {
    Todos.update(todo, {
      where: { id: todo.id },
    })
      .then((num) => {
        if (num == 1) {
          resolve();
        } else {
          let error = new Error(`Cannot update Todo with id= ${todo.id}.`);
          error.http_code = 500;
          reject(error);
        }
      })
      .catch((err) => {
        console.log(err);
        reject(err);
      });
  });
};

exports.delete = (id) => {
  return new Promise((resolve, reject) => {
    Todos.destroy({
      where: { id: id },
    })
      .then((num) => {
        if (num == 1) {
          resolve();
        } else {
          let error = new Error(`Cannot update Todo with id= ${todo.id}.`);
          error.http_code = 500;
          reject(error);
        }
      })
      .catch((err) => {
        reject(err);
      });
  });
};

exports.getAll = () => {
  return new Promise((resolve, reject) => {
    Todos.findAll()
      .then((data) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

exports.getByID = (id) => {
  return new Promise((resolve, reject) => {
    Todos.findByPk(id)
      .then((data) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
