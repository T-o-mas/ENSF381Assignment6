import './index.css';
import { Outlet } from 'react-router-dom';
import uuid from "react-uuid";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ReactQuill from 'react-quill';



function Layout() {
  const navigate = useNavigate();
  const[notes, setNotes] = useState([])
  const[currentNote, setCurrentNote] = useState(false);
  const[count, setCount] = useState(0);
  const[titleInput, setTitleInput] = useState("");
  const[quillInput, setQuillInput] = useState('');



  const navAdd = () => {
    console.log("button clicked")
    navigate(`/notes/1/edit`);
    onAddNote() 
  }

  const onAddNote = () => {
    setCount(count + 1)
    const newNote = {
      id: uuid(),
      title: "Untitled",
      body: "",
      lastModified: Date.now()
    };
    setCurrentNote(newNote.id)
    setNotes([newNote, ...notes]);
  }

  const onDeleteNote = (deleteObject) => {
    const answer = window.confirm("Are you sure?");
    const lengthArr = notes.length;
    if (lengthArr === 1 && answer){
      setNotes(notes.filter((newNote) => newNote.id !== deleteObject.id))
      navigate(`/notes`);
    }
    else if (answer && deleteObject.id === notes[0].id){
      setNotes(notes.filter((newNote) => newNote.id !== deleteObject.id))
      setCurrentNote(notes[1].id);
    }
    else if (answer){
      setNotes(notes.filter((newNote) => newNote.id !== deleteObject.id))
      setCurrentNote(notes[0].id);
    }
  }

  const getCurrentNote = () => {
    return notes.find((note) => note.id === currentNote);
  }

  const onSaveNote = () => {
    navigate(`/notes/1`);
  }

  const onEditNote = () => {
    navigate(`/notes/1/edit`)
  }

  const Quill = () => {
    const [quillInput, setQuillInput] = useState('') ;
    return <ReactQuill style = {{height: '600px'}} border='none' placeholder='Your Note Here' theme="snow" contentType="text" value={quillInput} onChange={(event) => {setQuillInput(event.target.value)}}
    />;
  }



  return (
    <>
      <Outlet
        context={[
          notes,
          onAddNote,
          onDeleteNote,
          currentNote,
          setCurrentNote,
          getCurrentNote(),
          navAdd,
          onSaveNote,
          onEditNote,
          setTitleInput,
          titleInput,
          Quill()

        ]}
      />
    </>
  );
}

export default Layout;