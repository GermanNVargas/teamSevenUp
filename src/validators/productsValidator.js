const { check } = require('express-validator'); 

module.exports = {
    checkRegister: [
        check('nameProducto')
            .notEmpty().withMessage('Este campo es obligatorio').bail()
            .isLength({min: 2, max: 30}).withMessage('Debes ingresar el nombre del producto'),
        check('detalleProducto')
            .notEmpty().withMessage('Este campo es obligatorio').bail()
            .isLength({min: 2, max: 30}).withMessage('Debes ingresar el detalle del producto'),
    ]
}