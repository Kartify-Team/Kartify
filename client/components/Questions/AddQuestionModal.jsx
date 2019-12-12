import Modal from 'react-modal';
import React from 'react';
const AddQuestionModal = ({ setIsOpen, modalIsOpen }) => {
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
            <button onClick={() => setIsOpen(false)}>X</button>
            <h2 ref={_subtitle => (subtitle = _subtitle)}>Do you have a question about the product?</h2>
            <div>Enter your question below:</div>
            <form>
                <input type="text" placeholder="How does it work?" />
                <button className="action-button" onClick={() => setIsOpen(false)}>Submit</button>
            </form>
        </Modal>
    )
}

export default AddQuestionModal