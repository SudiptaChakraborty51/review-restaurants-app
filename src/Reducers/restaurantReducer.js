export const restaurantReducer = (state, { type, payload }) => {
  switch (type) {
    case "SELECT_CUISINE":
      return { ...state, cuisineId: payload };
    case "ADD_REVIEW":
      return {
        ...state,
        restaurantData: state?.restaurantData?.map((restaurant) =>
          restaurant?.id === payload?.id
            ? {
                ...restaurant,
                ratings: [...restaurant?.ratings, payload?.review],
              }
            : restaurant
        ),
      };
    default:
      return state;
  }
};
