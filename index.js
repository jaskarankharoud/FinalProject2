const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('home');
});

app.route('/form')
  .get((req, res) => {
    res.render('form');
  })
  .post((req, res) => {
    console.log(req.body);
    res.redirect('/');
  });

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
