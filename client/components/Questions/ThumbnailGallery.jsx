import React, { useState } from 'react';
import Modal from 'react-modal';

const ThumbnailGallery = ({ imageURLs }) => {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [currentPic, setCurrentPic] = useState("");
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            height: '85vh',
            width: 'auto',
            overflow: 'hidden'
        }
    };
    Modal.setAppElement('#app')

    return (<div className="thumbnailGallery">
        {imageURLs.map((url) =>
            <img key={url} className="thumbnail" src={url} onClick={() => {
                setCurrentPic(url)
                setIsOpen(true)
            }} />
        )}
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={() => setIsOpen(false)}
            style={customStyles}
            contentLabel="Example Modal">
            <div className="modal-header">
                <img src={currentPic} />
            </div>

        </Modal >
    </div>)
}

export default ThumbnailGallery