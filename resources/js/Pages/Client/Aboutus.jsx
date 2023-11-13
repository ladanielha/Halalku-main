import { Link } from "@inertiajs/react"

import b from "/resources/images/pngwing.com.png"

import c from "/resources/images/makan.png"

import d from "/resources/images/daging icon.png"
import React from "react";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
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
const Aboutus = (props) => {
    return (
        <>
            <Navbar user={props.auth.user} />
            <div className="hero min-h-screen bg-base-100">

                <div className="hero min-h-screen" style={{ backgroundImage: 'url(/uploads/background.jpg)' }}>
                    <div className="hero-overlay bg-opacity-70"></div>
                    <div className="hero-content text-center text-white">
                        <div className="max-w">
                            <h1 className="mb-5 text-5xl font-heavy">About us</h1>
                            <h1 className="mb-5  font-thin">
                                Siapa Kami?
                                Halalku adalah hasil dari semangat dan komitmen kami untuk memberikan layanan terbaik kepada komunitas halal di Indonesia. Kami adalah tim beragam individu yang bersatu dalam visi untuk memudahkan Anda menemukan makanan lezat, tempat wisata menarik, dan jenis daging berkualitas tinggi dengan mudah dan nyaman.

                                Apa yang Kami Tawarkan?

                                Rekomendasi Makanan: Halalku adalah pemandu kuliner andal Anda. Kami menghadirkan daftar lengkap makanan halal dari berbagai masakan dan restoran terbaik di seluruh Indonesia. Tim ahli kami secara cermat memilih dan merekomendasikan tempat-tempat makan yang memenuhi standar halal tertinggi sehingga Anda dapat menikmati hidangan lezat tanpa khawatir.

                                Wisata Halal: Jelajahi keindahan Indonesia dengan keyakinan penuh. Halalku membantu Anda menemukan destinasi wisata yang halal dan ramah keluarga. Dari pantai eksotis hingga objek wisata sejarah, kami memandu Anda melalui perjalanan tak terlupakan yang sesuai dengan prinsip kehalalan.

                                Jenis Daging: Kami juga menyediakan akses ke berbagai jenis daging halal terbaik. Dari daging sapi segar hingga daging ayam yang berkualitas, Halalku adalah sumber terpercaya bagi Anda yang peduli tentang asal-usul dan kualitas daging yang Anda konsumsi.</h1>
                            <div className="flex items-center justify-center space-x-2">
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="hero min-h-screen bg-primary">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src="/uploads/background.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold text-white py-10">Kenapa pilih halalku?
                        </h1>
                        <p className="py-6 font-medium text-white">
                            <span className="text-3xl text-blue-600 bg-white px-2 py-1 rounded">
                                Kualitas Terbaik<br></br>
                            </span> <br></br><br></br>Kami mengutamakan kualitas dalam semua yang kami tawarkan. Setiap rekomendasi makanan, destinasi wisata, dan jenis daging yang kami hadirkan telah dipilih dengan teliti untuk memenuhi standar halal tertinggi.
                        </p>

                        <p className="py-6 font-medium text-white">
                            <span className="text-3xl text-blue-600 bg-white px-2 py-1 rounded">
                                Kemudahan
                            </span> <br></br><br></br>Platform kami dirancang untuk memberikan pengalaman yang mudah dan nyaman. Cari, temukan, dan nikmati apa yang Anda cari dengan beberapa kali klik.
                        </p>

                        <p className="py-6 font-medium text-white">
                            <span className="text-3xl text-blue-600 bg-white px-2 py-1 rounded">
                                Dukungan Pelanggan
                            </span> <br></br><br></br>Tim dukungan pelanggan kami selalu siap membantu Anda. Pertanyaan, saran, atau masukan, kami selalu mendengarkan Anda.
                        </p>

                        <p className="py-6 font-medium text-white">
                            <span className="text-3xl text-blue-600 bg-white px-2 py-1 rounded">
                                Komunitas Halal
                            </span> <br></br><br></br>Halalku bukan hanya sebuah platform, tapi juga komunitas yang peduli tentang kehalalan. Bergabunglah dengan kami dan temukan orang-orang dengan minat yang sama.
                        </p>

                        <p className="py-6 font-medium text-white">
                            <span className="text-3xl text-blue-600 bg-white px-2 py-1 rounded">
                                Bersama Halalku
                            </span> <br></br><br></br>Anda akan menemukan cara baru untuk mengeksplorasi kuliner, destinasi wisata, dan jenis daging halal di seluruh Indonesia. Jadilah bagian dari perjalanan kami menuju pengalaman halal yang tak terlupakan.
                        </p>

                        <p className="py-6 font-medium  text-white text-center justify-center">
                            <span className="text-5xl text-orange-950 bg-white px-2 py-1 rounded">
                                Selamat berselancar di Halalku!
                            </span>
                        </p>

                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Aboutus