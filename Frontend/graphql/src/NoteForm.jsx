import { useState } from "react";

function NoteForm({ note, onCancel }) {
  const [title, setTitle] = useState(note?.title || "");
  const [content, setContent] = useState("");

  return (
    <div className="form-wrapper">
      <h2>{note ? "Edit Note" : "Add Note"}</h2>

      <input
        type="text"
        placeholder="Note title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        placeholder="Write your note..."
        rows="6"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <div className="form-actions">
        <button className="btn primary">Save</button>
        <button className="btn" onClick={onCancel}>
          Cancel
        </button>
      </div>
    </div>
  );
}

export default NoteForm;
