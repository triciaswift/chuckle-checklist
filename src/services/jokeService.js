export const getAllJokes = () => {
  return fetch("http://localhost:8088/jokes").then((res) => res.json());
};

export const saveJoke = async (newJoke) => {
  const jokeState = {
    text: newJoke,
    told: false,
  };

  const postOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(jokeState),
  };
  const response = await fetch("http://localhost:8088/jokes", postOptions);
};

export const replaceJoke = async (jokeObject) => {
  const putOptions = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(jokeObject),
  };
  const response = await fetch(
    `http://localhost:8088/jokes/${jokeObject.id}`,
    putOptions
  );
};

export const deleteJoke = async (jokeId) => {
  const putOptions = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  };
  const response = await fetch(
    `http://localhost:8088/jokes/${jokeId}`,
    putOptions
  );
};
