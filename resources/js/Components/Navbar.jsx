import { Link } from "@inertiajs/react"

import g from "/resources/images/HALALKU(V2).png"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faBell, faUser } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Navbar = ({ user, city }) => {
  //console.log("city", city)
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = city.filter((value) => {
      return value.namakota.toLowerCase().includes(searchWord.toLowerCase());
    });
    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  return (
    <div className="navbar">

      <div className="flex-1 py-4"  >
        <a href="/" className="btn btn-ghost normal-case text-xl text-black" >
          <img src={g} style={{ width: '100%', height: '100%' }} />
        </a>
      </div>
      <div className="flex">
        {/* <div className="relative">
          <input
            type="text"
            className="input input-bordered py-2 px-4 pr-10"
            style={{ marginLeft: '10px' }}
            placeholder="Search"
            value={wordEntered}
            onChange={handleFilter}
          />
          {filteredData.length !== 0 && (
            <div className="dataResult absolute mt-2 bg-white border border-gray-300 rounded w-full">
              {filteredData.slice(0, 15).map((value, index) => {
                return (
                  <Link
                    href={route('daftarwisata.kota', { namakota: value.namakota })}
                    method="get"
                    key={index}
                  >
                    <div className="list border-b border-gray-300 p-2">
                      <div className="d-flex flex-column ml-3">
                        <span>{value.namakota}</span>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </div> */}
      </div>
      <div className="flex">
        <Link href="https://codesandbox.io/s/halalku-shopping-cart-qs7xyz" className="btn btn-ghost normal-case text-xl text-black">
          <FontAwesomeIcon icon={faShoppingCart} />
        </Link>
      </div>
      <div className="flex">
        <Link href={route("formreko.wisata")} className="btn btn-ghost normal-case text-xl text-black">
          <FontAwesomeIcon icon={faBell} />
        </Link>
      </div>
      <div className="flex-none">


        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost">
            <FontAwesomeIcon icon={faUser} />
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {!user ? (
              <>
                <li><Link href={route("login")} as="button">Login</Link></li>
                <li><Link href={route("register")} as="button">Register</Link></li>
              </>
            ) : user.role === "Admin" ? (
              <>
                <li>
                  <Link href={route("admin")} className="justify-between">
                    Dashboard Admin
                  </Link>
                </li>
                {/* <li><Link href={route("profile.edit")} as="button" >Profile</Link></li> */}
                <li><Link href={route("logout")} as="button" method="POST">Logout</Link></li>
              </>
            ) : (
              <>
                {/* <li><Link href={route("profile.edit")} as="button" >Profile</Link></li> */}
                <li><Link href={route("logout")} as="button" method="POST">Logout</Link></li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div >
  )
}
export default Navbar