import { Link } from "@inertiajs/react"
import './sidebar.css';


const Sidebar = () => {

  return (
  
    <div className="sidebar bg-white">
        <ul>
            <li><Link href={route("admin")}>Dashboard</Link></li>
            {/* <li><Link href={route("admin.nilaialt")}>User</Link></li> */}
            <li><Link href={route("admin.kota")}>Kota</Link></li>
            <li><Link href={route("admin.wisata")}>Wisata</Link></li>
            <li><Link href={route("admin.nilaialt")}>Nilai Wisata AHP</Link></li>
            <li><Link href={route("admin.nilaiwisatasaw")}>Nilai Wisata SAW</Link></li>
            <li><Link href={route("admin.makanan")}>Makanan</Link></li>
            <li><Link href={route("admin.nilaimakananahp")}>Nilai Makanan AHP</Link></li>
            <li><Link href={route("admin.nilaimakanansaw")}>Nilai Makanan SAW</Link></li>
        </ul>
    </div>


  )
}

export default Sidebar