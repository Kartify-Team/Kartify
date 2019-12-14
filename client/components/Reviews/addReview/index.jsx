import Modal from 'react-modal';
import React from 'react';
import AddReviewForm from './AddReviewForm';

const AddReview = ({ setIsOpen, isOpen, product }) => {
  console.log('IS OPEN', isOpen);
  var subtitle;
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)'
    }
  };
  Modal.setAppElement('#app');
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = '#f00';
  }

  return (
    <Modal
      isOpen={isOpen}
      onAfterOpen={afterOpenModal}
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

      <AddReviewForm />
    </Modal>
  );
};

export default AddReview;
