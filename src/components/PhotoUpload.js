import React, { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import './PhotoUpload.css';

const PhotoUpload = ({ onUpload }) => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [isTakingPhoto, setIsTakingPhoto] = useState(false);
    const videoRef = useRef(null);
    const canvasRef = useRef(null);
    const [stream, setStream] = useState(null);

    const handleImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            const image = URL.createObjectURL(event.target.files[0]);
            setSelectedImage(image);
            onUpload(event.target.files[0]); // Pass the file to the parent component
        }
    };

    const handleTakePhoto = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ video: true });
            setStream(stream);
            if (videoRef.current) {
                videoRef.current.srcObject = stream; // Ensure videoRef is not null
                videoRef.current.play();
                setIsTakingPhoto(true);
            }
        } catch (error) {
            console.error('Error accessing camera:', error);
        }
    };

    const capturePhoto = () => {
        const canvas = canvasRef.current;
        const video = videoRef.current;
        const context = canvas.getContext('2d');

        if (video && canvas) {
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;
            context.drawImage(video, 0, 0, canvas.width, canvas.height);

            canvas.toBlob((blob) => {
                if (blob) {
                    const image = URL.createObjectURL(blob);
                    setSelectedImage(image);
                    onUpload(blob); // Pass the image blob to the parent component
                }
            }, 'image/png');

            // Stop the camera stream
            stream.getTracks().forEach(track => track.stop());
            setIsTakingPhoto(false);
        }
    };

    const handleRetake = () => {
        // Stop the current stream before taking a new photo
        if (stream) {
            stream.getTracks().forEach(track => track.stop());
        }
        setSelectedImage(null);
        handleTakePhoto(); // Restart the photo-taking process
    };

    const handleDelete = () => {
        // Stop the camera stream and reset the state
        if (stream) {
            stream.getTracks().forEach(track => track.stop());
        }
        setSelectedImage(null);
        setIsTakingPhoto(false);
    };

    return (
        <div className="photo-upload-container">
            <h2 className="title">Room Photo Analyzer</h2>

            <div className="drop-area">
                <p>Drag and drop your photo here, or click to select</p>
                <input 
                    className="file-input"
                    type="file" 
                    accept="image/*" 
                    onChange={handleImageChange} 
                    style={{ display: 'none' }} 
                    id="file-input" 
                />
                <button 
                    type="button" 
                    className="choose-file-button" 
                    onClick={() => document.getElementById('file-input').click()}
                >
                    Choose File
                </button>
            </div>

            <button 
                type="button" 
                className="take-photo-button" 
                onClick={handleTakePhoto}
                disabled={isTakingPhoto} // Disable button while taking photo
            >
                <FontAwesomeIcon icon={faCamera} /> Take Photo
            </button>

            {selectedImage && (
                <div>
                    <img src={selectedImage} alt="Selected" className="selected-image" />
                    <div>
                        <button onClick={handleRetake}>Retake</button>
                        <button onClick={handleDelete}>Delete</button>
                    </div>
                </div>
            )}

            {/* Show the video element when taking a photo */}
            {isTakingPhoto && (
                <div>
                    <video ref={videoRef} className="video-preview" width="300" height="225" />
                    <button onClick={capturePhoto}>Capture Photo</button>
                </div>
            )}
            <canvas ref={canvasRef} width="300" height="225" style={{ display: 'none' }} />
        </div>
    );
};

export default PhotoUpload;
