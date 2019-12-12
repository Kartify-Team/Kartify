import { connect } from 'react-redux';
import Overview from '../../components/Overview';
// import store from '../../store.js';

const mapStateToProps = store => ({ product: store.product });

const OverviewContainer = connect(mapStateToProps)(Overview);
export default OverviewContainer;
