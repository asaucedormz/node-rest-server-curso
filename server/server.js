require('./config/config');

const express = require('express');
const app = express();

const mongoose = require('mongoose');

const path = require('path');
mongoose.connect(process.env.URLDB, (err, res) => {
    if (err) throw err;
    console.log('Base de datos ONLINE');
});
// create application/json parser
const bodyParser = require('body-parser');
// create application/x-www-form-urlencoded parser
app.use(bodyParser.urlencoded({
    extended: false
}));


app.use(bodyParser.json());

//Habilitar la carpeta public
app.use(express.static(path.resolve(__dirname ,'../public')));

console.log(path.resolve(__dirname ,'../public'));
app.use(require('./routes/index'));









app.listen(process.env.PORT, () => {
    console.log('Escuchando puerto:', process.env.PORT);
});