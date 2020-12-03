const express = require('express');
const app = express();
const Stack = require('./Stack');

app.use(express.json(req, res) => {

});

app.listen(7890, () => {
    console.log('started on 7890');
  });