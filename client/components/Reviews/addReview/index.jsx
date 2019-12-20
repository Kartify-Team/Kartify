import Modal from 'react-modal';
import React from 'react';
import AddReviewFormContainer from '../../../containers/Reviews/addReviewFormContainer';

const AddReview = ({ setIsOpen, isOpen, product, sort }) => {
  var subtitle;
  const customStyles = {
    content: {
      width: '50%'
    }
  };
  Modal.setAppElement('#app');

  return (
    <Modal
      isOpen={isOpen}
      className="Modal"
      overlayClassName="ModalOverlay"
      onRequestClose={() => setIsOpen(false)}
      contentLabel="Add Review"
      style={customStyles}
    >
      <div className="modal-header">
        <h2 ref={_subtitle => (subtitle = _subtitle)}>
          About the {product.name}
        </h2>
        <i
          className="fa fa-times"
          id="x-icon"
          onClick={() => setIsOpen(false)}
        ></i>
      </div>

      <AddReviewFormContainer sort={sort} close={() => setIsOpen(false)} />
    </Modal>
  );
};

export default AddReview;
