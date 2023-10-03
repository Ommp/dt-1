const http = require('http');

// import { Client } from 'pg';
// const client = new Client()
// await client.connect()

const PORT = 3000;


const express = require('express');
const ejs = require('ejs');

const app = express();


app.set('view engine', 'ejs');


app.use(express.static(__dirname + '/css'));
app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/images'));



app.get('/', (req, res) => {
  res.render('index', {title: "Hjem"});
})
app.get('/prosjekter', (req, res) => {
  res.render('prosjekter', {title: "Prosjekter"});
})
app.get('/webutvikling', (req, res) => {
  res.render('webutvikling', {title: "Webutvikling"});
})


app.listen(PORT, () => {
  console.log(`Running http on port localhost:${PORT}`);
})



