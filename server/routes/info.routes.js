const { Router } = require('express'); 
const multer = require('multer'); 
const userController = require('../controllers/user_controller')
const infoRouter = Router()
const fileMiddleware = require('../middleware/file')
 
infoRouter.post('/sendmail',userController.sendConsult); 
infoRouter.post('/sendinfo',userController.sendInfo); 
infoRouter.post('/uploader', fileMiddleware.any(), async (req, res) => { 
 
  try {  
 console.log('!uploader')
    return res.json(req.files[0].filename); 
  } catch(err) {  
    if (err instanceof multer.MulterError) {
        return res.send(err);
    }
    else if (err) {
        return res.send(err);
    }
  }
}); 


module.exports = infoRouter;
