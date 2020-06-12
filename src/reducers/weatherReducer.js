const weatherReducer = (state = { url: '', weather: [], loading: false }, action) => {
    switch(action.type) {
      case 'ADD_URL':
        const url = `http://api.openweathermap.org/data/2.5/weather?zip=${action.url},us&units=imperial&APPID=8cabadff1f39fef97e9c9ce17cf34e31`;
        return { ...state, url: url }  
      case 'LOADING_CURRENT_WEATHER':
        return {
          ...state,
          weather: [...state.weather],
          loading: true
        }
      case 'ADD_CURRENT_WEATHER':
        return {
          ...state,
          weather: [action.weather],
          loading: false
        }
      default:
        return state;
    }
  }
  
  export default weatherReducer;