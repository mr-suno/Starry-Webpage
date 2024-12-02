import React from 'react';
import '../App.css';

function ContactCard({ name, link, about, role, profilePicture }) {
    return (
        <div className="bg-white p-6 rounded-lg shadow-2xl transform transition-transform hover:scale-105 max-w-sm m-4">
            <div className="flex items-start justify-between mb-4">
                <div className="flex items-start">
                    <img src={profilePicture} alt={`${name}'s profile`} className="w-12 h-12 rounded-full mr-4" />
                    <h2 className="text-2xl font-bold text-black text-left">{name}</h2>
                </div>
                <a href={link} target="_blank" rel="noopener noreferrer" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors duration-300 ml-4 text-center">
                    View Discord Profile
                </a>
            </div>

            <p className="text-gray-800 mt-4 text-left" dangerouslySetInnerHTML={{ __html: about }}></p>
            
            {role && role.length > 0 && (
                <ul className="list-disc list-inside mt-4 text-gray-800 text-left">
                    {role.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default ContactCard;
