function sesionIniciada (req, res, next) {
    if (req.session.datosUsuario) {
        /* manera de compartir las vistas sin pasar por el controlador */
        res.locals.hayUnUsuario = req.session.datosUsuario
    }
    next(); 
}

module.exports = sesionIniciada; 