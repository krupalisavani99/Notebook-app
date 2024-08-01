import React from "react";
import "../App.css";
import { RiAddLargeFill, RiDeleteBin5Fill } from "react-icons/ri";
import Navbar from "../Components/Navbar/Navbar";
import useNotes from "../Hooks/useNotes";

const Home = () => {
  const {
    user,
    openModal,
    isOpen,
    handleChange,
    cancelNote,
    addNote,
    deleteNote,
    notes,
    inputText,
  } = useNotes();

  return (
    <div>
      <Navbar user={user} />
      <div className="notes_container">
        <div className="create_notes_card">
          <RiAddLargeFill onClick={openModal} cursor="pointer" />
        </div>
        {isOpen && (
          <div className="create_notes_container">
            <h1>Create Note</h1>
            <textarea
              cols={20}
              rows={5}
              placeholder="Type..."
              value={inputText}
              onChange={(e) => handleChange(e)}
            />
            <div>
              <button onClick={cancelNote}>Cancel</button>
              <button onClick={addNote}>Save</button>
            </div>
          </div>
        )}
        {notes.map((note) => (
          <div className="notes_card" key={note.id}>
            <div className="notes_header">
              <RiDeleteBin5Fill
                onClick={() => deleteNote(note.id)}
                cursor="pointer"
              />
            </div>
            <div className="notes_content">
              <h2>{note.text}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
