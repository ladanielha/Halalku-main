import React from "react";
import { Head, Link } from "@inertiajs/react";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import Foodcard from "@/Components/Foodcard";
import Paginator from "@/Components/Paginator";

export default function Makanan(props) {

        console.log("cek dari hal makanan :", props)
    return (
        <div className=" min-h-screen bg-slate-50">
            <Head title="Makanan Halal" />
            <Navbar user={props.auth.user} />
            <div className="px-20 sticky left-0">
                <p>sticky left</p>
                <Link href={route("formreko.makanan")}>Rekomendasi</Link>
            </div>

            <section className='py-10 md:py-16'>
                <div className='container'>
                    <div className='text-center'>
                        <h2 className='text-3xl sm:text-5xl font-bold mb-4'>Kuliner Halal</h2>
                    </div>
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8 xl:gap-10'>
                    </div>
                </div>
            </section>
            <div className="flex justify-center flex-col lg:flex-row lg:flex-wrap lg:items-stretch items-center gap-4 px-10 py-6">
                <Foodcard foods={props.foods.data} />
            </div>
            <div className="flex justify-center items-center">
            
            </div>
            <Footer />
        </div>
    );


}
