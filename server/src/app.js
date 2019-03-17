const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const request = require('request');

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

app.get('/posts', (req, res) => {
  res.send(
    [{
      title: "Hello World!",
      description: "Hi there! How are you?"
    }]
  )
});

app.post('/post-trains', (req, res) => {
  console.log(req.body.params, '<<');
  request({
    url: "https://booking.uz.gov.ua/train_search/",
    method: "POST",
  	headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    json: true,
    body: req.body.params
  }, function (error, response, body){
    console.log(response.body.error, '<**');
    if (response.body.error)  return res.send(response.body);
    let available = response.body.data.list.filter(i => i.types.length);
    res.send(available);
  });
})

app.listen(process.env.PORT || 8081)
