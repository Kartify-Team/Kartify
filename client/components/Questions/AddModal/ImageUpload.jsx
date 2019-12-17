import axios from 'axios'
import React, { useState } from "react";
import ThumbnailGallery from "../ThumbnailGallery"

const ImageUpload = ({ updatePhotos }) => {
    const [imagePreviews, setImagePreviews] = useState([])
    const uploadImage = (event) => {
        const files = Array.from(event.target.files)
        const formData = new FormData()
        files.forEach((file, i) => { formData.append(i, file) })
        axios.post('/img', formData)
            .then(res => {
                updatePhotos(res.data)
                setImagePreviews(res.data)
            })
    }

    return (<>
        <label htmlFor="images">Please upload images of your product</label>
        <input id="file" name="file"
            type="file" onChange={uploadImage} multiple />
        <ThumbnailGallery imageURLs={imagePreviews} />
    </>)
}

export default ImageUpload