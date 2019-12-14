import Modal from 'react-modal';
import React from 'react';
import AddQuestionFormContainer from '../../../containers/Questions/AddQuestionForm'

const AddQuestion = ({ setIsOpen, modalIsOpen, product }) => {
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
            <div className="modal-header">
                <h2 ref={_subtitle => (subtitle = _subtitle)}>Ask Your Question About the {product.name}</h2>
                <button onClick={() => setIsOpen(false)}>X</button>

            </div>

            <AddQuestionFormContainer />
        </Modal >
    )
}

export default AddQuestion