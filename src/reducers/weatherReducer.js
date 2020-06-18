const weatherReducer = (state = { searches: [], url: '', urlTwo: '', city: '', recent: '', coord:[], dailyWeather: [], weather: [], loading: false }, action) => {
    switch(action.type) {
      case 'ADD_URL':
        const url = `http://api.openweathermap.org/data/2.5/weather?zip=${action.url},us&units=imperial&APPID=8cabadff1f39fef97e9c9ce17cf34e31`;
        return { ...state, url: url, recent: action.url }  
      case 'ADD_URL_TWO':
        const urlTwo = `http://api.openweathermap.org/data/2.5/onecall?lat=${action.coordinates.lat}&lon=${action.coordinates.lon}&units=imperial&exclude=current,minutely,hourly&APPID=8cabadff1f39fef97e9c9ce17cf34e31`;
        return { ...state, urlTwo: urlTwo }
      case 'ADD_CURRENT_WEATHER':
        return {
          ...state,
          city: action.weather.name,
          weather: [action.weather],
        }
      case 'ADD_DAILY_WEATHER':
          return {
              ...state,
              dailyWeather: [action.dailyWeather]
          }
      case 'ADD_RECENT_SEARCHES':
        return {
          ...state,
          searches: action.recent
        }
      default:
        return state;
    }
  }
  
  export default weatherReducer;