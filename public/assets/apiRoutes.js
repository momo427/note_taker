const app = require("express")();
const fs = require('fs');
const path = require('path');

module.exports = app => {
    fs.readFile("db/db.json","utf8", (err, data) =>{
        if (err) throw err;

        var notes = JSON.parse(data);


        //api/notes get route
        app.get("/api/notes", function(req, res){

            res.json(notes);
        });


        ///api/notes post route
        app.post("/api/notes", function(req, res){

            let newNote = req.body;
            notes.push(newNote);
            update();
            return console.log("Added new note:"+newNote.title)
        });
                // Retrieves a note with specific id
                app.get("/api/notes/:id", function(req,res) {
                    // display json for the notes array indices of the provided id
                    res.json(notes[req.params.id]);
                });
    })
}