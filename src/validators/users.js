const { check } = require('express-validator');

module.exports = {
    checkRegister: [
        check('name')
            .notEmpty().withMessage('Este campo es obligatorio').bail()
            .isLength({min: 2, max: 30}).withMessage('Su nombre debe tener como mínimo 2 caracteres y como máximo 30'),
        check('email')
            .isEmail()
            .withMessage('Tiene que poner un email válido'), 
        check('password')
            .isLength({min:6, max:15})
            .withMessage('Su contraseña debe tener como mínimo 6 caracteres y como máximo 15')
    ], 
    loginValidator: [
        check('name')
            .notEmpty().withMessage('Este campo es obligatorio').bail()
            .isLength({min: 2, max: 30}).withMessage('Debes ingresar un email válido'), 
            check('password')
            .isLength({min:6, max:15})
            .withMessage('Su contraseña debe tener como mínimo 6 caracteres y como máximo 15')    
    ]
}