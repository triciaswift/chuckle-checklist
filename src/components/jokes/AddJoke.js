import { useState } from "react";
import { saveJoke } from "../../services/jokeService";

export const AddJoke = ({ getJokes }) => {
  const [newJoke, setNewJoke] = useState("");

  const handleSave = () => {
    if (newJoke) {
      saveJoke(newJoke).then(() => {
        getJokes();
      });
      setNewJoke("");
    }
  };

  return (
    <section className="joke-add-form">
      <input
        className="joke-input"
        type="text"
        value={newJoke}
        placeholder="New One Liner"
        onChange={(event) => {
          setNewJoke(event.target.value);
        }}
      />
      <button
        className="joke-input-submit"
        onClick={() => {
          handleSave();
        }}
      >
        Add
      </button>
    </section>
  );
};
