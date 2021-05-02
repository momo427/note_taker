const router = require("express").Router();
const db = require('./db/controller')

 


    // var notes = JSON.parse(data);

    //api/notes get route
    router.get("/api/notes", function (req, res) { 
      db.getNotes().then((notes)=> {
        return res.json(notes)
      })
  .catch((err)=>res.status(500).json(err))
    });

    ///api/notes post route
    router.post("/api/notes", function (req, res) {
      let newNote = req.body;
      notes.push(newNote);
      return console.log("Added new note:" + newNote.title);
    });
    // Retrieves a note with specific id
    router.get("/api/notes/:id", function (req, res) {
      // display json for the notes array indices of the provided id
      res.json(notes[req.params.id]);
    });
    module.exports = router

