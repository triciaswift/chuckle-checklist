import { JokeList } from "./JokeList";

export const UntoldJokes = ({ untoldJokes, getJokes }) => {
  return (
    <div className="joke-list-container">
      <h2>
        <i className="fa-regular fa-face-meh"></i> Untold
        <span className="untold-count">{untoldJokes.length}</span>
      </h2>
      {untoldJokes.map((jokeObj) => {
        return <JokeList joke={jokeObj} getJokes={getJokes} key={jokeObj.id} />;
      })}
    </div>
  );
};
