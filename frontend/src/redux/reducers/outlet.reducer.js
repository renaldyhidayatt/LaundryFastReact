export const outletListReducer = (state = { outlets: [] }, action) => {
  switch (action.type) {
    case "OUTLET_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "OUTLET_SUCCESS":
      return {
        ...state,
        loading: false,
        outlets: action.payload,
      };
    case "OUTLET_FAILED":
      return {
        ...state,
        loading: true,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const addOutletReducer = (state = {}, action) => {
  switch (action.type) {
    case "ADD_OUTLET_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "ADD_OUTLET_SUCCESS":
      return {
        ...state,
        loading: false,
        success: true,
      };
    case "ADD_OUTLET_FAILED":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export const updateOutletReducer = (state = {}, action) => {
  switch (action.type) {
    case "UPDATE_OUTLET_REQUEST":
      return {
        ...state,
        updateLoading: true,
      };
    case "UPDATE_OUTLET_SUCCESSS":
      return {
        ...state,
        updateLoading: false,
        success: true,
      };
    case "UPDATE_OUTLET_FAILED":
      return {
        ...state,
        updateLoading: false,
        updateError: action.payload,
      };
    default:
      return state;
  }
};

export const getOutletIdReducer = (state = { outlet: {} }, action) => {
  switch (action.type) {
    case "GET_OUTLETID_REQUEST":
      return {
        loading: true,
      };
    case "GET_OUTLETID_SUCCESS":
      return {
        outlet: action.payload,
        loading: false,
      };
    case "GET_OUTLETID_FAILED":
      return {
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export const deleteOutletReducer = (state = {}, action) => {
  switch (action.type) {
    case "DELETE_OUTLET_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "DELETE_OUTLET_SUCCESS":
      return {
        ...state,
        loading: false,
        success: true,
      };
    case "DELETE_OUTLET_FAILED":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
