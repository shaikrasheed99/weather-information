const form = document.querySelector('form');
const details = document.querySelector('.details');
const card = document.querySelector('.card')
const time = document.querySelector('.time');
const icon = document.querySelector('.icon img');
const weather = new Weather();

const updateUI = async (data) => {
    const {cityDetails, weatherDetails} = data;

    const weatherTemplate = `
        <h5 class="my-3">${cityDetails.EnglishName}</h5>
        <div>${weatherDetails.WeatherText}</div>
        <div class="display-4 my-3">
            <span>${weatherDetails.Temperature.Metric.Value}</span>
            <span>&deg;C</span>
        </div>
    `;

    details.innerHTML = weatherTemplate;

    const timeImage = (weatherDetails.IsDayTime)? "asserts/day.svg" : "asserts/night.svg";
    time.setAttribute("src", timeImage);

    const iconImage = `asserts/icons/${weatherDetails.WeatherIcon}.svg`;
    icon.setAttribute("src", iconImage);

    if (card.classList.contains('d-none')) {
        card.classList.remove('d-none');
    }

};

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const city = form.city.value.trim();
    form.reset();

    weather.getWeatherAndCityDeatils(city).then((data) => {
        updateUI(data);
    }).catch((error) => {
        console.log("Error is: ", error);
    });

    localStorage.setItem('city', city);
});

const localStorageCity = localStorage.getItem('city');
if (localStorageCity !== null) {
    weather.getWeatherAndCityDeatils(localStorageCity).then((data) => {
        updateUI(data);
    }).catch((error) => {
        console.log("Error is: ", error);
    });
}