// const key = 'vRU5JJnav078dF2q0tqDF8YrjOhpxMxS';

// // get city information
// const getCityData = async (city) => {

//     const url    = 'http://dataservice.accuweather.com/locations/v1/cities/search';
//     const query  = `?apikey=${key}&q=${city}`;
//     const search = url+query;

//     const response = await fetch(search);
//     const data = await response.json();

//     return data[0]; //get the first thing inside of the .json()
// };


// const getCityWeather = async (id) => {

//     const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
//     const query = `${id}?apikey=${key}`;
  
//     const response = await fetch(base + query);
//     const data = await response.json();

//     return data[0]; //.json() returns an array, but d[0] returns the object
// };


// getCityData('San Francisco')
//     .then( data => {
//         console.log(data);
//         return getCityWeather(data.key);
//     })
//     .then( data => {
//         console.log(data);
//     })
//     .catch( err => {
//         console.log(err);
//     });