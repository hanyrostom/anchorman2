const request = require('request')
let config
try {
  config = require('../config.js').TOKEN
} catch(err) {
  // GITHUB_TOKEN might have a different name
  // depending on your configuration
  config = process.env.GITHUB_TOKEN
}

let getArticlesByTopic = (topic, callback) => {
  //console.log('getarticlesbytopicfunc', topic);
  let options = {
    url: `https://newsapi.org/v2/everything?q=${topic}&sortBy=publishedAt&apiKey=${config}`,
    headers: {
      'User-Agent': 'request',
      Authorization: `token ${config}`,
    },
  }
  request.get(options, (err, response, body) => {
    callback(JSON.parse(body))
  })
}

module.exports.getArticlesByTopic = getArticlesByTopic
