const express = require ('express');
const app = express ();
const hbs = require( 'express-handlebars');

// view engine setup
app.use(express.static('public'))
app.set('view engine', 'hbs'); // telling express were using hbs
app.set('views', './views')
app.engine( 'hbs', hbs( {
  extname: 'hbs',
  defaultView: 'default',
  layoutsDir: __dirname + '/views/layouts/',
  partialsDir: __dirname + '/views/partials/'
}));

//routing pages
app.get('/', (req, res) =>{
  res.render('home');
});

app.get ('/about', (req, res) => {
  res.render('about' );
});

app.get ('/contact', (req, res) => {
  res.render('contact');
});


//localhost listener
app.listen(3000,)