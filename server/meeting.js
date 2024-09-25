const express=require('express')
const meetingsRouter=express.Router()
const { addToDatabase, deleteFromDatabasebyId, deleteAllFromDatabase,  getAllFromDatabase,
getFromDatabaseById, updateInstanceInDatabase } = require('./db')
meetingsRouter.get('/', (req, res, next)=>{
        const meetings = getAllFromDatabase('meetings')
        if (meetings){
          res.send(meetings)
        } else{
          res.status(404).send()
        }
})
      
meetingsRouter.post('/', (req, res, next)=>{
        const body = req.body 
        const create= addToDatabase('meetings', body)
        if(create){
          res.status(201).send(create)
        } else{
          res.status(400).send()
        }
})
meetingsRouter.delete('/', (req, res, next)=>{
        const deleted = deleteAllFromDatabase('meetings');
        if (deleted) {
          res.status(204);
        } else {
          res.status(500);
        }
        res.send();
})
module.exports=meetingsRouter