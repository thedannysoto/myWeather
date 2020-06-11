const weatherReducer = (state = { weather: [], loading: false }, action) => {
    switch(action.type) {
      case 'LOADING_CURRENT_WEATHER':
        return {
          ...state,
          weather: [...state.weather],
          loading: true
        }
      case 'ADD_CURRENT_WEATHER':
        return {
          ...state,
          weather: action.weather,
          loading: false
        }
      default:
        return state;
    }
  }
  
  export default weatherReducer;