module.exports = (req, res, next) => {
    if(req.session.datosUsuario == undefined) {
        next();  
    } else {
        return res.redirect('/users/profile'); 
    }
}