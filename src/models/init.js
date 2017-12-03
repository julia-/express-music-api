const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/music-api', { useMongoClient: true }, (error) => {
  if (error) {
    console.error('Error connecting to MongoDB database', error)
  }
})

mongoose.Promise = global.Promise

module.exports = mongoose