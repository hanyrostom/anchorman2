const express = require('express');
const {retrieve, save} = require('../database')
const helper = require('../helpers/news')
const parser = require('body-parser')
let app = express();
app.use(parser.json())
app.use(express.static(__dirname + '/../react-client/dist'));



app.post('/articles', function (req, res) {
  //console.log(req.body);
  helper.getArticlesByTopic(req.body.query, (articles) => {
    save(articles,req.body.query).then((data) => {
      res.status(201).send()
    })
  })
});

app.get('/articles', function (req, res) {
  let term = req.query;
  console.log('req.query???',req.query.query);
  retrieve(term).then((articles) => {
    res.send(articles)
  })
});

app.listen(3000, function() {
  console.log('listening on port 3000!');
});

