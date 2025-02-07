import React, { useState, useEffect } from "react";
import "../Css/Feb7Pagiantion.css";
const ITEMS_PER_PAGE = 10;

const NoteTakingApp = () => {
  const [notes, setNotes] = useState([]);
  const [note, setNote] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];
    setNotes(savedNotes);
    const savedTheme = JSON.parse(localStorage.getItem("darkMode"));
    if (savedTheme !== null) setDarkMode(savedTheme);
  }, []);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  const addNote = () => {
    if (note.trim()) {
      setNotes([...notes, note]);
      setNote("");
    }
  };

  const deleteNote = (index) => {
    setNotes(notes.filter((_, i) => i !== index));
  };

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentNotes = notes.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(notes.length / ITEMS_PER_PAGE);

  return (
    <div className={`app-container ${darkMode ? "dark" : "light"}`}>
      <button className="theme-toggle" onClick={toggleTheme}>
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
      <h1>Note Taking App</h1>
      <div className="input-container">
        <input
          type="text"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="Write a note..."
        />
        <button onClick={addNote}>Add Note</button>
      </div>
      <ul>
        {currentNotes.map((n, index) => (
          <li key={index}>
            {n} <button onClick={() => deleteNote(index)}>Delete</button>
          </li>
        ))}
      </ul>
      <div className="pagination">
        <button disabled={currentPage === 1} onClick={() => setCurrentPage(currentPage - 1)}>
          Prev
        </button>
        <span>
          Page {currentPage} of {totalPages || 1}
        </span>
        <button disabled={currentPage === totalPages} onClick={() => setCurrentPage(currentPage + 1)}>
          Next
        </button>
      </div>
    </div>
  );
};

export default NoteTakingApp;
