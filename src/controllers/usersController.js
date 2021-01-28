const fs = require ('fs');
const path = require('path');
const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator');


module.exports = {
    register: function(req, res) {
        res.render('register')
    },
    login: function(req, res) {
        res.render('login');
    },

    welcome: function(req, res) {
        //res.send("Tu usuario ha sido creado con éxito");
        res.send(req.query); // recupero los datos que se enviaron a traves del metodo get
    },   

    delete: function(req, res) {
        res.send("Se borró un usuario");
    }, 
    logout: function(req, res) {
        req.session.destroy(); 
        res.redirect('/')
    }, 
    profile: function(req, res) {
        res.render('perfilCliente')
    }, 
    return : function(req, res) {
        return res.redirect('/')
    }  
}
