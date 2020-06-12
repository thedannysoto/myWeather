export const fetchCurrentWeather = () => {
  return (dispatch, getState) => {
      // dispatch({ type: 'LOADING_CURRENT_WEATHER'})
      fetch(getState().url)
      .then(response => response.json())
      .then(responseJSON => {
        dispatch({ type: 'ADD_CURRENT_WEATHER', weather: responseJSON })
      })
    }
  }