const nameState = { name: "" };
const initialState = {
  lightDark: false,
};

export const nameReducer = (state = nameState, action) => {
  switch (action.type) {
    case "SET_NAME":
      return { name: action.payload };
    default:
      return state;
  }
};



export const lightReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TURN_ON":
      return { lightDark: true };
    case "TURN_OFF":
      return { lightDark: false };
    case "TOGGLE":
      return { lightDark: !state.lightDark };
    default:
      return state;
  }
};

