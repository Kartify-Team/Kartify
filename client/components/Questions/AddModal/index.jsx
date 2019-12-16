import Modal from 'react-modal';
import React from 'react';
import AddFormContainer from '../../../containers/Questions/AddForm'

const AddQuestion = ({ setIsOpen, modalIsOpen, product, formType, question }) => {
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
    const header = {
        addQuestion: <h2 ref={_subtitle => (subtitle = _subtitle)}>Ask Your Question About the {product.name}</h2>,
        addAnswer: <h2 ref={_subtitle => (subtitle = _subtitle)}>{product.name}: {question ? question.question_body : ""}</h2>
    }
    Modal.setAppElement('#app')
    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        // subtitle.style.color = '#f00';
    }

    return (
        <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={() => setIsOpen(false)}
            style={customStyles}
            contentLabel="Example Modal">
            <div className="modal-header">
                {header[formType]}
                <button onClick={() => setIsOpen(false)}>X</button>
            </div>
            <AddFormContainer setIsOpen={setIsOpen} formType={formType} question={question} />
        </Modal >
    )
}

export default AddQuestion