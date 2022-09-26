import * as types from '../actions/ActionType';

                      //Reducer is that redux part, which is being used to initialize a new state 

const initialState = {
  user: {},
  registered: null
};

                    // So, we initialize a new state here.

const sessionReducer = (state = initialState, action) => {
  switch (action.type) {
   case types.SESSION_SUCCESS:                      //                      if the
      return {                                      //                        user is
        ...state,                                   //                  logged in then
        user: action.user,                          //                  Session Success 
        logged: true,                               //                    is used
        registered: null                            
      };                                            
    case types.SIGNUP_SUCCESS:                       //                     if the 
      return {                                       //                       user
        ...state,                                    //                    SignUp
        user: action.user,                           //                        then
        logged: null,                                //                    signup success is used
        registered: true
      };
    case types.SESSION_LOGOUT:                      //                        if the
      return initialState;                          //                          user
    default:                                        //                            logout
      return state;                                 //                      then session logout is used
  }
};

export default sessionReducer;