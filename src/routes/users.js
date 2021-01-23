// ENRUTADOR USERS

// Multer > para subir archivos
const multer = require('multer');
const path = require('path');
const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');
const userRouteMiddleware = require('../middlewares/userRouteMiddleware'); 
//const userRouteMiddleware = require('../middlewares/usuarioLogueadoMiddleware');
const usersValidator = require('../validators/users');
const guestMiddleware = require('../middlewares/guestMiddleware'); 

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
router.get('/register', guestMiddleware , usersController.register);
router.post('/register', upload.single('avatar'), usersValidator.checkRegister , usersController.save)

router.get('/login', guestMiddleware , usersController.login);
router.post('/login', usersValidator.loginValidator, usersController.checkLogin);
router.get('/logout', usersController.logout)

router.get('/profile', usersController.profile); 

module.exports = router;