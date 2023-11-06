import React from "react";
import { Head } from "@inertiajs/react";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faMoneyBillAlt, faShoppingCart } from "@fortawesome/free-solid-svg-icons";

export default function Wisatadetail(props) {
    const {
        namatempat,
        gambar,
        jeniswisata,
        alamat,
        jambuka,
        jamtutup,
        harga,
        desc,
        link
    } = props.places;

    // Fungsi untuk mengubah harga ke format dengan titik koma
    const formatRupiah = (price) => {
        return new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" }).format(price);
    };

    return (
        <div className="min-h-screen bg-slate-50">
            <Head title="Wisata Halal Cirebon" />
            <Navbar user={props.auth.user} />
            <section className="py-8 text-center">
                <div className="container">
                    <h2 className="text-4xl sm:text-5xl font-bold text-primary">{namatempat}</h2>
                </div>
            </section>
            <div className="flex flex-col md:flex-row items-center gap-4 px-10 py-6">
                <section className="mb-16 text-center md:text-left">
                    <div className="mb-8 grid items-center gap-6 md:grid-cols-2 xl:gap-12">
                        <div className="mb-6 md-0">
                            <div className="relative rounded-lg shadow-lg border border-primary">
                                <img src={gambar} className="w-full" alt={namatempat} />
                            </div>
                        </div>
                        <div>
                            <h3 className="mb-3 text-2xl font-bold text-primary">{jeniswisata}</h3>
                            <h3 className="mb-3 text-2xl font-bold text-primary">{alamat}</h3>
                            <div className="mb-3 text-lg font-bold text-primary dark:text-primary-500">
                                <FontAwesomeIcon icon={faMoneyBillAlt} className="mr-2" />
                                {formatRupiah(harga)}
                            </div>
                            <p className="mb-4 text-lg text-primary dark:text-primary-500">
                                <FontAwesomeIcon icon={faClock} className="mr-2" />
                                Opening Hours: {jambuka}:00 AM - {jamtutup}:00 PM
                            </p>
                            <p className="mb-10 text-neutral-500 dark:text-neutral-900">
                                {desc}
                            </p>
                            <a href={link} className="btn btn-primary">Lokasi Google Maps</a>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </div>
    );
}
