import React from "react";
import ContactCard from "../interface/ContactCard";
import sunoProfilePicture from "../assets/suno.webp";
import zadeProfilePicture from "../assets/zade.webp";

function Contributors() {
    return (
        <div className="flex flex-col min-h-screen bg-gray-100">
            <div className="absolute left-1/4 top-1/4 transform -translate-x-1/2 -translate-y-1/2 rotate-5 opacity-50 text-9xl">
                🚀
            </div>

            <div className="flex flex-col items-center justify-center flex-grow p-10">
                <h1 className="text-5xl font-bold mb-4 text-black">Developers</h1>
                <p className="text-lg font-bold text-gray-800 mb-20">Meet the full team behind Starry & learn how to contact us.</p>

                <div className="flex flex-col items-center">
                    <div className="flex flex-wrap justify-center items-center mt-10">
                        <ContactCard
                            name="Suno"
                            link="https://discord.com/users/1002377371892072498"
                            about="Self-taught software developer, designer, and creator of Starry."
                            role={[
                                "Founder",
                                "Developer",
                                "UI/UX Designer",
                                "Web Developer"
                            ]}
                            profilePicture={sunoProfilePicture}
                        />

                        <ContactCard
                            name="Zade"
                            link="https://discord.com/users/691995909634129941"
                            about="Self-taught developer, IT specialist, and developer of Starry."
                            role={[
                                "Developer",
                                "Idea Specialist"
                            ]}
                            profilePicture={zadeProfilePicture}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contributors;