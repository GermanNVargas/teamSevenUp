// ENRUTADOR USERS

// Multer > para subir archivos
const multer = require('multer');
const path = require('path');
const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');
//const userRouteMiddleware = require('../middlewares/usuarioLogueadoMiddleware');
const usersValidator = require('../validators/users'); 
const userRouteMiddleware = require('../middlewares/userRouteMiddleware'); 

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, '../../public/avatars'));
    },
    filename: function (req, file, cb) {
      cb(null, req.body.email + '- Milanga' + Date.now() + path.extname(file.originalname))
    }
  })

var upload = multer({ storage: storage })

// el prefijo utilizado es: /users...
router.get('/register', userRouteMiddleware, usersController.register);
router.post('/register', upload.single('avatar'), usersValidator.checkRegister , usersController.save);

router.get('/login', usersController.login);
router.post('/login', usersController.checkLogin);

module.exports = router;