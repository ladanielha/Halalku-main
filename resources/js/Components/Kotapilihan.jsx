import { Link } from "@inertiajs/react"
const isCitycard = (city) => {

    return city.kota.map((data, i) => {
        //console.log(city)
        return (
            <div key={i}>
                <Link href={route('daftarwisata.kota', { namakota: data.namakota })} method="get">
                    <div className="card w-full card-compact lg:w-80 transform-gpu transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
                        <img className="card-image" src={data.gambar} alt="WisataCirebon" style={{
                            height: "12em", width: "100%"
                        }}
                        />
                        <div className="card-body">
                            <h2 className="card-title">{data.namakota}</h2>
                        </div>
                    </div>
                </Link>
            </div>
        )
    })


}

const nocity = () => {
    return (
        <div>Data Wisata Belum Tersedia </div>
    )
}

const Kotapilihan = ({ city }) => {
    //console.log(city)
    return !city ? nocity() : isCitycard(city)
}

export default Kotapilihan