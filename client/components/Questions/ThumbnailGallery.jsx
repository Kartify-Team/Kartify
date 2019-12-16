import React from 'react';

const ThumbnailGallery = ({ imageURLs }) => {
    return (
        imageURLs.map((url) => <img key={url} className="thumbnail" src={url} />)
    )
}

export default ThumbnailGallery