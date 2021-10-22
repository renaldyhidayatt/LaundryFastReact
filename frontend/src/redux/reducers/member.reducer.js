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

export const addMemberReducer = (state = {}, action) => {
  switch (action.type) {
    case "ADD_MEMBER_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "ADD_MEMBER_SUCCESS":
      return {
        ...state,
        loading: false,
        success: true,
      };
    case "ADD_MEMBER_FAILED":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export const updateMemberReducer = (state = {}, action) => {
  switch (action.type) {
    case "UPDATE_MEMBER_REQUEST":
      return {
        ...state,
        updateLoading: true,
      };
    case "UPDATE_MEMBER_SUCCESS":
      return {
        ...state,
        updateLoading: false,
        success: true,
      };
    case "UPDATE_MEMBER_FAILED":
      return {
        ...state,
        updateLoading: false,
        updateError: action.payload,
      };
    default:
      return state;
  }
};

export const getmemberIdReducer = (state = { member: {} }, action) => {
  switch (action.type) {
    case "GET_MEMBERID_REQUEST":
      return {
        loading: true,
      };
    case "GET_MEMBERBYID_SUCCESS":
      return {
        member: action.payload,
        loading: false,
      };
    case "GET_MEMBERBYID_FAILED":
      return {
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export const deleteMemberReducer = (state = {}, action) => {
  switch (action.type) {
    case "DELETE_MEMBER_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "DELETE_MEMBER_SUCCESS":
      return {
        ...state,
        loading: false,
        success: true,
      };
    case "DELETE_MEMBER_FAILED":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
