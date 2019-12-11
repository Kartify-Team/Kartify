import {connect} from 'react-redux';
import OtherItems from '../../components/OtherItems/index.jsx';

const mapStateToProps = (state) => ({
  relatedProducts: ['A', 'B', 'C', 'D'],
  myOutfit: ['product 1', null, 'product 2', 'product 3']
});

const mapDispatchToProps = (dispatch) => ({
  getRelatedProducts: (id) => {
    dispatch() // TODO: CREATE ACTION
  }
})

const OtherItemsContainer = connect(mapStateToProps)(OtherItems);

export default OtherItemsContainer;