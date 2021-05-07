const TodoItem = require('../models').TodoItem;

module.exports = {
  create(req, res) {
    return TodoItem
      .create({
        content: req.body.content,
        todoId: req.params.todoId,
      })
      .then(todoItem => res.status(201).send(todoItem))
      .catch(error => res.status(400).send(error));
  },

  list(req, res){
     return TodoItem
     .findAll()
     .then(todoItem=>res.status(201).send(todoItem))
     .catch(error => res.status(400).send(error));
  },

  retrieve(req, res){
    return TodoItem
    .findByPk(req.params.Id)
    .then(todoItem => {
      if (!todoItem) {
        return res.status(404).send({
          message: 'TodoItem Not Found',
        });
      }
      return res.status(200).send(todoItem);
    })
    .catch(error => res.status(400).send(error));
 },

 update(req,res){
    return TodoItem
    .findByPk(req.params.Id)
    .then(todoItem=>{
      if(!todoItem)
      return res.status(200).send(
        { message:"TodoItem Not Found."}
      )
      return todoItem
      .update({
        content: req.body.content || todoItem.content,
        complete: req.body.complete || todoItem.complete,
        todoId:req.body.todoId || todoItem.todoId
      })
      .then(todoItem=>res.status(200).send(todoItem))
      .catch(error=>res.status(400).send(error));
    })
    .catch(error=>res.status(400).send(error));
 },

 destroy(req, res) {
  return TodoItem
    .findByPk(req.params.Id)
    .then(todoItem => {
      if (!todoItem) {
        return res.status(400).send({
          message: 'TodoItem Not Found',
        });
      }
      return todoItem
        .destroy()
        .then(() =>res.status(200).send({
          message: 'TodoItem Deleted Successfully',
        }))
        .catch(error => res.status(400).send(error));
    })
    .catch(error => res.status(400).send(error));
},
};