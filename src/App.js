import "./App.css";
import { useEffect, useState } from "react";
import { getAllJokes } from "./services/jokeService";
import stevePic from "./assets/steve.png";
import { AddJoke } from "./components/jokes/AddJoke";
import { UntoldJokes } from "./components/jokes/UntoldJokes";
import { ToldJoke } from "./components/jokes/ToldJokes";

export const App = () => {
  const [allJokes, setAllJokes] = useState([]);
  const [untoldJokes, setUntoldJokes] = useState([]);
  const [toldJokes, setToldJokes] = useState([]);

  const getJokes = () => {
    getAllJokes().then((jokesArray) => {
      setAllJokes(jokesArray);
    });
  };

  useEffect(() => {
    getJokes();
  }, []);

  useEffect(() => {
    const untold = allJokes.filter((joke) => joke.told === false);
    setUntoldJokes(untold);
    const told = allJokes.filter((joke) => joke.told === true);
    setToldJokes(told);
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
      <AddJoke getJokes={getJokes} />
      <div className="joke-lists-container">
        <UntoldJokes untoldJokes={untoldJokes} getJokes={getJokes} />
        <ToldJoke toldJokes={toldJokes} getJokes={getJokes} />
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
