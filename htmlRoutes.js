// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
const app = require("express").Router();
const fs  = require('fs');
const path = require('path');
const router = require("./apiRoutes");



// ROUTING


  // => HTML GET Requests

  router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './notes.html'));
  });

  // If no matching route is found default to home
  router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './index.html'));
  });

  //updates the json file when a note is added
//   function updateJson() {
//       fs.writeFile("db/db.json",JSON.stringify(notes,'\t'),err => {
//           if (err) throw err;
//           return true;

//       });

    
    
//   }
// updateJson();
module.exports = router
