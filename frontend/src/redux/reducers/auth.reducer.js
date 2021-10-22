export const registerUserReducer = (state = {}, action) => {
  switch (action.type) {
    case "USER_REGISTER_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "USER_REGISTER_SUCCESS":
      return {
        ...state,
        loading: false,
        success: true,
      };
    case "USER_REGISTER_FAILED":
      return {
        ...state,
        loading: true,
        error: "User Already Registred",
      };

    default:
      return state;
  }
};

const user = JSON.parse(localStorage.getItem("user"));

const initialState = user
  ? { isLoggedIn: true, user }
  : { isLoggedIn: false, user: null };

export const loginUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case "USER_LOGIN_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "USER_LOGIN_SUCCESS":
      return {
        ...state,
        loading: false,
        success: true,
        isLoggedIn: true,
        user: action.payload.user,
      };
    case "USER_LOGIN_FAILED":
      return {
        ...state,
        loading: false,
        error: "Invalid Credentails",
        isLoggedIn: false,
      };
    case "USER_LOGOUT":
      return {
        isLoggedIn: false,
        user: null,
      };
    default:
      return state;
  }
};
