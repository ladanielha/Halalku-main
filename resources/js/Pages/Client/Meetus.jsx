import React from "react";
import Navbar from "@/Components/Navbar";
import g from "/resources/images/Fred.png";
import b from "/resources/images/erick.jpg";
import d from "/resources/images/daniel.jpeg";
import w from "/resources/images/wilson.jpg";
import h from "/resources/images/herdi.jpeg";
import i from "/resources/images/dinan.jpeg";

const Meetus = (props) => {
    const imageWidth = "165px"; // Set the desired width
    const imageHeight = "165px"; // Set the desired height

    return (
        <>
            <div>
                <Navbar user={props.auth.user} />
            </div>
            <div className="about-us"></div>

            <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
                <div className="text-center pb-12">
                    <h2 className="text-base font-bold text-indigo-600">
                        Team Halalku
                    </h2>
                    <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-gray-900">
                    -    Check our awesome team members
                    </h1>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="w-full bg-white rounded-lg shadow-lg overflow-hidden flex flex-col justify-center items-center">
                        <div>
                            <img
                                className="object-center object-cover"
                                src={g}
                                alt="photo"
                                style={{ width: imageWidth, height: imageHeight }}
                            />
                        </div>
                        <div className="text-center py-8 sm:py-6">
                            <p className="text-xl text-gray-700 font-bold mb-2">
                                Frederick Alexander Badaruddin
                            </p>
                            <p className="text-base text-gray-400 font-normal">Software Engineer</p>
                            <a href="https://www.linkedin.com/in/laurentius-daniel-719ab3131/"className="text-base text-cyan-500 font-semibold">Visit my LinkedIn</a>
                        </div>
                    </div>
                    <div className="w-full bg-white rounded-lg shadow-lg overflow-hidden flex flex-col justify-center items-center">
                        <div>
                            <img
                                className="object-center object-cover"
                                src={d}
                                alt="photo"
                                style={{ width: imageWidth, height: imageHeight }}
                            />
                        </div>
                        <div className="text-center py-8 sm:py-6">
                            <p className="text-xl text-gray-700 font-bold mb-2">Laurentius Daniel</p>
                            <p className="text-base text-gray-400 font-normal">Sistem Rekomendasi</p>
                            <a href="https://www.linkedin.com/in/laurentius-daniel-719ab3131/"className="text-base text-cyan-500 font-semibold">Visit my LinkedIn</a>
                        </div>
                    </div>
                    <div className="w-full bg-white rounded-lg shadow-lg overflow-hidden flex flex-col justify-center items-center">
                        <div>
                            <img
                                className="object-center object-cover"
                                src={b}
                                alt="photo"
                                style={{ width: imageWidth, height: imageHeight }}
                            />
                        </div>
                        <div className="text-center py-8 sm:py-6">
                            <p className="text-xl text-gray-700 font-bold mb-2">Erick Abraham Sanggor</p>
                            <p className="text-base text-gray-400 font-normal">Dev Ops</p>
                        </div>
                    </div>
                    <div className="w-full bg-white rounded-lg shadow-lg overflow-hidden flex flex-col justify-center items-center">
                        <div>
                            <img
                                className="object-center object-cover"
                                src={w}
                                alt="photo"
                                style={{ width: imageWidth, height: imageHeight }}
                            />
                        </div>
                        <div className="text-center py-8 sm:py-6">
                            <p className="text-xl text-gray-700 font-bold mb-2">Wilson Alvis</p>
                            <p className="text-base text-gray-400 font-normal">BackEnd</p>
                        </div>
                    </div>
                    <div className="w-full bg-white rounded-lg shadow-lg overflow-hidden flex flex-col justify-center items-center">
                        <div>
                            <img
                                className="object-center object-cover"
                                src={h}
                                alt="photo"
                                style={{ width: imageWidth, height: imageHeight }}
                            />
                        </div>
                        <div className="text-center py-8 sm:py-6">
                            <p className="text-xl text-gray-700 font-bold mb-2">Herdi Prayudha</p>
                            <p className="text-base text-gray-400 font-normal">Sistem Rekomendasi</p>
                        </div>
                    </div>
                    <div className="w-full bg-white rounded-lg shadow-lg overflow-hidden flex flex-col justify-center items-center">
                        <div>
                            <img
                                className="object-center object-cover"
                                src={i}
                                alt="photo"
                                style={{ width: imageWidth, height: imageHeight }}
                            />
                        </div>
                        <div className="text-center py-8 sm:py-6">
                            <p className="text-xl text-gray-700 font-bold mb-2">Dinan</p>
                            <p className="text-base text-gray-400 font-normal">Sistem Rekomendasi, Survey</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Meetus;
