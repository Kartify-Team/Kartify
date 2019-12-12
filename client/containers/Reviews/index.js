import { connect } from 'react-redux';
import Reviews from '../../components/Reviews';
import store from '../../store.js';

const mapStateToProps = store => ({ product: store.product });

const ReviewsContainer = connect(mapStateToProps)(Reviews);
export default ReviewsContainer;
