import Redux from 'redux';

export default (state = null, action) => {
  switch (action.type) {
    case 'CHANGE_PRODUCT':
      return action.info;
    default:
      return state;
  }
};
