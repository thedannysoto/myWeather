export const fetchCurrentWeather = () => {
    return (dispatch) => {
      dispatch({ type: 'LOADING_CURRENT_WEATHER'})
      fetch("https://community-open-weather-map.p.rapidapi.com/weather?callback=test&id=2172797&units=%2522metric%2522%20or%20%2522imperial%2522&mode=xml%252C%20html&q=London%252Cuk", {
        "method": "GET",
        "headers": {
        "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
        "x-rapidapi-key": "530d5f74demsh2b6328cb768cdacp1f9285jsn320a0de7d912"
	      }
      })
      .then(responseJSON => {
        dispatch({ type: 'ADD_CURRENT_WEATHER', weather: responseJSON })
      })
    }
  }