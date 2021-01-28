const fs = require('fs');
const path = require('path');
const { validationResult } = require('express-validator'); 

module.exports = {
    bicicletas: function(req, res) {
        res.render('bicicletas', {products});        
    },

    detalleDeProducto: function(req, res) {
        res.render('detalleDeProducto');        
    },    

    accesorios: function(req, res) {
        res.render('accesorios');        
    }, 
    create: function(req, res) {
        return res.render('createProduct'); 
    }
}