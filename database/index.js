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
  topic:String,
  title: String,
  description: String,
  date: String,
  url: {
    type: String,
    unique: true,
    required: true
  },
  imageUrl: String,
  source: String
});

var Article = mongoose.model('Article', articleSchema);

let save = ({articles},query) => {
  console.log('req.body.query',query);
  return Promise.all(
    articles.map((articleObj) => {
      return Article.findOneAndUpdate(
               {url: articleObj.url},
               {
                 topic: query,
                 date: articleObj.publishedAt,
                 url: articleObj.url,
                 imageUrl: articleObj.urlToImage,
                 description: articleObj.description,
                 title: articleObj.title,
                 source: articleObj.source.name
               },
               {upsert: true}
             ).exec()
    })
  )
}

let retrieve = (term) => {
  return Article.find().exec()
  //               // .limit(25)              
}



module.exports.save = save;
module.exports.retrieve = retrieve;



// var selectAll = function(callback) {
//   Article.find({}, function(err, items) {
//     if(err) {
//       callback(err, null);
//     } else {
//       callback(null, items);
//     }
//   });
// };


// return Article.find({'topic': term}).exec(function(err,results){
//     if(err)console.error(err);
//     else console.log('in retrieve',results.type)
//   })