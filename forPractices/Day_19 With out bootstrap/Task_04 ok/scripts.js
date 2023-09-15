const jokeContainer = document.getElementById("joke-container");
const getJokeButton = document.getElementById("get-joke");

getJokeButton.addEventListener("click", fetchJoke);

function fetchJoke() {
  // Fetch a random Chuck Norris joke from the API
  fetch("https://api.chucknorris.io/jokes/random")
    .then((response) => response.json())
    .then((data) => {
      // Display the joke on the webpage
      jokeContainer.innerHTML = `<p>${data.value}</p>`;
    })
    .catch((error) => {
      console.error("Error fetching joke:", error);
    });
}
