module.exports = (sequelize, Sequelize) => {
  const Todos = sequelize.define("todos", {
    title: {
      type: Sequelize.STRING,
    },
    completed: {
      type: Sequelize.BOOLEAN,
    },
  });

  return Todos;
};
