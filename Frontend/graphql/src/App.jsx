import { useState } from "react";
import Notes from "./Notes";
import NoteForm from "./NoteForm";
import "./App.css";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [selectedNote, setSelectedNote] = useState(null);

  return (
    <div className="page">
      <header className="header">
        <h1>Notes</h1>
      {!showForm && (
          <button
            className="btn primary"
            onClick={() => {
              setSelectedNote(null);
              setShowForm(true);
            }}
          >
            + Add Note
          </button>
        )}
      </header>

      <Notes
        onEdit={(note) => {
          setSelectedNote(note);
          setShowForm(true);
        }}
      />

      {showForm && (
        <div className="modal-overlay" onClick={() => setShowForm(false)}>
          <div onClick={(e) => e.stopPropagation()}>
            <NoteForm
              note={selectedNote}
              onCancel={() => setShowForm(false)}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
