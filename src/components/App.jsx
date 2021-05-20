import React, { useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

  const [notes, setNotes] = useState([]);

  function deleteNote(id){
    setNotes(previousNotes => {
      return previousNotes.filter((note, index) => {
        return index !==id;
      });
    });
  }
  function addNote(inputNote){
    setNotes(previousNote => {
      return [...previousNote, inputNote];
    });
  }


  return (
    <div>
      <Header />
      <CreateArea
        onAdd={addNote}
       />
      {notes.map((note, index) => {
        return <Note
          id={index}
          key={index}
          title={note.title}
          content={note.content}
          onDelete={deleteNote}
        />;
      })}

      <Footer />
    </div>
  );
}

export default App;
