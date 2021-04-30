// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
const app = require("express").Router();
const fs  = require('fs');
const path = require('path');



// ROUTING

module.exports = (app) => {

  // => HTML GET Requests

  app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../notes.html'));
  });

  // If no matching route is found default to home
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'));
  });

  //updates the json file when a note is added
  function updateJson() {
      fs.writeFile("db/db.json",JSON.stringify('\t'),err => {
          if (err) throw err;
          return true;

      });

    
    
  }
updateJson();

};
