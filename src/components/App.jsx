import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  // Add a new note with the previous notes
  const addNote = (newNote) => {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }

  // Filter out the note when the user press the delete button
  const deleteNote = (id) => {
    setNotes((prevNotes) => {
      return prevNotes.filter((item) => {
        return item.id !== id;
      });
    });
    console.log(notes);
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem) => (
        <Note key={noteItem.id} id={noteItem.id} title={noteItem.title} content={noteItem.content} onDelete={deleteNote} /> // Pass in delete function as a parameter
      ))}
      <Footer />
    </div>
  );
}

export default App;
