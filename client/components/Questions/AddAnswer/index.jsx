import Modal from 'react-modal';
import React from 'react';
import AddAnswerForm from './AddAnswerForm'

const AddAnswer = ({ setIsOpen, modalIsOpen, question, product }) => {
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

            <div className="modal-header"><h2 ref={_subtitle => (subtitle = _subtitle)}>{product.name}: {question.question_body}</h2>
                <button onClick={() => setIsOpen(false)}>X</button></div>

            <AddAnswerForm />
        </Modal >
    )
}

export default AddAnswer