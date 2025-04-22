const initialState = {
    userInfo: null,
    error: null,
  };
  
  export const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'USER_REGISTER_SUCCESS':
      case 'USER_LOGIN_SUCCESS':
        return { ...state, userInfo: action.payload };
      case 'USER_REGISTER_FAIL':
      case 'USER_LOGIN_FAIL':
        return { ...state, error: action.payload };
      default:
        return state;
    }
  };
  