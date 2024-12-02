import React from "react";
import GameCard from "../interface/GameCard";
import bagIcon from "../assets/icons/bag.png";

function Premium() {
    return (
        <div className="flex flex-col min-h-screen bg-gray-100">
            <img
                src={bagIcon}
                alt="Bag Icon"
                className="absolute right-1/4 top-1/4 transform translate-x-1/2 rotate-5 opacity-100 w-36 h-36"
            />

            <div className="flex flex-col items-center justify-center flex-grow p-10">
                <h1 className="text-5xl font-bold mb-4 text-black">Starry <span className="italic bg-gradient-to-r from-green-400 via-green-500 to-green-600 text-transparent bg-clip-text shine">Premium</span></h1>
                <p className="text-lg font-bold text-gray-800 mb-20">Experience the true <i>power</i> in exploiting, with Starry.</p>
                
                <div className="flex flex-col items-center">
                    <h2 className="text-3xl font-bold mb-15 text-black"><i>Premium</i> Games</h2>
                </div>

                <div className="flex flex-wrap justify-center items-center mt-10">
                    <GameCard
                        title="Death Ball"
                        link="https://www.roblox.com/games/15002061926/Death-Ball"
                        description="The most <b>precise</b> script available on the market, packed with 25+ features."
                        features={[
                            "Godmode",
                            <b>Ping-based Auto Parry ✨</b>,
                            "Auto Open Cards",
                            "Auto Sell Dupes",
                            "Auto Gemtoki",
                            "Boss Farming",
                            <b>Freeze Ball ✨</b>,
                            <b>Teleport Ball Anywhere ✨</b>
                        ]}
                        working={2}
                    />

                    <GameCard
                        title="Jailbreak"
                        link="https://www.roblox.com/games/606849621/Jailbreak"
                        description="The most <b>fully undetected</b> script available, destroying our competition."
                        features={[
                            <b>Auto Rob ✨</b>,
                            <b>Auto Arrest ✨</b>,
                            "Store Info",
                            "Door Noclip",
                            "Auto Get Guns",
                            "Auto Get Keycard"
                        ]}
                        working={2}
                    />
                </div>
            </div>
        </div>
    );
}

export default Premium;
