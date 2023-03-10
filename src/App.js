import { useParams, BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './Home.js';
import Edit from './Edit.js';
import Save from './Save.js';
import { useState } from "react";
import { Navigate } from "react-router-dom";




function App() {


  // const onEditNote = (updatedArr) => {
  //   const updatedArray = notes.map((notes) => {
  //     if(note.id === activeNote) {
  //       return updatedArr;
  //     }
  //     return note;
  //   })
  //   setNotes(updatedArray);
  // }

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={ <Navigate to="/notes" /> } />
          <Route path="/notes" element={<Home />} />
          <Route path="/notes/1/edit" element={<Edit/>} />
          <Route path="/notes/1" element={<Save/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  ); 
}

export default App;
