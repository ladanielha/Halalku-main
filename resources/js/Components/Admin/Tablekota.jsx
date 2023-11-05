import { Link } from "@inertiajs/react"


const isTablekota = (kota) => {
        //console.log("cekkota",kota)
        return (
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Gambar</th>
                            <th>Nama Kota</th>
                            <th>Aksi</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        { kota.kota.map((data, i) =>
                        <tr key = {i}>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={data.gambar} alt="Cirebon" />
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>
                            {data.namakota}
                                <br />
                                <span className="badge badge-sm">{data.alamat}</span>
                            </td>
                           
                            <th>
                                <Link href={route('edit.kota')} method="get" data={{kota_id: data.kota_id}}className="btn btn-outline btn-xs btn-warning">Edit</Link>
                                <Link href={route('delete.kota')} method="post" data={{kota_id: data.kota_id}}className="btn btn-outline btn-xs btn-error">Hapus</Link>                               
                            </th>
                        </tr>)}
                    </tbody>

                </table>
            </div>
        )
    
}
const noTablekota = () => {
    return (
        <div>Data Kota Masih Belum Tersedia </div>
    )
}

const Tablekota = ({ kota }) => {

    return !kota ? noTablekota() : isTablekota(kota)
}

export default Tablekota