const { validationResult } = require ('express-validator');
const userService = require('../services/users-service');
const url = require('../config/default.json');
const  ApiErr = require('../exeptions/api-error');
class UserController  {
  async registration(req,res,next) {
    
    try {
      const errors = validationResult(res);
      if(!errors.isEmpty()) return next(ApiErr.BadRequest('Ошибка при валидации',errors.array()));
      const { email ,password } = req.body
      const userData = await userService.registration(email, password,res);
      res.cookie('refreshToken',userData.refreshToken,{maxAge:30*24*60*60*1000,httpOnly: true})
      return res.json(userData);
    } catch (e) {
      next(e)
    }
  }
  
  async login(req,res,next) {
    try {
     
    } catch (e) {

    }
  }

  async activate(req,res,next) {
    try {
      const activationLink = req.params.link;
      await userService.activate(activationLink);
      return res.redirect('http://ya.ru')
      // return res.redirect(url.Server.URL.CLIENT)
    } catch (e) {
      next(e);
    }
  }

  async refresh(req,res,next) {
    try {
   
    } catch (e) {
      next(e);
    }
  }

  async getUsers(req,res,next) {
    try {
      res.json(['123','31432','23','543'])
    } catch (e) {
      next(e);
    }
  }
  
  async logout(req,res,next) {
    try {
     
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new UserController();