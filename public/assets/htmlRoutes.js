// DEPENDENCIES
// We need to include the path package to get the correct file path for our html

const { fstat } = require('node:fs');
const path = require('path');


// ROUTING

module.exports = (app) => {
  // => HTML GET Requests

  app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
  });

  // If no matching route is found default to home
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });

  //updates the json file when a note is added
  function updateDb() {
      fs.writeFile("db/db.json",JSON.stringify(notes,'\t'),err => {
          if (err) throw err;
          return true;

      });
  }
};
updateDb();