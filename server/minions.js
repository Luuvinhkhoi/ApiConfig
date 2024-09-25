const express = require('express');
const minionsRouter = express.Router();
const { addToDatabase, deleteFromDatabasebyId, deleteAllFromDatabase,  getAllFromDatabase,
getFromDatabaseById, updateInstanceInDatabase } = require('./db')
minionsRouter.get('/', (req, res, next)=>{
  const minions = getAllFromDatabase('minions')
  if (minions){
    res.send(minions)
  } else{
    res.status(404).send()
  }
})

minionsRouter.post('/', (req, res, next)=>{
  const body = req.body 
  const create= addToDatabase('minions', body)
  if(create){
    res.status(201).send(create)
  } else{
    res.status(400).send()
  }
})
minionsRouter.get('/:minionId', (req, res, next)=>{
  const elementId=req.params.minionId
  const element=getFromDatabaseById('minions', elementId)  
  if (element){
    res.status(200).send(element)
  } else{
    res.status(404).send()
  }
})
minionsRouter.put('/:minionId', (req, res, next)=>{
  const elementupdate=req.body
  const elementId=req.params.minionId
  elementupdate.id=elementId
  const update=updateInstanceInDatabase('minions', elementupdate)
  if (update){
    res.status(200).send(update)
  }else{
    res.status(404).send('hihi')
  }
})
minionsRouter.delete('/:minionId', (req, res, next)=>{
  const deleted = deleteFromDatabasebyId('minions', req.params.minionId);
  if (deleted) {
    res.status(204);
  } else {
    res.status(500);
  }
  res.send();
})
minionsRouter.get('/:minionId/work', (req, res, next)=>{
  const work=getAllFromDatabase('work')
  if (work){
    res.status(200).send(work)
  } else{
    res.status(404).send()
  }
})
minionsRouter.post('/:minionId/work', (req, res, next)=>{
    const body=req.body
    const create=addToDatabase('work', body)
    if(create){
        res.status(201).send(create)
    } else{
        res.status(400).send()
    }
})
minionsRouter.put('/:minionId/work', (req, res, next)=>{
    const body=req.body
    const update=updateInstanceInDatabase('work', body)
    if(update){
        res.status(200).send(update)
    } else{
        res.status(404).send()
    }
})
minionsRouter.delete('/:minionId/work', (req, res, next)=>{
    const deleted = deleteFromDatabasebyId('work', req.params.minionId);
    if (deleted) {
      res.status(204);
    } else {
      res.status(500);
    }
    res.send();
  })

module.exports = minionsRouter;
