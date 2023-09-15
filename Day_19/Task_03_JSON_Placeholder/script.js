const userList = document.getElementById("user-list");

// Fetch data from the API
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((data) => {
    // Process the data and display it on the webpage
    data.forEach((user) => {
      const userCard = document.createElement("div");
      userCard.classList.add("user-card", "col-md-4", "mb-4");
      userCard.innerHTML = `
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${user.name}</h5>
                        <p class="card-text">Email: ${user.email}</p>
                        <p class="card-text">Phone: ${user.phone}</p>
                    </div>
                </div>
            `;
      userList.appendChild(userCard);
    });
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });
