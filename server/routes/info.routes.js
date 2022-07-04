const { Router } = require('express'); 
const userController = require('../controllers/user_controller')
const infoRouter = Router()

infoRouter.post('/sendmail',userController.sendConsult); 

module.exports = infoRouter;
