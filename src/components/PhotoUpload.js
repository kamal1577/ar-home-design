// // // import React, { useState } from 'react';
// // // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// // // import { faCamera } from '@fortawesome/free-solid-svg-icons';
// // // import './PhotoUpload.css'; // Ensure the path is correct

// // // const PhotoUpload = ({ onUpload }) => {
// // //     const [selectedImage, setSelectedImage] = useState(null);

// // //     const handleImageChange = (event) => {
// // //         if (event.target.files && event.target.files[0]) {
// // //             const image = URL.createObjectURL(event.target.files[0]);
// // //             setSelectedImage(image);
// // //             onUpload(event.target.files[0]); // Pass the image file to the parent component
// // //         }
// // //     };

// // //     const handleDrop = (event) => {
// // //         event.preventDefault();
// // //         if (event.dataTransfer.files && event.dataTransfer.files[0]) {
// // //             const image = URL.createObjectURL(event.dataTransfer.files[0]);
// // //             setSelectedImage(image);
// // //             onUpload(event.dataTransfer.files[0]);
// // //         }
// // //     };

// // //     const handleDragOver = (event) => {
// // //         event.preventDefault();
// // //     };

// // //     const triggerFileInput = () => {
// // //         document.getElementById('file-input').click();
// // //     };

// // //     return (
// // //         <div className="photo-upload-container">
// // //             <h2>Room Photo Analyzer</h2>
// // //             <div 
// // //                 className="drop-area" 
// // //                 onDrop={handleDrop} 
// // //                 onDragOver={handleDragOver}
// // //             >
// // //                 <p>Drag and drop your photo here, or</p>
// // //                 <input 
// // //                     type="file" 
// // //                     accept="image/*" 
// // //                     onChange={handleImageChange} 
// // //                     style={{ display: 'none' }} 
// // //                     id="file-input" 
// // //                 />
// // //                 <label className="button">
// // //                     <button type="button" className="choose-file-button" onClick={triggerFileInput}>
// // //                         Choose File
// // //                     </button>
// // //                 </label>
// // //                 <button 
// // //                     type="button" 
// // //                     className="take-photo-button" 
// // //                     onClick={triggerFileInput} // Use the same function to open the file input
// // //                 >
// // //                     <FontAwesomeIcon icon={faCamera} /> Take Photo
// // //                 </button>
// // //             </div>
// // //             {selectedImage && (
// // //                 <img src={selectedImage} alt="Selected" style={{ width: '300px', height: 'auto' }} />
// // //             )}
// // //         </div>
// // //     );
// // // };

// // //export default PhotoUpload;

// // import React, { useState } from 'react';

// // const PhotoUpload = ({ onUpload }) => {
// //     const [selectedImage, setSelectedImage] = useState(null);

// //     const handleImageChange = (event) => {
// //         if (event.target.files && event.target.files[0]) {
// //             const image = URL.createObjectURL(event.target.files[0]);
// //             setSelectedImage(image);
// //             onUpload(event.target.files[0]); // Pass the file to the parent component
// //         }
// //     };

// //     const handleTakePhoto = async () => {
// //         try {
// //             const stream = await navigator.mediaDevices.getUserMedia({ video: true });
// //             const video = document.createElement('video');
// //             video.srcObject = stream;
// //             video.play();

// //             const canvas = document.createElement('canvas');
// //             const context = canvas.getContext('2d');

// //             // Wait for the video to be ready to capture
// //             video.addEventListener('loadedmetadata', () => {
// //                 canvas.width = video.videoWidth;
// //                 canvas.height = video.videoHeight;
// //                 context.drawImage(video, 0, 0, canvas.width, canvas.height);
                
// //                 // Use toBlob with the MIME type argument
// //                 canvas.toBlob((blob) => {
// //                     if (blob) {
// //                         const image = URL.createObjectURL(blob); // Create a URL for the blob
// //                         setSelectedImage(image);
// //                         onUpload(blob); // Pass the image blob to the parent component
// //                     }
// //                 }, 'image/png'); // Set the MIME type
// //                 stream.getTracks().forEach(track => track.stop()); // Stop the video stream
// //             });

// //             // Append video element to body to see the live camera feed (optional)
// //             document.body.appendChild(video);
// //         } catch (error) {
// //             console.error('Error accessing camera:', error);
// //         }
// //     };

// //     const handleSubmit = (event) => {
// //         event.preventDefault();
// //         if (selectedImage) {
// //             onUpload(selectedImage); // Pass the image to the parent component
// //         }
// //     };

// //     return (
// //         <div>
// //             <h2>Upload Your Room Photo</h2>
// //             <form onSubmit={handleSubmit}>
// //                 <input type="file" accept="image/*" onChange={handleImageChange} />
// //                 <button type="button" onClick={handleTakePhoto}>Take Photo</button>
// //                 <button type="submit">Analyze</button>
// //             </form>
// //             {selectedImage && <img src={selectedImage} alt="Selected" style={{ width: '300px', height: 'auto' }} />}
// //         </div>
// //     );
// // };

// // export default PhotoUpload;


// import React, { useState } from 'react';
// import './PhotoUpload.css'; // Import CSS file for custom styles

// const PhotoUpload = ({ onUpload }) => {
//     const [selectedImage, setSelectedImage] = useState(null);

//     const handleImageChange = (event) => {
//         if (event.target.files && event.target.files[0]) {
//             const image = URL.createObjectURL(event.target.files[0]);
//             setSelectedImage(image);
//             onUpload(event.target.files[0]); // Pass the file to the parent component
//         }
//     };

//     const handleTakePhoto = async () => {
//         try {
//             const stream = await navigator.mediaDevices.getUserMedia({ video: true });
//             const video = document.createElement('video');
//             video.srcObject = stream;
//             video.play();

//             const canvas = document.createElement('canvas');
//             const context = canvas.getContext('2d');

//             video.addEventListener('loadedmetadata', () => {
//                 canvas.width = video.videoWidth;
//                 canvas.height = video.videoHeight;
//                 context.drawImage(video, 0, 0, canvas.width, canvas.height);
                
//                 canvas.toBlob((blob) => {
//                     if (blob) {
//                         const image = URL.createObjectURL(blob); 
//                         setSelectedImage(image);
//                         onUpload(blob);
//                     }
//                 }, 'image/png');
//                 stream.getTracks().forEach(track => track.stop());
//             });

//             document.body.appendChild(video);
//         } catch (error) {
//             console.error('Error accessing camera:', error);
//         }
//     };

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         if (selectedImage) {
//             onUpload(selectedImage);
//         }
//     };

//     return (
//         <div className="photo-upload-container">
//             <h2 className="title">Upload Your Room Photo</h2>
//             <form onSubmit={handleSubmit} className="upload-form">
//                 <input className="file-input" type="file" accept="image/*" onChange={handleImageChange} />
//                 <div className="buttons-container">
//                     <button type="button" className="btn take-photo-btn" onClick={handleTakePhoto}>
//                         Take Photo
//                     </button>
//                     <button type="submit" className="btn analyze-btn">Analyze</button>
//                 </div>
//             </form>
//             {selectedImage && <img src={selectedImage} alt="Selected" className="selected-image" />}
//         </div>
//     );
// };

// export default PhotoUpload;


import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import './PhotoUpload.css'; // Ensure your styles are updated here

const PhotoUpload = ({ onUpload }) => {
    const [selectedImage, setSelectedImage] = useState(null);

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
            const video = document.createElement('video');
            video.srcObject = stream;
            video.play();

            const canvas = document.createElement('canvas');
            const context = canvas.getContext('2d');

            video.addEventListener('loadedmetadata', () => {
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
                stream.getTracks().forEach(track => track.stop());
            });

            document.body.appendChild(video);
        } catch (error) {
            console.error('Error accessing camera:', error);
        }
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
            >
                <FontAwesomeIcon icon={faCamera} /> Take Photo
            </button>

            {selectedImage && (
                <img src={selectedImage} alt="Selected" className="selected-image" />
            )}
        </div>
    );
};

export default PhotoUpload;
