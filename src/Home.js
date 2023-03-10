import useToggle from './useToggle.js';
import { useOutletContext } from "react-router-dom";




function Home() {
    const [notes, onAddNote, onDeleteNote, currentNote, setCurrentNote, getCurrentNote, navAdd] = useOutletContext();

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
                <button id="add" onClick={() => navAdd()}>+</button>
              </div>
              <p id="no-note">No Note Yet</p>
            </section>
          )}
          <section id="writing-content">
            <div id="home-text">Select a note, or create a new one.</div>
          </section>
        </div>
      </>
    );
};

export default Home;