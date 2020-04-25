class Forecast {
  constructor() {
    this.key = 'tgpWEDj9bv9y4YvtDR7b77OGRbUZMqqL'
    this.weatherURL ='http://dataservice.accuweather.com/currentconditions/v1/';
    this.cityURL = 'http://dataservice.accuweather.com/locations/v1/cities/search';
  }

  
  // get weather information
  async getCityWeather (id) {
    const query = `${id}?apikey=${this.key}`;
    const response = await fetch(this.weatherURL + query);
    const data = await response.json();

    return data[0];

  };

  // get city information
  async getCityData (city) {
    const query = `${this.cityURL}?apikey=${this.key}&q=${city}`;

    const response = await fetch(query);
    const data = await response.json();

    return data[0];
  }

  async updateCity(city) {
    const getCity     = await this.getCityData(city);
    const getWeather  = await this.getCityWeather(getCity.Key);
    return {getCity, getWeather}
  }

}

