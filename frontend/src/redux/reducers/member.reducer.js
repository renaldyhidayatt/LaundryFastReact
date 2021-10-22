export const memberReducer = (state = { members: [] }, action) => {
  switch (action.type) {
    case "MEMBER_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "MEMBER_SUCCESS":
      return {
        ...state,
        loading: false,
        members: action.payload,
      };
    case "MEMBER_FAILED":
      return {
        ...state,
        loading: true,
        error: action.payload,
      };
    default:
      return state;
  }
};
