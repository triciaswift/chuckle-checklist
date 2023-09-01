import { deleteJoke, replaceJoke } from "../../services/jokeService";

export const JokeList = ({ joke, getJokes }) => {
  const editJoke = (object) => {
    object.told = !object.told;
    replaceJoke(object).then(() => {
      getJokes();
    });
  };

  return (
    <li className="joke-list-item">
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
          <i
            className={
              joke.told
                ? "fa-regular fa-face-meh"
                : "fa-regular fa-face-grin-squint"
            }
          ></i>
        </button>
      </div>
    </li>
  );
};
