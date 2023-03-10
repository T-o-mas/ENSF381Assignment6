import useToggle from './useToggle.js';
import { useParams, BrowserRouter, Routes, Route } from 'react-router-dom';
import { useOutletContext } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import uuid from "react-uuid";

function Save() {
    const [notes, onAddNote, onDeleteNote, currentNote, setCurrentNote, getCurrentNote, navAdd, onSaveNote, onEditNote, setTitleInput, titleInput, Quill] = useOutletContext();
    const [toggle, setToggle] = useToggle();

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
                  className={`${note.id === currentNote ? "notesCurrent" : "notes"}`}
                  onClick={() => setCurrentNote(note.id)}

                >
                  <div id="notes-text">{titleInput}</div>
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
                <div>{titleInput}</div>
                <input id="calendar" type="datetime-local" />
              </div>
              <button id="save" onClick={() => onEditNote(getCurrentNote)}>Edit</button>
              <button id="delete" onClick={() => onDeleteNote(getCurrentNote)}>
                Delete
              </button>
            </div>
            <div>
              {/* {quillInput} */}
            </div>
          </section>
        </div>
      </>
    );
}

export default Save;