import "./App.css";
import { useEffect, useState } from "react";
import { getAllJokes, saveJoke } from "./services/jokeService";
import stevePic from "./assets/steve.png";

export const App = () => {
  const [newJoke, setNewJoke] = useState("");
  const [allJokes, setAllJokes] = useState([]);
  const [untoldJokes, setUntoldJokes] = useState([]);
  const [toldJokes, setToldJokes] = useState([]);

  useEffect(() => {
    getAllJokes().then((jokesArray) => {
      setAllJokes(jokesArray);
      console.log("Jokes all set!");
    });
  }, []);

  useEffect(() => {
    const untold = allJokes.filter((joke) => joke.told === false);
    setUntoldJokes(untold);
    const told = allJokes.filter((joke) => joke.told === true);
    setToldJokes(told);
    console.log("Jokes sorted!");
  }, [allJokes]);

  return (
    <div className="app-container">
      <div className="app-heading">
        <div className="app-heading-circle">
          <img className="app-logo" src={stevePic} alt="Good job Steve" />
        </div>
        <h1 className="app-heading-text">Chuckle Checklist</h1>
      </div>
      <h2>Add Joke</h2>
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
            saveJoke(newJoke);
            setNewJoke("");
          }}
        >
          Add
        </button>
      </section>
      <div className="joke-lists-container">
        <div className="joke-list-container">
          <h2>
            Untold
            <span className="untold-count">{untoldJokes.length}</span>
          </h2>
          {untoldJokes.map((joke) => {
            return (
              <li className="joke-list-item" key={joke.id}>
                <p className="joke-list-item-text">{joke.text}</p>
              </li>
            );
          })}
        </div>
        <div className="joke-list-container">
          <h2>
            Told
            <span className="told-count">{toldJokes.length}</span>
          </h2>
          {toldJokes.map((joke) => {
            return (
              <li className="joke-list-item" key={joke.id}>
                <p className="joke-list-item-text">{joke.text}</p>
              </li>
            );
          })}
        </div>
      </div>
    </div>
  );
};

/*---------------------------------Edited Code--------------------------------------------*/
/*
const [newJoke, setNewJoke] = useState({ text: "", told: false }); //? My new code

 ! Derek's code
  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewJoke((prestate) => ({
      ...prestate,
      [name]: value,
    }));
  };

<input
          className="joke-input"
          type="text"
          value={newJoke.text} //? My new code
          name="text" //! Derek's code
          placeholder="New One Liner"
          onChange={(event) => {
            handleChange(event); //! Derek's code
            setNewJoke({ ...newJoke, text: event.target.value }); //? My new code
          }}
        />

onClick={() => {
  saveJoke(newJoke);
  setNewJoke({ text: "", told: false }); //? My new code
}}
*/
