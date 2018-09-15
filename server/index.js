var express = require('express');
var bodyParser = require('body-parser');
var cars = require('../database-mongo');
var app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/../react-client/dist'));
app.get("/cars", function (req, res) {
  cars.selectAll(function(err, data) {
    if(err) {
      res.sendStatus(500);
    } else {
      console.log('this is my data in server get ', data)
      res.json(data)
    }
  });

});


app.post("/cars", function(req,res) {

  console.log('immmmm hereeee ', req.body)
  cars.save(req.body);
  res.end('testing');
});

app.listen(3000, function() {
  console.log('listening on port 3000!');
});
