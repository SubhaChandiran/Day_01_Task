document.addEventListener("DOMContentLoaded", function () {
  const jokeContainer = document.getElementById("joke-container");
    const getJokeButton = document.getElementById("get-joke");
    
    getJokeButton.addEventListener("click", fetchJoke);
});
