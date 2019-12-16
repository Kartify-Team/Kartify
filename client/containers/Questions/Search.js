import { connect } from 'react-redux';
import Search from '../../components/Questions/Search';
import { searchQuestions } from '../../actions/creators/searchQuestions';

const mapDispatchToProps = dispatch => ({
  handleSearch: query => dispatch(searchQuestions(query))
});

const SearchContainer = connect(
  null,
  mapDispatchToProps
)(Search);
export default SearchContainer;
