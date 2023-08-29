export const getAllJokes = () => {
  return fetch("http://localhost:8088/jokes").then((res) => {
    res.json();
  });
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
