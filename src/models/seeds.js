const Artist = require('./artist')

// List all existing artists
Artist.find() // Find all artist documents
  .then((artists) => { // Once it has loaded, this function will be called
    console.log('Artists:', artists)
  })
  .catch((error) => {
    console.log(error)
  })

// Artist.create({ name: 'The National' })
// .then((artist) => {
//   console.log('Created artist', artist)
// })

// Artist.create([
//   { name: 'The Clash' },
//   { name: 'The Smiths' },
//   { name: 'The Bronx' }
// ])
//   .then((artist) => {
//     console.log('Created artist', artist)
//   })