import React, { useState } from 'react';

const PhotoUpload = ({ onUpload }) => {
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            const image = URL.createObjectURL(event.target.files[0]);
            setSelectedImage(image);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (selectedImage) {
            onUpload(selectedImage); // Pass the image to the parent component
        }
    };

    return (
        <div>
            <h2>Upload Your Room Photo</h2>
            <form onSubmit={handleSubmit}>
                <input type="file" accept="image/*" onChange={handleImageChange} />
                <button type="submit">Analyze</button>
            </form>
            {selectedImage && <img src={selectedImage} alt="Selected" style={{ width: '300px', height: 'auto' }} />}
        </div>
    );
};

export default PhotoUpload;
