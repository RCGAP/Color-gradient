// Import des action types
import {
  RANDOMIZE_FIRST_COLOR,
  RANDOMIZE_LAST_COLOR,
  CHANGE_DIRECTION,
} from 'src/actions';

const initialState = {
  firstColor: '#e367a4',
  lastColor: '#48b1f3',
  direction: '90deg',
  nbColors: 0,
};

const reducer = (state = initialState, action = {}) => {
  console.log(action);
  switch (action.type) {
    case RANDOMIZE_FIRST_COLOR:
      return {
        ...state,
        firstColor: action.firstColor,
        nbColors: state.nbColors + 1,
      };
    case RANDOMIZE_LAST_COLOR:
      return {
        ...state,
        lastColor: action.lastColor,
        nbColors: state.nbColors + 1,
      };
    case CHANGE_DIRECTION:
      return {
        ...state,
        direction: action.direction,
      };
    default:
      return state;
  }
};

export default reducer;
