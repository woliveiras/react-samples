import { useReducer, useState, FormEvent } from "react";

type Note = {
  id: number;
  note: string;
};

type Action = {
  type: string;
  payload?: any;
};

type ActionTypes = {
  ADD: "ADD";
  UPDATE: "UPDATE";
  DELETE: "DELETE";
};

const actionType: ActionTypes = {
  ADD: "ADD",
  UPDATE: "UPDATE",
  DELETE: "DELETE",
};

const initialNotes: Note[] = [
  { id: 1, note: "Note 1" },
  { id: 2, note: "Note 2" },
  { id: 3, note: "Note 3" },
  { id: 4, note: "Note 4" },
];

const reducer = (state: Note[], action: Action) => {
  switch (action.type) {
    case actionType.ADD:
      return [...state, action.payload];
    case actionType.DELETE:
      return state.filter((note) => note.id !== action.payload);
    case actionType.UPDATE:
      const updatedNote = action.payload;
      return state.map((n: Note) =>
        n.id === updatedNote.id ? updatedNote : n
      );
    default:
      return state;
  }
};

const Notes = () => {
  const [notes, dispatch] = useReducer(reducer, initialNotes);
  const [note, setNote] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newNote = {
      id: Date.now(),
      note,
    };

    dispatch({ type: actionType.ADD, payload: newNote });
  };

  return (
    <>
      <h2>Notes App</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Note..."
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />
      </form>
      <ul>
        {notes.map((n: Note) => (
          <li key={n.id}>
            {n.note}
            <button
              onClick={() =>
                dispatch({
                  type: actionType.DELETE,
                  payload: n.id,
                })
              }
            >
              x
            </button>
            <button
              onClick={() =>
                dispatch({
                  type: actionType.UPDATE,
                  payload: { ...n, note },
                })
              }
            >
              Update
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Notes;
