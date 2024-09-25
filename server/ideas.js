const express=require('express')
const ideasRouter=express.Router()
const { addToDatabase, deleteFromDatabasebyId, deleteAllFromDatabase,  getAllFromDatabase,
getFromDatabaseById, updateInstanceInDatabase } = require('./db')
ideasRouter.get('/', (req, res, next)=>{
    const ideas = getAllFromDatabase('ideas')
    if (ideas){
      res.send(ideas)
    } else{
      res.status(404).send()
    }
})
  
ideasRouter.post('/', (req, res, next)=>{
    const body = req.body 
    const create= addToDatabase('ideas', body)
    if(create){
      res.status(201).send(create)
    } else{
      res.status(400).send()
    }
})
ideasRouter.get('/:ideaId', (req, res, next)=>{
    const elementId=req.params.ideaId
    const element=getFromDatabaseById('ideas', elementId)  
    if (element){
      res.status(200).send(element)
    } else{
      res.status(404).send()
    }
})
ideasRouter.put('/:ideaId', (req, res, next)=>{
    const elementupdate=req.body
    const elementId=req.params.ideaId
    elementupdate.id=elementId
    const update=updateInstanceInDatabase('ideas', elementupdate)
    if (update){
      res.status(200).send(update)
    }else{
      res.status(404).send('hihi')
    }
})
ideasRouter.delete('/:ideaId', (req, res, next)=>{
    const deleted = deleteFromDatabasebyId('ideas', req.params.ideaId);
    if (deleted) {
      res.status(204);
    } else {
      res.status(500);
    }
    res.send();
})
module.exports=ideasRouter
