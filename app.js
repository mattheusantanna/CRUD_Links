const express = require('express');
const port = 3000;
const mongoose = require('mongoose');
const app = express();
const path = require('path')
const linkRoute = require('./routes/linkRoute')

mongoose.set('strictQuery', false);
mongoose.connect('mongodb://localhost/newlinks');

let db = mongoose.connection;

db.on("error", () => { console.log("Houve um erro") });
db.once("open", () => {
    console.log("Banco carregado")
});

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'templates'))

app.use('/', linkRoute)

app.listen(port, () => console.log(`Example app listening on port ${port}!`));