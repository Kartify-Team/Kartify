import { connect } from "react-redux";
import Overview from "../../components/Overview";

const mapStateToProps = store => ({
  product: store.product,
  average: store.reviews.ratings === null ? null : store.reviews.ratings.average
});

const OverviewContainer = connect(mapStateToProps)(Overview);
export default OverviewContainer;
