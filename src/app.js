const path = require('path');
const express = require('express');
const app = express();
//const cookieParser = require('cookie-parser'); 
const methodOverride = require('method-override');
const session = require('express-session')

const mainRouter = require('./routes/main');
const adminRouter = require('./routes/admin'); 
const usersRouter = require('./routes/users');
const productsRouter = require('./routes/products');
const sesionIniciadaMiddleware = require('./middlewares/sesionIniciada'); 

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({extended: false})); // recibe un objeto literal 
app.use(express.json()); // para ver los datos en el navegador
app.use(methodOverride('_method')); 
app.use(express.static(path.join(__dirname, '../public')));
app.use(session( {secret: "May the force be with you!"})); 
app.use(sesionIniciadaMiddleware); 

app.use('/', mainRouter);
app.use('/admin', adminRouter); 
app.use('/users', usersRouter);
app.use('/products', productsRouter);

app.listen(process.env.PORT || 3000, function() {
    console.log("El servidor está corriendo en el puerto 3000");
    console.log("-------------------");
    console.log("http://localhost:3000");
})