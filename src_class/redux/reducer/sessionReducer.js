import * as types from '../actions/ActionType';

const initialState = {
  user: {},
  registered: null
};

const sessionReducer = (state = initialState, action) => {
  switch (action.type) {
   case types.SESSION_SUCCESS:
      return {
        ...state,
        user: action.user,
        logged: true,
        registered: null
      };
    case types.SIGNUP_SUCCESS:
      return {
        ...state,
        user: action.user,
        logged: null,
        registered: true
      };
    case types.SESSION_LOGOUT:
      return initialState;
    default:
      return state;
  }
};

export default sessionReducer;