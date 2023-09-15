const userList = document.getElementById("user-list");

// Fetch data from the API
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((data) => {
    // Process the data and display it on the webpage
    data.forEach((user) => {
      const userCard = document.createElement("div");
      userCard.classList.add("user-card");
      userCard.innerHTML = `
                <h2>${user.name}</h2>
                <p>Email: ${user.email}</p>
                <p>Phone: ${user.phone}</p>
            `;
      userList.appendChild(userCard);
    });
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });
