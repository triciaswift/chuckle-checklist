import { JokeList } from "./JokeList";

export const ToldJoke = ({ toldJokes, getJokes }) => {
  return (
    <div className="joke-list-container">
      <h2>
        <i className="fa-regular fa-face-grin-squint"></i> Told
        <span className="told-count">{toldJokes.length}</span>
      </h2>
      {toldJokes.map((jokeObj) => {
        return <JokeList joke={jokeObj} getJokes={getJokes} key={jokeObj.id} />;
      })}
    </div>
  );
};
