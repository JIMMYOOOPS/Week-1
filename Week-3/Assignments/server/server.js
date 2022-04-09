const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();
const PORT = 3000;

app.set('view engine', 'pug');

app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static('public'));
app.use(cookieParser());

app.get('/', (req, res) => {
  res.send('Hello, My Serever!');
})

app.get('/sum.html', (req, res) => {
  res.render('sum')
})

app.get('/data', (req, res) => {
  let num = Number(req.query.number);
  let sum = `${(1 + num)*num / 2}`;
  if (!req.query.number) { 
    res.status(400).send('Lack of Parameter');
    return;
    } else if (!num) {
      res.status(400).send('Wrong Parameter');
    return;
  } 
  // console.log(num);
  // console.log(sum);
  res.status(200).send(`The number you inputted is ${num}, and your result is ${sum}`)
})

app.get('/myName', (req, res) => {
  if (req.cookies.name) {
    res.send(`${req.cookies.name }`)
  } else {res.redirect('http://localhost:3000/trackName')
  };
})

app.get('/trackName', (req, res) => {
  res.render('trackName');
})

app.post('/trackName', (req, res) => {
  res.cookie('name', req.body.name);
  res.redirect('http://localhost:3000/myName');
})

app.listen(3000, ()=> {
    console.log(`Listening to port ${PORT}`)
});