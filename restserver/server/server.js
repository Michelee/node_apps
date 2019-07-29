require('./config/config');
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use( require('./routes/usuarios'));

mongoose.set('useNewUrlParser', true);
mongoose.set('useCreateIndex', true);
mongoose.connect(process.env.DB_ENV, (error, res)=> {
    if (error) throw error;
    console.log('BD activa');
});

app.listen(process.env.PORT, () => {
    console.log('Escuchando puerto: ', process.env.PORT);
});
