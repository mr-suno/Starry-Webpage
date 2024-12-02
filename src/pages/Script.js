import React from "react";
import { Copy } from 'lucide-react';
import ImageCard from "../interface/ImageCard";
import puppyImage from "../assets/screenshots/puppy.avif";
import dogImage from "../assets/screenshots/dog.webp";
import paperclipIcon from "../assets/icons/paperclip.png";

function Script() {
    const copyToClipboard = () => {
        const textarea = document.getElementById("script-textarea");
        
        navigator.clipboard.writeText(textarea.value);
    };

    return (
        <div className="flex flex-col min-h-screen bg-gray-100 pt-20">
            <img
                src={paperclipIcon}
                alt="Paperclip Icon"
                className="absolute right-1/4 top-1/4 transform translate-x-1/2 rotate-5 opacity-100 w-40 h-36"
            />

            <div className="flex flex-col items-center justify-center flex-grow p-2">
                <h1 className="text-5xl font-bold mb-10 text-black">Use Starry</h1>

                <div className="relative w-1/3">
                    <textarea
                        id="script-textarea"
                        className="w-full h-16 p-2 no-scroll mb-5 shadow-lg border border-gray-300 rounded resize-none"
                        rows="5"
                        readOnly
                        value={`getgenv().ignoreGameCheck = false\nloadstring(game:HttpGet("https://starry.rocks/raw"))()`}
                    />

                    <button onClick={copyToClipboard} className="absolute right-2 top-2 p-1 bg-gray-200 rounded">
                        <Copy size={18}/>
                    </button>
                </div>

                <div className="flex flex-wrap justify-center items-center mt-10">
                    <ImageCard
                        image={puppyImage}
                    />

                    <ImageCard
                        image={dogImage}
                    />
                </div>
            </div>
        </div>
    );
}

export default Script;
