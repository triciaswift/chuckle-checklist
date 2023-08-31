import "./App.css";
import { useEffect, useState } from "react";
import {
  deleteJoke,
  getAllJokes,
  replaceJoke,
  saveJoke,
} from "./services/jokeService";
import stevePic from "./assets/steve.png";

export const App = () => {
  const [newJoke, setNewJoke] = useState("");
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

  const handleSave = () => {
    if (newJoke) {
      saveJoke(newJoke).then(() => {
        getJokes();
      });
      setNewJoke("");
    }
  };

  const editJoke = (object) => {
    object.told = !object.told;
    replaceJoke(object).then(() => {
      getJokes();
    });
  };

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
            handleSave();
          }}
        >
          Add
        </button>
      </section>
      <div className="joke-lists-container">
        <div className="joke-list-container">
          <h2>
            <i className="fa-regular fa-face-meh"></i> Untold
            <span className="untold-count">{untoldJokes.length}</span>
          </h2>
          {untoldJokes.map((joke) => {
            return (
              <li className="joke-list-item" key={joke.id}>
                <p className="joke-list-item-text">{joke.text}</p>
                <div>
                  <button
                    className="joke-list-action-delete"
                    onClick={() => {
                      deleteJoke(joke.id).then(() => {
                        getJokes();
                      });
                    }}
                  >
                    <i className="fa-solid fa-trash-can"></i>
                  </button>
                  <button
                    className="joke-list-action-toggle"
                    onClick={() => {
                      editJoke(joke);
                    }}
                  >
                    <i className="fa-regular fa-face-grin-squint"></i>
                  </button>
                </div>
              </li>
            );
          })}
        </div>
        <div className="joke-list-container">
          <h2>
            <i className="fa-regular fa-face-grin-squint"></i> Told
            <span className="told-count">{toldJokes.length}</span>
          </h2>
          {toldJokes.map((joke) => {
            return (
              <li className="joke-list-item" key={joke.id}>
                <p className="joke-list-item-text">{joke.text}</p>
                <div>
                  <button
                    className="joke-list-action-delete"
                    onClick={() => {
                      deleteJoke(joke.id).then(() => {
                        getJokes();
                      });
                    }}
                  >
                    <i className="fa-solid fa-trash-can"></i>
                  </button>
                  <button
                    className="joke-list-action-toggle"
                    onClick={() => {
                      editJoke(joke);
                    }}
                  >
                    <i className="fa-regular fa-face-meh" />
                  </button>
                </div>
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
