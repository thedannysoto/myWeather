const weatherReducer = (state = { searches: [], url: '', location: '', recent: '', weather: [] }, action) => {
    switch(action.type) {
      case 'ADD_URL':
        console.log(action);
        const url = `http://api.openweathermap.org/data/2.5/onecall?lat=${action.url.lat}&lon=${action.url.lng}&units=imperial&exclude=minutely,hourly&APPID=8cabadff1f39fef97e9c9ce17cf34e31`;
        return { ...state, url: url, recent: action.url }  
      case 'ADD_LOCATION':
        return { ...state, location: action.location }
      case 'ADD_CURRENT_WEATHER':
        const mainDiv = document.getElementById("main-container");
        const recentDiv = document.getElementById("recent-searches");
        mainDiv.style.display = "block";
        recentDiv.style.display = "block";
      return {
        ...state,
        weather: [action]
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