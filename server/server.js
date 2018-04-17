require('./config/config');

const express = require('express');
const app = express();

const mongoose = require('mongoose');
mongoose.connect(process.env.URLDB, (err, res) => {




    if (err) throw err;
    console.log('Base de datos ONLINE');
});

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());


app.use(require('./routes/index'));









app.listen(process.env.PORT, () => {
    console.log('Escuchando puerto:', process.env.PORT);
});