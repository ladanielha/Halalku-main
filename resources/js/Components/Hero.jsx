import { Link } from "@inertiajs/react"

import b from "/resources/images/pngwing.com.png"

import c from "/resources/images/makan.png"

import d from "/resources/images/daging icon.png"

import video from "/resources/images/Indonesia.mp4"
export const fontWeights = {
    Thin: 100,
    UltraLight: 200,
    Light: 300,
    Regular: 400,
    Medium: 500,
    Semibold: 600,
    Bold: 700,
    Heavy: 800,
    Black: 900
};
const Hero = () => {
    return (
        <>
            <div className="hero min-h-screen bg-base-100">
                <div className="hero min-h-screen">
                    <video
                        autoPlay
                        loop
                        muted
                        className="w-full h-full object-cover"
                    >
                        <source src={video} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <div className="hero-overlay bg-opacity-70"></div>
                    <div className="hero-content text-center text-white">
                        <div className="max-w">
                            <h1 className="mb-5 text-5xl font-thin">Assalamualaikum,</h1>
                            <h1 className="mb-5 text-5xl font-heavy">
                                Bingung berwisata? Silahkan Langsung Cari!</h1>
                            <div className="flex items-center justify-center space-x-2">
                                <button className="btn btn-secondary btn-lg">
                                    <img src={b} />
                                    <Link href={route("searchtempat")} as="button">Wisata Menarik</Link>
                                </button>
                                <button className="btn btn-secondary btn-lg">
                                    <img src={c} />
                                    <Link to="/" as="button">Makanan Khas</Link>
                                </button>
                                <button className="btn btn-secondary btn-lg">
                                    <img src={d} />
                                    <Link to="/" as="button">Jenis Daging</Link>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="hero min-h-screen bg-primary">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src="/uploads/background.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold text-white">Silahkan pilih tempat Wisata dan Makanan yang ingin dikunjungi!
                        </h1>
                        <p className="py-6 text-3xl text-white">Sistem Rekomendasi Tempat Wisata dan Makanan</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero