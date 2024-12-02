import React from "react";
import GameCard from "../interface/GameCard";
import starIcon from "../assets/icons/star.png";

function Home() {
    return (
        <div className="flex flex-col min-h-screen bg-gray-100">
            <img
                src={starIcon}
                alt="Star Icon"
                className="absolute right-1/4 top-1/4 transform translate-x-1/2 rotate-5 opacity-100 w-36 h-36"
            />

            <div className="flex flex-col items-center justify-center flex-grow p-10">
                <h1 className="text-5xl font-bold mb-4 text-black">Starry</h1>
                <p className="text-lg font-bold text-gray-800 mb-20">The most powerful script ever, available for free.</p>
                
                <div className="flex flex-col items-center">
                    <h2 className="text-3xl font-bold mb-15 text-black"><i>Free</i> Games</h2>

                    <div className="flex flex-wrap justify-center items-center mt-10">
                        <GameCard
                            title="Tower of Hell"
                            link="https://www.roblox.com/games/1962086868/Tower-of-Hell"
                            description="The most <b>powerful</b> Tower of Hell script that comes with 30+ available features."
                            features={[
                                "Godmode",
                                "Instant Win",
                                "Disable Conveyor",
                                <b>Bypass Anti Cheat ✨</b>,
                                <b>Fling Player ✨</b>,
                                "Auto Farm"
                            ]}
                            working={1}
                        />
                        
                        <GameCard
                            title="Break In 2"
                            link="https://www.roblox.com/games/13864661000/Break-In-2-Story"
                            description="A fully <b>server sided</b> script coming packed with 150+ features available for free."
                            features={[
                                <b>Kick Player ✨</b>,
                                "Kill Aura",
                                <b>Claim Player ✨</b>,
                                "Instant Kill Boss",
                                "Delete Map",
                                "Unlock All Endings",
                                "Remove a Player's Limbs",
                                "Spin Enemies"
                            ]}
                            working={2}
                        />
                        
                        <GameCard
                            title="Murder Mystery"
                            link="https://www.roblox.com/games/142823291/Murder-Mystery-2"
                            description="The most <b>undetected</b> script packed with tons of the most powerful features."
                            features={[
                                "Coin Farm",
                                "Ping-based Aimbot",
                                "See Roles",
                                <b>Kill All ✨</b>,
                                <b>Always Become Sheriff ✨</b>,
                                "Knife Aimbot",
                            ]}
                            working={2}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
