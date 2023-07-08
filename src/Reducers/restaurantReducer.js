export const restaurantReducer = (state, { type, payload }) => {
  switch (type) {
    case "SELECT_CUISINE":
      return { ...state, cuisineName: payload };
    default:
      return state;
  }
};
