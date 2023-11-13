import { router } from '@inertiajs/react';
import React, { useState } from 'react';



const Formbobotmahp = ({ props }) => {


    const [harga_kualitas, setBobothk] = useState(null);
    const [harga_gizi, setBobothg] = useState(null);
    const [harga_porsi, setBobothp] = useState(null);
    const [kualitas_gizi, setBobotkg] = useState(null);
    const [kualitas_porsi, setBobotkp] = useState(null);
    const [gizi_porsi, setBobotgp] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();


        router.post('/hitungbobotmakanan', {
            harga_kualitas: harga_kualitas,
            harga_gizi: harga_gizi,
            harga_porsi: harga_porsi,
            kualitas_gizi: kualitas_gizi,
            kualitas_porsi: kualitas_porsi,
            gizi_porsi: gizi_porsi,
        });
        // Kirim  nilai ke laravel
        // Kirim  nilai ke laravel
        //Inertia.post("/your-backend", { bobotawal });
    };

    return (

        <form onSubmit={handleSubmit}>
            <div className="flex flex-col space-y-2 p-2 ">

                <div className="flex justify-between font-semibold">
                    <div className="flex-1 text-left">Harga</div>
                    <div className="flex-1 text-right">Kualitas</div>
                </div>
               
                <input type="range" className="w-full" min="-8" max="8" step="1" defaultValue={0} onChange={e => setBobothk(e.target.value)} />
               
                <ul className="flex justify-between w-full px-[10px]">
                    <li className="flex justify-center relative"><span className="absolute">9</span></li>
                    <li className="flex justify-center relative"><span className="absolute">8</span></li>
                    <li className="flex justify-center relative"><span className="absolute">7</span></li>
                    <li className="flex justify-center relative"><span className="absolute">6</span></li>
                    <li className="flex justify-center relative"><span className="absolute">5</span></li>
                    <li className="flex justify-center relative"><span className="absolute">4</span></li>
                    <li className="flex justify-center relative"><span className="absolute">3</span></li>
                    <li className="flex justify-center relative"><span className="absolute">2</span></li>
                    <li className="flex justify-center relative"><span className="absolute">1</span></li>
                    <li className="flex justify-center relative"><span className="absolute">2</span></li>
                    <li className="flex justify-center relative"><span className="absolute">3</span></li>
                    <li className="flex justify-center relative"><span className="absolute">4</span></li>
                    <li className="flex justify-center relative"><span className="absolute">5</span></li>
                    <li className="flex justify-center relative"><span className="absolute">6</span></li>
                    <li className="flex justify-center relative"><span className="absolute">7</span></li>
                    <li className="flex justify-center relative"><span className="absolute">8</span></li>
                    <li className="flex justify-center relative"><span className="absolute">9</span></li>
                </ul>
                
                {/* <div className='flex p-2 b-2 justify-center'>
                    <h1 className='b-2 p-4'>Nilai : {harga_kualitas}</h1>
                </div> */}
            </div>

            <div className="flex flex-col space-y-2 p-2 ">

            <div className="flex justify-between font-semibold">
                    <div className="flex-1 text-left">Harga</div>
                    <div className="flex-1 text-right">Gizi</div>
                </div>
               
                <input type="range" className="w-full" min="-8" max="8" step="1" defaultValue={0} onChange={e => setBobothg(e.target.value)} />
                <ul className="flex justify-between w-full px-[10px]">
                <li className="flex justify-center relative"><span className="absolute">9</span></li>
                    <li className="flex justify-center relative"><span className="absolute">8</span></li>
                    <li className="flex justify-center relative"><span className="absolute">7</span></li>
                    <li className="flex justify-center relative"><span className="absolute">6</span></li>
                    <li className="flex justify-center relative"><span className="absolute">5</span></li>
                    <li className="flex justify-center relative"><span className="absolute">4</span></li>
                    <li className="flex justify-center relative"><span className="absolute">3</span></li>
                    <li className="flex justify-center relative"><span className="absolute">2</span></li>
                    <li className="flex justify-center relative"><span className="absolute">1</span></li>
                    <li className="flex justify-center relative"><span className="absolute">2</span></li>
                    <li className="flex justify-center relative"><span className="absolute">3</span></li>
                    <li className="flex justify-center relative"><span className="absolute">4</span></li>
                    <li className="flex justify-center relative"><span className="absolute">5</span></li>
                    <li className="flex justify-center relative"><span className="absolute">6</span></li>
                    <li className="flex justify-center relative"><span className="absolute">7</span></li>
                    <li className="flex justify-center relative"><span className="absolute">8</span></li>
                    <li className="flex justify-center relative"><span className="absolute">9</span></li>
                </ul>
               {/*  <div className='flex p-2 b-2 justify-center'>
                    <h1 className='b-2 p-4'>Nilai : {harga_gizi}</h1>
                </div> */}

            </div>
            <div className="flex flex-col space-y-2 p-2 ">
            <div className="flex justify-between font-semibold">
                    <div className="flex-1 text-left">Harga</div>
                    <div className="flex-1 text-right">Porsi</div>
                </div>
               
                <input type="range" className="w-full" min="-8" max="8" step="1" defaultValue={0} onChange={e => setBobothp(e.target.value)} />
                <ul className="flex justify-between w-full px-[10px]">
                <li className="flex justify-center relative"><span className="absolute">9</span></li>
                    <li className="flex justify-center relative"><span className="absolute">8</span></li>
                    <li className="flex justify-center relative"><span className="absolute">7</span></li>
                    <li className="flex justify-center relative"><span className="absolute">6</span></li>
                    <li className="flex justify-center relative"><span className="absolute">5</span></li>
                    <li className="flex justify-center relative"><span className="absolute">4</span></li>
                    <li className="flex justify-center relative"><span className="absolute">3</span></li>
                    <li className="flex justify-center relative"><span className="absolute">2</span></li>
                    <li className="flex justify-center relative"><span className="absolute">1</span></li>
                    <li className="flex justify-center relative"><span className="absolute">2</span></li>
                    <li className="flex justify-center relative"><span className="absolute">3</span></li>
                    <li className="flex justify-center relative"><span className="absolute">4</span></li>
                    <li className="flex justify-center relative"><span className="absolute">5</span></li>
                    <li className="flex justify-center relative"><span className="absolute">6</span></li>
                    <li className="flex justify-center relative"><span className="absolute">7</span></li>
                    <li className="flex justify-center relative"><span className="absolute">8</span></li>
                    <li className="flex justify-center relative"><span className="absolute">9</span></li>
                </ul>
                {/* <div className='flex p-2 b-2 justify-center'>
                    <h1 className='b-2 p-4'>Nilai : {harga_porsi}</h1>
                </div> */}

            </div>
            <div className="flex flex-col space-y-2 p-2 ">
            <div className="flex justify-between font-semibold">
                    <div className="flex-1 text-left">Kualitas</div>
                    <div className="flex-1 text-right">Gizi</div>
                </div>
               
                <input type="range" className="w-full" min="-8" max="8" step="1" defaultValue={0} onChange={e => setBobotkg(e.target.value)} />
                <ul className="flex justify-between w-full px-[10px]">
                <li className="flex justify-center relative"><span className="absolute">9</span></li>
                    <li className="flex justify-center relative"><span className="absolute">8</span></li>
                    <li className="flex justify-center relative"><span className="absolute">7</span></li>
                    <li className="flex justify-center relative"><span className="absolute">6</span></li>
                    <li className="flex justify-center relative"><span className="absolute">5</span></li>
                    <li className="flex justify-center relative"><span className="absolute">4</span></li>
                    <li className="flex justify-center relative"><span className="absolute">3</span></li>
                    <li className="flex justify-center relative"><span className="absolute">2</span></li>
                    <li className="flex justify-center relative"><span className="absolute">1</span></li>
                    <li className="flex justify-center relative"><span className="absolute">2</span></li>
                    <li className="flex justify-center relative"><span className="absolute">3</span></li>
                    <li className="flex justify-center relative"><span className="absolute">4</span></li>
                    <li className="flex justify-center relative"><span className="absolute">5</span></li>
                    <li className="flex justify-center relative"><span className="absolute">6</span></li>
                    <li className="flex justify-center relative"><span className="absolute">7</span></li>
                    <li className="flex justify-center relative"><span className="absolute">8</span></li>
                    <li className="flex justify-center relative"><span className="absolute">9</span></li>
                </ul>
                {/* <div className='flex p-2 b-2 justify-center'>
                    <h1 className='b-2 p-4'>Nilai : {kualitas_gizi}</h1>
                </div> */}

            </div>
            <div className="flex flex-col space-y-2 p-2 ">
            <div className="flex justify-between font-semibold">
                    <div className="flex-1 text-left">Kualitas</div>
                    <div className="flex-1 text-right">Porsi</div>
                </div>
               
                <input type="range" className="w-full" min="-8" max="8" step="1" defaultValue={0} onChange={e => setBobotkp(e.target.value)} />
                <ul className="flex justify-between w-full px-[10px]">
                <li className="flex justify-center relative"><span className="absolute">9</span></li>
                    <li className="flex justify-center relative"><span className="absolute">8</span></li>
                    <li className="flex justify-center relative"><span className="absolute">7</span></li>
                    <li className="flex justify-center relative"><span className="absolute">6</span></li>
                    <li className="flex justify-center relative"><span className="absolute">5</span></li>
                    <li className="flex justify-center relative"><span className="absolute">4</span></li>
                    <li className="flex justify-center relative"><span className="absolute">3</span></li>
                    <li className="flex justify-center relative"><span className="absolute">2</span></li>
                    <li className="flex justify-center relative"><span className="absolute">1</span></li>
                    <li className="flex justify-center relative"><span className="absolute">2</span></li>
                    <li className="flex justify-center relative"><span className="absolute">3</span></li>
                    <li className="flex justify-center relative"><span className="absolute">4</span></li>
                    <li className="flex justify-center relative"><span className="absolute">5</span></li>
                    <li className="flex justify-center relative"><span className="absolute">6</span></li>
                    <li className="flex justify-center relative"><span className="absolute">7</span></li>
                    <li className="flex justify-center relative"><span className="absolute">8</span></li>
                    <li className="flex justify-center relative"><span className="absolute">9</span></li>
                </ul>
                {/* <div className='flex p-2 b-2 justify-center'>
                    <h1 className='b-2 p-4'>Nilai : {kualitas_porsi}</h1>
                </div> */}

            </div>


            <div className="flex flex-col justify-between space-y-2 p-2 ">
                <div>Gizi --------------------------------------------------------------------------- Porsi</div>
                <input type="range" className="w-full" min="-8" max="8" step="1" defaultValue={0} onChange={e => setBobotgp(e.target.value)} />
                <ul className="flex justify-between w-full px-[10px]">
                <li className="flex justify-center relative"><span className="absolute">9</span></li>
                    <li className="flex justify-center relative"><span className="absolute">8</span></li>
                    <li className="flex justify-center relative"><span className="absolute">7</span></li>
                    <li className="flex justify-center relative"><span className="absolute">6</span></li>
                    <li className="flex justify-center relative"><span className="absolute">5</span></li>
                    <li className="flex justify-center relative"><span className="absolute">4</span></li>
                    <li className="flex justify-center relative"><span className="absolute">3</span></li>
                    <li className="flex justify-center relative"><span className="absolute">2</span></li>
                    <li className="flex justify-center relative"><span className="absolute">1</span></li>
                    <li className="flex justify-center relative"><span className="absolute">2</span></li>
                    <li className="flex justify-center relative"><span className="absolute">3</span></li>
                    <li className="flex justify-center relative"><span className="absolute">4</span></li>
                    <li className="flex justify-center relative"><span className="absolute">5</span></li>
                    <li className="flex justify-center relative"><span className="absolute">6</span></li>
                    <li className="flex justify-center relative"><span className="absolute">7</span></li>
                    <li className="flex justify-center relative"><span className="absolute">8</span></li>
                    <li className="flex justify-center relative"><span className="absolute">9</span></li>
                </ul>
               {/*  <div className='flex p-2 b-2 justify-center'>
                    <h1 className='b-2 p-4'>Nilai : {gizi_porsi}</h1>
                </div> */}

            </div>

            <div className="py-6 w-full justify-center items-center">
                <button type="submit" className="btn btn-md btn-primary "><i className="fa fa-save"></i> Simpan</button>
            </div>
        </form>

    )
}
export default Formbobotmahp
