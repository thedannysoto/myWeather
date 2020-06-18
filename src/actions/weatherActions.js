export const fetchCurrentWeather = () => {
  return (dispatch, getState) => {
      fetch(getState().url)
      .then(response => response.json())
      .then(responseJSON => {
        dispatch({ type: 'ADD_CURRENT_WEATHER', weather: responseJSON })
      }).catch(function() {
        
      })
    }
  }

export const fetchDailyWeather = () => {
  return (dispatch, getState) => {
    fetch(getState().urlTwo)
    .then(response => response.json())
    .then(responseJSON => {
      dispatch({ type: 'ADD_DAILY_WEATHER', dailyWeather: responseJSON })
    })
  }
}

export const sendSearch = () => {
  return (dispatch, getState) => {
    const data = {zip: getState().recent, city: getState().city}
    fetch("http://127.0.0.1:3000/searches", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(responseJSON => {
      dispatch({ type: 'ADD_RECENT_SEARCHES', recent: responseJSON })
    })
  }
}
