export const paketListReducer = (state = { pakets: [] }, action) => {
  switch (action.type) {
    case "PAKET_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "PAKET_SUCCESS":
      return {
        ...state,
        loading: false,
        pakets: action.payload,
      };
    case "PAKET_SUCCESS":
      return {
        ...state,
        loading: true,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const addPaketReducer = (state = {}, action) => {
  switch (action.type) {
    case "ADD_PAKET_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "ADD_PAKET_SUCCESS":
      return {
        ...state,
        loading: false,
        success: true,
      };
    case "ADD_PAKET_FAILED":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export const updatePaketReducer = (state = {}, action) => {
  switch (action.type) {
    case "UPDATE_PAKET_REQUEST":
      return {
        ...state,
        updateLoading: true,
      };
    case "UPDATE_PAKET_SUCCESSS":
      return {
        ...state,
        updateLoading: false,
        success: true,
      };
    case "UPDATE_PAKET_FAILED":
      return {
        ...state,
        updateLoading: false,
        updateError: action.payload,
      };
    default:
      return state;
  }
};

export const getPaketIdReducer = (state = { paket: {} }, action) => {
  switch (action.type) {
    case "GET_PAKETID_REQUEST":
      return {
        loading: true,
      };
    case "GET_PAKETID_SUCCESS":
      return {
        paket: action.payload,
        loading: false,
      };
    case "GET_PAKETID_FAILED":
      return {
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export const deletePaketReducer = (state = {}, action) => {
  switch (action.type) {
    case "DELETE_PAKET_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "DELETE_PAKET_SUCCESS":
      return {
        ...state,
        loading: false,
        success: true,
      };
    case "DELETE_PAKET_FAILED":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
