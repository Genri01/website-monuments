const { Router } = require('express');
const sendmail = require('sendmail')();
const userController = require('../controllers/user_controller')
const infoRouter = Router()
const { body } = require ('express-validator');
infoRouter.post('/registration',
body('email').isEmail(),
body('password').isLength({min:5,max: 32})
,userController.registration);

infoRouter.post('/login',userController.login);

infoRouter.post('/logout',userController.logout);

infoRouter.get('/activate/:link',userController.activate);

infoRouter.get('/refresh',userController.refresh);

infoRouter.get('/users',userController.getUsers);

module.exports = infoRouter;
