export const restaurantReducer = (state, { type, payload }) => {
  switch (type) {
    case "SELECT_CUISINE":
      return { ...state, cuisineId: payload };
    case "ADD_REVIEW": {
      const updatedRestaurants = state.restaurantData.map((restaurant) => {
        if (restaurant?.id === payload?.id) {
          const updatedRatings = [payload?.review, ...restaurant?.ratings];
          const updatedAverageRating =
            (restaurant.averageRating * restaurant.ratings.length +
              Number(payload?.review?.rating)) /
            (restaurant.ratings.length + 1);
          return {
            ...restaurant,
            ratings: updatedRatings,
            averageRating: updatedAverageRating.toFixed(1),
          };
        }
        return restaurant;
      });
      return {
        ...state,
        restaurantData: updatedRestaurants,
      };
    }
    default:
      return state;
  }
};
