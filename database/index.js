var mongoose = require('mongoose');
var {MLAB} = require('../config.js')
mongoose.connect(MLAB);

var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

var articleSchema = mongoose.Schema({
  title: String,
  description: String,
  date: String,
  url: {
    type: String,
    unique: true
  },
  imageUrl: String
});

var Article = mongoose.model('Article', articleSchema);


module.exports.selectAll = selectAll;





// var selectAll = function(callback) {
//   Article.find({}, function(err, items) {
//     if(err) {
//       callback(err, null);
//     } else {
//       callback(null, items);
//     }
//   });
// };