const input    = document.querySelector('form');
const details  = document.querySelector(".details");
const card     = document.querySelector(".card");
const time     = document.querySelector("img.time");
const icon     = document.querySelector(".icon img");
const forecast = new Forecast();

input.addEventListener('submit', e => {
    //prevent reload
    e.preventDefault();

    //get the user input and clear the form input bar
    const city = input.city.value.trim();
    input.reset();

    //update the city information
    forecast.updateCity(city)
        .then(data => updateUI(data))
        .catch(err => console.log(err));

    localStorage.setItem("city", city);
});

const updateData = async (city) => {
    const getCity = await getCityData(city);
    const getWeather = await getCityWeather(getCity.Key);

    return {
        getCity,
        getWeather
    };

}

const updateUI = (data) => {
    // const getCity = data.cityDets;
    // const getWeather = data.weather;
    const {getCity, getWeather} = data;

    details.innerHTML = `
        <h5 class="my-3">${getCity.EnglishName}</h5>
        <div class="my-3">${getWeather.WeatherText}</div>
        <div class = "display-4 my-4">
            <span>${getWeather.Temperature.Metric.Value}</span>
            <span>&deg;C</span>
        </div>    
    `;
    
    //update icon & image
    let timeImg = "img/";
    if(getWeather.IsDayTime)
        timeImg = timeImg + 'day.svg';
    else
        timeImg = timeImg + 'night.svg';
    
    time.setAttribute('src', timeImg)
    icon.setAttribute('src', `img/icons/${getWeather.WeatherIcon}.svg`);

    if(card.classList.contains("d-none"))
        card.classList.remove("d-none");
}

//If local data exists (ie: the user has previously searched a city) then
//automatically show it
if(localStorage.getItem("city")){
    forecast.updateCity(localStorage.getItem('city'))
        .then(data => updateUI(data))
        .catch(err => console.log(err))
}