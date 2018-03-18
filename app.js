const express = require('express');
const bp = require('body-parser');
const hbs = require('express-handlebars')
const DS_Hometowns = require('./db/DS_Hometowns')
const app = express();

app.use(bp.urlencoded({extended: true}))
app.engine('hbs', hbs({
  defaultLayout: 'main',
  extname: '.hbs'
}))
app.set('view engine', 'hbs');



app.get('/', (req, res) => {
  res.render('home', { hello: "ZOMG"})
})

app.get('/hometowns', (req, res) => {
  const towns = DS_Hometowns.getAllTowns();
  res.render('hometowns', { towns })
})

app.get('/inhabitants', (req, res) => {
  res.render('inhabitants')
})

app.get('/hometowns/:id', (req, res) => {
  const townId = Number(req.params.id);
  console.log('townId', townId);
  
  const town = DS_Hometowns.getTownById(townId)
  console.log('town', town)
  res.render('towndetail', town)
})

app.listen(8080, () => {
  console.log('App listening on port 8080')
})
