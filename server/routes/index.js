const todosController = require('../controllers').todos;
const todoItemsController=require('../controllers').todoItems;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Todos API!',
  }));

  //TODOS CRUD 
  app.post('/api/todos', todosController.create);
  app.get('/api/todos', todosController.list);
  app.get('/api/todos/:todoId', todosController.retrieve);
  app.put('/api/todos/:todoId',todosController.update);
  app.delete('/api/todos/:todoId',todosController.destroy);

  //TODOITEMS CRUD
  app.post('/api/todoItems/:todoId', todoItemsController.create);
  app.get('/api/todoItems',todoItemsController.list);
  app.get('/api/todoItems/:Id',todoItemsController.retrieve);
  app.put('/api/todoItems/:Id',todoItemsController.update);
  app.delete('/api/todoItems/:Id',todoItemsController.destroy);

};
