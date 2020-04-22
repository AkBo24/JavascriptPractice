const key = 'tgpWEDj9bv9y4YvtDR7b77OGRbUZMqqL';

// get weather information
const getCityWeather = async (id) => {
  
    const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
    const query = `${id}?apikey=${key}`;
  
    const response = await fetch(base + query);
    const data = await response.json();
  
    return data[0];
  
  };

// get city information
const getCityData = async (city) => {

  const url = 'http://dataservice.accuweather.com/locations/v1/cities/search';
  const query = `${url}?apikey=${key}&q=${city}`;

  const response = await fetch(query);
  const data = await response.json();

  return data[0];

};

// getCityData('san francisco')
//   .then(data => {
//       console.log(data);
//       return getCityWeather(data.Key);
//     })
//   .then(
//       data => console.log(data)
//   );