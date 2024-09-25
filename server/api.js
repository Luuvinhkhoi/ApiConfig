const express = require('express');
const apiRouter = express.Router();
const minionsRouter=require('./minions')
const ideasRouter=require('./ideas')
const meetingsRouter=require('./meeting')
apiRouter.use('/minions', minionsRouter)
apiRouter.use('/ideas', ideasRouter)
apiRouter.use('/meetings', meetingsRouter)
module.exports = apiRouter;
