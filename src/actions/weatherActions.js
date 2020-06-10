export const fetchWeather = () => {
    return (dispatch) => {
      dispatch({ type: 'LOADING_WEATHER'})
      fetch('http://api.openweathermap.org/data/2.5/weather?zip=64137,us&units=imperial&APPID=8cabadff1f39fef97e9c9ce17cf34e31').then(response => {
        return response.json()
      }).then(responseJSON => {
        dispatch({ type: 'ADD_WEATHER', weather: responseJSON })
      })
    }
  }