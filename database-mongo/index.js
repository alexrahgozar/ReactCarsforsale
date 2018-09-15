var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/cars');

var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

var CarSchema =  mongoose.Schema({
  seller: String,
  make: String,
  model: String,
  year: Number,
  milage: Number,
  price: Number,
  phone: Number
});

var Car = mongoose.model('Car', CarSchema);
// db.collection.save()
console.log(Car, ' db cars')
var save = function(data) {

  var newCar = new Car(data)
  newCar.save(function(err, saveData) {
    console.log(err, saveData);
  })
};

var selectAll = function(callback) {
  Car.find({}, function(err, items) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, items);
    }
  })
}

module.exports.selectAll = selectAll;
module.exports.save = save;
