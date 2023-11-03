import { Link } from "@inertiajs/react"
import './sidebar.css';


const Sidebar = () => {

  return (
  
    <div className="sidebar bg-primary">
        <ul>
            <li><Link href={route("admin")}>Dashboard</Link></li>
            <li><Link href={route("admin.nilaialt")}>User</Link></li>
            <li><Link href={route("admin.nilaialt")}>Kota</Link></li>
            <li><Link href={route("admin.wisata")}>Wisata</Link></li>
            <li><Link href={route("admin.nilaialt")}>Nilai Wisata</Link></li>
            <li><Link href={route("admin.nilaialt")}>Makanan</Link></li>
            <li><Link href={route("admin.nilaialt")}>Nilai Makanan</Link></li>
        </ul>
    </div>


  )
}

export default Sidebar