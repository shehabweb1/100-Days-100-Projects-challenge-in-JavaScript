/**
 * Weather App
 * Done: Complete getWeatherData() to return json response Promise
 * Done: Complete searchCity() to get user input and get data using getWeatherData()
 * Done: Complete showWeatherData() to set the data in the the html file from response
 */

// API_KEY for maps api
let API_KEY = "a8e71c9932b20c4ceb0aed183e6a83bb";

/**
 * Retrieve weather data from openweathermap
 * HINT: Use fetch()
 * HINT: URL should look like this: 
 * https://api.openweathermap.org/data/2.5/weather?q=detroit&appid=a8e71c9932b20c4ceb0aed183e6a83bb&units=imperial
 */
getWeatherData = (city) => {
  const URL = "https://api.openweathermap.org/data/2.5/weather";
  //HINT: Use template literals to create a url with input and an API key

  const FULL_URL = `${URL}?q=${city}&appid=${API_KEY}&units=imperial`;
  console.log(FULL_URL);
  const weatherPromise = fetch(FULL_URL);
  return weatherPromise.then((r) => {
    return r.json();
  })
}
/**
 * Retrieve city input and get the weather data
 * HINT: Use the promise returned from getWeatherData()
 */
searchCity = () => {
  const city = document.getElementById('city-input').value;
  // CODE GOES HERE
  getWeatherData(city)
    .then((r) => {
      showWeatherData(r);
    }).catch((e) => {
      showWeatherData(e);
    });
}

/**
 * Show the weather data in HTML
 * HINT: make sure to console log the weatherData to see how the data looks like
 */
showWeatherData = (weatherData) => {
  const name = weatherData.name;
  const base = weatherData.weather[0].main;
  const temp = weatherData.main.temp;
  const temp_min = weatherData.main.temp_min;
  const temp_max = weatherData.main.temp_max;

  document.getElementById('city-name').innerHTML = name;
  document.getElementById('weather-type').innerHTML = base;
  document.getElementById('temp').innerHTML = temp;
  document.getElementById('min-temp').innerHTML = temp_min;
  document.getElementById('max-temp').innerHTML = temp_max;

}

