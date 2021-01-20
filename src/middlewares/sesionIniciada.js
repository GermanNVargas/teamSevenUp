function sesionIniciada (req, res, next) {
    if (req.session.datosUsuario) {
        res.locals.hayUnUsuario = req.session.datosUsuario
    }
    next(); 
}

module.exports = sesionIniciada; 