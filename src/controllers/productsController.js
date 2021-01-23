const fs = require('fs');
const path = require('path');
const { validationResult } = require('express-validator'); 

let products = fs.readFileSync(path.join(__dirname, '../database/products.json'), 'utf8');
products = JSON.parse(products);

let lastIdProduct = 0; 
for(let i = 0; i < products.length; i++) {
    if(lastIdProduct < products[i].id) {
        lastIdProduct = products[i].id
    }
}

module.exports = {
    store: function(req, res) {
        let errors = validationResult(req);

        if(errors.isEmpty()) {
            let newProduct = {
                id: lastIdProduct + 1, 
                name: req.body.nameProducto,
                detalle: req.body.detalleProducto, 
                precio: req.body.precio,
                image: req.file.image
            }
            products.push(newProduct); 
            fs.writeFileSync(path.join(__dirname, '../database/products.json'), JSON.stringify(products, null, 5));
            res.redirect('/products/bicicletas'); 
      
    } else {
        return res.render('products/create', {
            errors: errors.mapped()
        })
    }
    },

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