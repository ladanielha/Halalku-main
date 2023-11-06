import { Link } from "@inertiajs/react";


const Cekrekomendasi = ({ places }) => {
    //console.log(places)


    return places.places.map((data, i) => {
        //console.log(places)
        return (
            <div key={i}>
                {data.namakota === "Cirebon" ? (
                    <Link href={route("formreko.wisata")}>Rekomendasi</Link>
                ) : (
                    <Link href={route("formreko.wisata")}>Rekomendasi</Link>
                )}
            </div>
        )
    })
}

export default Cekrekomendasi