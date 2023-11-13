import React from "react";
import { Head } from "@inertiajs/react";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import SearchBar from "@/Components/Searchplace";
import CityCard from "@/Components/CityPlaceCard";
export default function Home(props) {
    return (
        <div className="min-h-screen bg-slate-50">
            <Head title="Wisata Halal Cirebon" />
            <Navbar user={props.auth.user} />

            <div className="flex justify-center flex-col lg:flex-row lg:flex-wrap lg:items-stretch items-center gap-4 px-10 py-6">
                <SearchBar city={props.city} />
            </div>

            <section className='py-10 md:py-16'>
                <div className='container' style={{ paddingLeft: '20px' }}> {/* Add left padding here */}
                    <div className='text-center'>
                        <h2 className='text-3xl sm:text-5xl font-bold mb-4'>Pilihan Kota</h2>
                    </div>
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8 xl:gap-10'>
                        <CityCard city={props.city} />
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}

