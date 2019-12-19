import Modal from 'react-modal';
import React from 'react';
import AddFormContainer from '../../../containers/Questions/AddForm';

const AddQuestion = ({
  setIsOpen,
  modalIsOpen,
  product,
  formType,
  question = {}
}) => {
  var subtitle;

  const header = {
    addQuestion: (
      <h2 ref={_subtitle => (subtitle = _subtitle)}>
        Ask Your Question About the {product.name}
      </h2>
    ),
    addAnswer: (
      <h2 ref={_subtitle => (subtitle = _subtitle)}>
        {product.name}: {question ? question.question_body : ''}
      </h2>
    )
  };
  Modal.setAppElement('#app');

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={() => setIsOpen(false)}
      className="Modal"
      overlayClassName="ModalOverlay"
      contentLabel="Example Modal"
    >
      <div className="modal-header">
        {header[formType]}
        <button onClick={() => setIsOpen(false)}>X</button>
      </div>
      <AddFormContainer
        setIsOpen={setIsOpen}
        formType={formType}
        question={question}
      />
    </Modal>
  );
};

export default AddQuestion;
