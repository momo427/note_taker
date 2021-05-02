const util = require('util')
const fs = require('fs')
const uuidv1 = require('uuid')
const readFileAsync = util.promisify(fs.readFile)
const writeFileAsync = util.promisify(fs.writeFile)

class Controller {
    read(){
        return readFileAsync('./db.json','utf8')
    }
    write(note){
        return writeFileAsync('./db.json',JSON.stringify(note))
    }
    getNotes(){
        return this.read().then((notes)=>{
            let parseNotes 
            try {parseNotes = [].concat(JSON.parse(notes))
            }catch (err){
                parseNotes =[]
            } return parseNotes
        })
        
    }
    addNote(){
        const {title,text} = note
        if (!title || !text){
            throw new Error('need title')
        }
        const newNote = {title,text,id:uuidv1()}
        return this.getNotes().then((notes)=>[...notes,newNote])
        .then((updatedNote)=> this.write(updatedNote))
        .then(()=> newNote)
    }
    removeNote(){
        
    }
}
module.exports = new Controller();