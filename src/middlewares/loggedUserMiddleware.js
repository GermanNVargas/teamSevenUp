module.exports = function (req, res, next) {
    //console.log("Un usuario está por registrarse");
    let usuario = req.body.email;
    //return console.log(usuario);

    // Acá ya tengo los datos del usuarios desde la base de datos...
    if(usuario){
        //console.log(usuario);
        res.locals.loggedUser = usuario;
        next()
    } else {
        return res.redirect('/users/login');
    }
}