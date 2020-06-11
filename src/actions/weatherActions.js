export const fetchCurrentWeather = () => {
    return (dispatch) => {
      dispatch({ type: 'LOADING_CURRENT_WEATHER'})
      fetch("http://api.openweathermap.org/data/2.5/weather?zip=64137,us&units=imperial&APPID=8cabadff1f39fef97e9c9ce17cf34e31")
      .then(responseJSON => {
        dispatch({ type: 'ADD_CURRENT_WEATHER', weather: responseJSON })
      })
    }
  }