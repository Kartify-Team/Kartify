import Redux from 'redux';

export default (
  state = { ratings: null, characteristics: null, totalReviews: null },
  action
) => {
  switch (action.type) {
    case 'SET_RATINGS':
      return { ...state, ratings: action.ratings };
    case 'SET_CHARACTERISTICS':
      return { ...state, characteristics: action.characteristics };
    case 'SET_TOTAL_REVIEWS':
      return { ...state, totalReviews: action.totalReviews };
    default:
      return state;
  }
};
