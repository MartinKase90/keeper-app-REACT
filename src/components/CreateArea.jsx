import React, { useState} from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });
  function onChange(event){
    const {value, name} = event.target;
    setNote(prevValue =>{
      return{
        ...prevValue,
        [name]: value
      };
    });
  }
  function submitNote(event){
    props.onAdd(note);

    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();

  }

  return (
    <div>
      <form onSubmit={submitNote}>
        <input
          onChange={onChange}
          value={note.title}
          name="title"
          placeholder="Title" />
        <textarea
          onChange={onChange}
          value={note.conent}
          name="content"
          placeholder="Take a note..."
          rows="3" />
        <button >Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
