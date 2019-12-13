import Modal from 'react-modal';
import React from 'react';
import AddQuestionForm from './AddQuestionForm'

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
            <button onClick={() => setIsOpen(false)}>X</button>
            <h2 ref={_subtitle => (subtitle = _subtitle)}>Ask Your Question</h2>
            <h3>About the {product.name}</h3>
            {/* <form className="submit-question" onSubmit={() => console.log("submit")}>
                <div>
                    <label>Your Question: </label>
                    <input id="question" type="textarea" placeholder="How do I wash this?" />
                </div>
                <div>
                    <label>Your Nickname: </label>
                    <input type="text" placeholder="Example: jackson11!" />
                    <sub>For privacy reasons, do not use your full name or email address</sub>

                </div>
                <input type="submit" className="action-button" value="Submit" />
            </form> */}
            <AddQuestionForm />
        </Modal >
    )
}

export default AddQuestion