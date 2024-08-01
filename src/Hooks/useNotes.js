import { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";

const useNotes = () => {
  const [inputText, setInputText] = useState("");
  const [notes, setNotes] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);

  const addNote = () => {
    if (inputText !== "") {
      setNotes((prevNotes) => [...prevNotes, { id: uuid(), text: inputText }]);
      setInputText("");
      setIsOpen(false);
    } else {
      alert("enter value");
    }
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((e) => e.id !== id);
    setNotes(newNotes);
  };

  const cancelNote = () => {
    setInputText("");
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("user"));
    setUser(loggedInUser);

    if (loggedInUser) {
      const data = JSON.parse(
        localStorage.getItem(`Notes_${loggedInUser.email}`)
      );
      if (data) {
        setNotes(data);
      }
    }
  }, []);

  useEffect(() => {
    if (user) {
      localStorage.setItem(`Notes_${user.email}`, JSON.stringify(notes));
    }
  }, [notes, user]);

  return {
    user,
    notes,
    addNote,
    cancelNote,
    deleteNote,
    openModal,
    isOpen,
    inputText,
    handleChange,
  };
};

export default useNotes;
