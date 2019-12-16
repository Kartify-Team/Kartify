import React, { useState, useEffect } from 'react'
import axios from 'axios'

const ImageUploader = () => {
    const [image, setImage] = useState({});

    const getImageProps = (event) => {
        const files = Array.from(event.target.files)
        const formData = new FormData()
        files.forEach((file, i) => {
            formData.append(i, file)
        })
        axios.post('/img', formData)
            .then(images => console.log(images))
    }


    return (
        <input id="file" name="file" type="file" onChange={getImageProps} />
    )
}

export default ImageUploader