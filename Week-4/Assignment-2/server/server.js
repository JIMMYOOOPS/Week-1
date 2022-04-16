const express = require('express');

const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(express.json());
app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('index')
})

app.listen(3000, () => {
    console.log(`Listening to Port ${port}`);
})