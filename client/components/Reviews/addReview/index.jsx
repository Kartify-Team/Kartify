import Modal from 'react-modal';
import React from 'react';
import AddReviewFormContainer from '../../../containers/Reviews/addReviewFormContainer';

const AddReview = ({ setIsOpen, isOpen, product, sort }) => {
  var subtitle;
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      height: '85vh'
    }
  };
  Modal.setAppElement('#app');

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => setIsOpen(false)}
      style={customStyles}
      contentLabel="Add Review"
    >
      <div className="modal-header">
        <h2 ref={_subtitle => (subtitle = _subtitle)}>
          About the {product.name}
        </h2>
        <button onClick={() => setIsOpen(false)}>X</button>
      </div>

      <AddReviewFormContainer sort={sort} close={() => setIsOpen(false)} />
    </Modal>
  );
};

export default AddReview;
