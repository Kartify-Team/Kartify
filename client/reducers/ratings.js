import Redux from 'redux';

export default (
  state = {
    ratings: null,
    characteristics: null,
    totalRatings: null,
    reviewList: null,
    filters: []
  },
  action
) => {
  switch (action.type) {
    case 'SET_RATINGS':
      return { ...state, ratings: action.ratings };
    case 'SET_CHARACTERISTICS':
      return { ...state, characteristics: action.characteristics };
    case 'SET_TOTAL_RATINGS':
      return { ...state, totalRatings: action.totalRatings };
    case 'SET_REVIEW_LIST':
      return { ...state, reviewList: action.reviewList };
    case 'TOGGLE_FILTER':
      const newFilters = [...state.filters];
      const filterIndex = newFilters.indexOf(action.filter);
      if (filterIndex >= 0) {
        newFilters.splice(filterIndex, 1);
      } else {
        newFilters.push(action.filter);
      }
      return { ...state, filters: newFilters };
    default:
      return state;
  }
};
