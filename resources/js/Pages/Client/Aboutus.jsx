import React from "react";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";

const AboutUs = (props) => {
    return (
        <>
            <div>
                <Navbar user={props.auth.user} />
            </div>
            <div className="about-us">
            </div>

            <div className="py-16 bg-white">
                <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                    <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                        <div className="md:5/12 lg:w-5/12">
                            <img src="https://miro.medium.com/v2/resize:fit:651/0*otl3LLcvTaWHn-Rq.jpg" alt="image" loading="lazy" width="" height="" />
                        </div>
                        <div className="md:7/12 lg:w-6/12">
                            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">About Us</h2>
                            <p className="mt-6 text-gray-600"> Selamat datang di Halalku, platform e-commerce yang menghadirkan pengalaman kuliner dan wisata halal yang tak tertandingi di seluruh Indonesia. Kami bangga menjadi teman setia Anda dalam mencari makanan, wisata, dan jenis daging halal yang sesuai dengan selera dan keinginan Anda.

                                Siapa Kami?
                                Halalku adalah hasil dari semangat dan komitmen kami untuk memberikan layanan terbaik kepada komunitas halal di Indonesia. Kami adalah tim beragam individu yang bersatu dalam visi untuk memudahkan Anda menemukan makanan lezat, tempat wisata menarik, dan jenis daging berkualitas tinggi dengan mudah dan nyaman.

                                Apa yang Kami Tawarkan?

                                Rekomendasi Makanan: Halalku adalah pemandu kuliner andal Anda. Kami menghadirkan daftar lengkap makanan halal dari berbagai masakan dan restoran terbaik di seluruh Indonesia. Tim ahli kami secara cermat memilih dan merekomendasikan tempat-tempat makan yang memenuhi standar halal tertinggi sehingga Anda dapat menikmati hidangan lezat tanpa khawatir.

                                Wisata Halal: Jelajahi keindahan Indonesia dengan keyakinan penuh. Halalku membantu Anda menemukan destinasi wisata yang halal dan ramah keluarga. Dari pantai eksotis hingga objek wisata sejarah, kami memandu Anda melalui perjalanan tak terlupakan yang sesuai dengan prinsip kehalalan.

                                Jenis Daging: Kami juga menyediakan akses ke berbagai jenis daging halal terbaik. Dari daging sapi segar hingga daging ayam yang berkualitas, Halalku adalah sumber terpercaya bagi Anda yang peduli tentang asal-usul dan kualitas daging yang Anda konsumsi.


                            </p>
                            <p className="mt-4 text-gray-600"> Mengapa Memilih Halalku?

                                Kualitas Terbaik: Kami mengutamakan kualitas dalam semua yang kami tawarkan. Setiap rekomendasi makanan, destinasi wisata, dan jenis daging yang kami hadirkan telah dipilih dengan teliti untuk memenuhi standar halal tertinggi.

                                Kemudahan: Platform kami dirancang untuk memberikan pengalaman yang mudah dan nyaman. Cari, temukan, dan nikmati apa yang Anda cari dengan beberapa kali klik.

                                Dukungan Pelanggan: Tim dukungan pelanggan kami selalu siap membantu Anda. Pertanyaan, saran, atau masukan, kami selalu mendengarkan Anda.

                                Komunitas Halal: Halalku bukan hanya sebuah platform, tapi juga komunitas yang peduli tentang kehalalan. Bergabunglah dengan kami dan temukan orang-orang dengan minat yang sama.

                                Bersama Halalku, Anda akan menemukan cara baru untuk mengeksplorasi kuliner, destinasi wisata, dan jenis daging halal di seluruh Indonesia. Jadilah bagian dari perjalanan kami menuju pengalaman halal yang tak terlupakan.

                                Selamat berselancar di Halalku!</p>
                        </div>
                    </div>
                </div>
            </div>

        </>

    );
};

export default AboutUs;

