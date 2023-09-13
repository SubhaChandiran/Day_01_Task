const apikey = `0c257b7b64cf4264d1131fac563860d0`;

let form = document.getElementById("weatherform");
let weatherInfo = document.getElementById("weatherInfo");
let recentSearchList = document.getElementById("recentSearchList");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let city = document.getElementById("city").value;
  getweather(city);
});

async function getweather(city) {
  try {
    let response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`
    );
    let data = await response.json();
    console.log(data);

    let iconID = data.weather[0].icon;
    let iconAlt = data.weather[0].description;
    let cityName = data.name;
    let temprature = data.main.temp;
    let description = data.weather[0].description;
    let windSpeed = data.wind.speed;

    let iconResponse = await fetch(
      `https://openweathermap.org/img/wn/${iconID}@4x.png`
    );

    let iconBlob = await iconResponse.blob();
    let iconUrl = URL.createObjectURL(iconBlob);

    let card = `
            <div class = "col-lg-4 col-sm-6 col-md-6 mb-4">
                  <div class="card" style="width: 18rem;">
                    <img src="${iconUrl}" class="card-img-top" alt="${iconAlt}">
                    <div class="card-body">
                        <h5 class="card-title">${cityName}</h5>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item"><b>Temprature : </b>${temprature}</li>
                        <li class="list-group-item"><b>Description : </b>${description}</li>
                        <li class="list-group-item"><b>Wind speed : </b>${windSpeed}</li>
                    </ul>
                </div>
            </div>
        `;
    weatherInfo.innerHTML = card;

    let listItem = document.createElement("li");
    listItem.textContent = cityName;
    recentSearchList.appendChild(listItem);
  } catch (error) {
    console.log("error fetching details", error);
  }
}
