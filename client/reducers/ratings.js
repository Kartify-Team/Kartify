import Redux from 'redux';

export default (
  state = {
    ratings: null,
    characteristics: null,
    totalRatings: null,
    reviewList: null
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
    default:
      return state;
  }
};
