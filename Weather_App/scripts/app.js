const input = document.querySelector('form');

const updateData = async (city) => {
    const getCity = await getCityData(city);
    const getWeather = await getCityWeather(getCity.Key);

    return {
        getCity,
        getWeather
    };
}

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

