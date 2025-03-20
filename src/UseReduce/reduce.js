export const reduce = (state, action) => {
  if (action.type == "INVALID_STATE") {
    return {
      ...state,
      error: true,
      success: false,
      message: "please enter a value",
    };
  }

  if (action.type == "ACCEPTED") {
    return {
      ...state,
      error: false,
      success: true,
      message: "Your Command Done",
      data: [...state.data, action.payload],
    };
  }

  if (action.type == "RESET") {
    return {
      ...state,
      error: false,
      message: "",
      success: false,
    };
  }
  if (action.type == "DELETE") {
    return {
      ...state,
      success: true,
      message: "data remove succefully",
      data: state.data.filter((item, index) => {
        return item.id !== action.payload;
      }),
    };
  }
};

export const initialState = {
  data: [],
  error: false,
  success: false,
  message: "",
};
