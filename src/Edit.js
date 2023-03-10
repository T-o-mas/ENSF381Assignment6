import 'react-quill/dist/quill.snow.css';
import useToggle from './useToggle.js';
import formatDate from './formatDate.js';
import { useParams, BrowserRouter, Routes, Route } from 'react-router-dom';
import { useOutletContext } from "react-router-dom";
import uuid from "react-uuid";
import { useNavigate } from "react-router-dom";
import ReactQuill from 'react-quill';
import { useState, useEffect } from "react";






function Edit() {
    const [notes, onAddNote, onDeleteNote, currentNote, setCurrentNote, getCurrentNote, navAdd, onSaveNote, onEditNote, setTitleInput, Quill] = useOutletContext();

    // const { number } = useParams();
    const [toggle, setToggle] = useToggle();
    const [quillInput, setQuillInput] = useState(currentNote.body);


    return (
      <>
        <header>
          <h1>Lotion</h1>
          <h6>Like Notion, but worse.</h6>
          <button id="side" onClick={setToggle}>
            &#9776;
          </button>
        </header>
        <div id="body-container">
          {toggle && (
            <section id="notes-content">
              <div className="notes-heading">
                <div id="side-header">Notes</div>
                <button id="add" onClick={onAddNote}>
                  +
                </button>
              </div>
              {notes.map((note) => (
                <div
                  key={uuid()}
                  className={`${
                    note.id === currentNote ? "notesCurrent" : "notes"
                  }`}
                  onClick={() => setCurrentNote(note.id)}
                >
                  <div id="notes-text">{note.title}</div>
                  <div id="notes-information">{"..."}</div>
                  <div id="note-date">
                    {/* {new Date(note.lastModified).toLocaleDateString("en-GB", {
                      hour: "2-digit",
                      minute: "2-digit"
                    })} */}
                  </div>
                </div>
              ))}
            </section>
          )}
          <section id="writing-content">
            <div className="editing">
              <div className="title-container">
                <input
                  id="title"
                  type="text"
                  Value={notes[0].title}
                  autoFocus
                  onChange={(event) => {
                    setTitleInput(event.target.value);
                  }}
                />
                <input id="calendar" type="datetime-local" />
              </div>
              <button id="save" onClick={() => onSaveNote(getCurrentNote)}>
                Save
              </button>
              <button id="delete" onClick={() => onDeleteNote(getCurrentNote)}>
                Delete
              </button>
            </div>
            <div>
              <ReactQuill
                style={{ height: "600px" }}
                border="none"
                placeholder="Your Note Here"
                theme="snow"
                contentType="text"
                value={quillInput}
                onChange={(event) => {
                  setQuillInput(event.target.value);
                }}
              />
              ;{" "}
            </div>
          </section>
        </div>
      </>
    );
};

export default Edit;