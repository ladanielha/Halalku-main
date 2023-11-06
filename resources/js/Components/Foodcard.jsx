import { Link } from "@inertiajs/react"
const isFoodcard = (foods) => {
console.log("cek",foods)
    return foods.map((data, i) => {
        
        return (
            <div key={i}>
                <Link href={route('detail.makanan',{ makanan_id: data.makanan_id })} method="get">
                    <div className="card w-full card-compact lg:w-96 transform-gpu transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
                        <figure><img src={data.gambar} alt={data.namamakanan} /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{data.namamakanan}</h2>
                            <p>{data.harga}</p>
                            <p>{data.desc}</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Details</button>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        )
    })


}

const noFoods = () => {
    return (
        <div>Data Wisata Belum Tersedia </div>
    )
}

const Foodcard = ({ foods }) => {
    //console.log(foods)
    return !foods ? noFoods() : isFoodcard(foods)
}

export default Foodcard