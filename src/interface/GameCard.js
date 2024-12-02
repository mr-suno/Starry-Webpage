import React from 'react';
import '../App.css';

function GameCard({ title, link, description, features, working }) {
    return (
        <div className="bg-white p-6 rounded-lg shadow-2xl transform transition-transform hover:scale-105 max-w-sm m-4">
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold text-black">{title}</h2>
                <a href={link} target="_blank" rel="noopener noreferrer" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors duration-300 ml-4">
                    View Game
                </a>
            </div>

            <p className="text-gray-800 mt-4 text-left" dangerouslySetInnerHTML={{ __html: description }}></p>
            
            {features && features.length > 0 && (
                <ol className="list-decimal list-inside mt-4 text-left">
                    {features.map((feature, index) => (
                        <li key={index} className="text-gray-800">{feature}</li>
                    ))}
                </ol>
            )}

            <div className="flex justify-between mt-4">
                <p className="text-gray-800 text-left"><i>& so much more</i></p>
                <p className={`text-right ${working === 1 ? 'text-green-500' : 'text-red-500'}`}>
                    {working === 1 ? 'WORKING' : working === 0 ? 'PATCHED' : 'UNRELEASED'}
                </p>
            </div>
        </div>
    );
}

export default GameCard;