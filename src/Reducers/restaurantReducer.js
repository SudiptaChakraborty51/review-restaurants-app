export const restaurantReducer = (state, { type, payload }) => {
  switch (type) {
    case "SELECT_CUISINE":
      return { ...state, cuisineId: payload };
    default:
      return state;
  }
};
