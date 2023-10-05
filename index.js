const http = require('http');
const path = require('path');

// import { Client } from 'pg';
// const client = new Client()
// await client.connect()

const PORT = 3000;


const express = require('express');
const ejs = require('ejs');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use(express.static(__dirname + '/css'));
app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/images'));
app.use(express.static(__dirname + '/scripts'));



app.get('/', (req, res) => {
  res.render('index', {title: "Hjem"});
});
app.get('/prosjekter', (req, res) => {
  res.render('prosjekter', {title: "Prosjekter"});
});
app.get('/prosjekter/:id', (req, res) => {
  res.render('prosjekter/' + req.params.id, {title: req.params.id});
});
app.get('/webutvikling', (req, res) => {
  res.render('webutvikling', {title: "Webutvikling"});
});



app.listen(PORT, () => {
  console.log(`Running http on port localhost:${PORT}`);
})
