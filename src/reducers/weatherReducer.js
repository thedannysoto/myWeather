const weatherReducer = (state = { searches: [], url: '', urlTwo: '', location: '', city: '', recent: '', coord:[], dailyWeather: [], weather: [], loading: false }, action) => {
    switch(action.type) {
      case 'ADD_URL':
        const url = `http://api.openweathermap.org/data/2.5/onecall?lat=${action.url.lat}&lon=${action.url.lng}&units=imperial&exclude=minutely,hourly&APPID=8cabadff1f39fef97e9c9ce17cf34e31`;
        return { ...state, url: url, recent: action.url }  
      case 'ADD_LOCATION':
        return { ...state, location: action.location }
      case 'ADD_CURRENT_WEATHER':
        const mainDiv = document.getElementById("main-container");
        mainDiv.style.display = "block";
      return {
        ...state,
        weather: [action]
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