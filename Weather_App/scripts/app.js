const input    = document.querySelector('form');
const details  = document.querySelector(".details");
const card     = document.querySelector(".card");

input.addEventListener('submit', e => {
    //prevent reload
    e.preventDefault();

    //get the user input and clear the form input bar
    const city = input.city.value.trim();
    console.log(city);
    input.reset();

    //update the city information
    updateData(city)
        .then(data => console.log(data))
        .catch(err => console.log(err));
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
    const {getCity, getWeather} = city;

    details.innerHTML = `
        <h5 class="my-3">${getCity.EnglishName}</h5>
        <div class="my-3">${getWeather.WeatherText}</div>
        <div class = "display-4 my-4">
            <span>${getWeather.Temperature.Metric.Value}</span>
            <span>&deg;C</span>
        </div>    
    `
    if(card.classList.contains("d-none"))
        card.classList.remove("d-none");
}
