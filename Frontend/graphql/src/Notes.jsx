const notes = [
  {
    id: 1,
    title: "The beginning of screendesign",
    date: "May 2, 2020",
    color: "yellow",
  },
  {
    id: 2,
    title: "13 Things You Should Give Up",
    date: "May 25, 2020",
    color: "orange",
  },
  {
    id: 3,
    title: "The Psychology Principles",
    date: "June 5, 2020",
    color: "green",
  },
];

function Notes({ onEdit }) {
  return (
    <div className="notes-grid">
      {notes.map((note) => (
        <div className={`note-card ${note.color}`} key={note.id}>
          <h3>{note.title}</h3>
          <span className="date">{note.date}</span>

          <div className="card-actions">
            <button onClick={() => onEdit(note)}>Edit</button>
            <button className="danger">Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Notes;
