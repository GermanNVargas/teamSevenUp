// ENRUTADOR ADMIN

// RUTA ------> CONTROLADOR -------> VISTA

const path = require('path');
const express = require('express');
const multer = require('multer'); 
const router = express.Router();
const productsController = require('../controllers/productsController');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, '../../public/images/products'));
    },
    filename: function (req, file, cb) {
      cb(null, req.body.nameProducto + '- Producto' + Date.now() + path.extname(file.originalname))
    }
  })

var upload = multer({ storage: storage })

router.get('/products/create', productsController.create); 

module.exports = router;