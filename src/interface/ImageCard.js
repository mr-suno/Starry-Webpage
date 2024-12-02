import React from 'react';
import '../App.css';

function ImageCard({ image }) {
    return (
        <div className="bg-white p-6 rounded-lg shadow-2xl transform transition-transform hover:scale-105 max-w-sm m-4">
            <img src={image} alt="Game" className="w-full h-auto rounded-lg shadow-xl" />
        </div>
    );
}

export default ImageCard;