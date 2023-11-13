import { Link } from "@inertiajs/react";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function SearchBar({ placeholder, city }) {
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
        <div className="flex items-center bg-white rounded-lg shadow-md p-2 pl-4">
            <div className="text-gray-500">
                <div className="form">
                    <FontAwesomeIcon icon={faSearch} />
                    <input
                        type="text"
                        placeholder="kota"
                        className="w-64 focus:outline-none ml-2" // Adjust the width (e.g., w-64 for a wider input)
                        value={wordEntered}
                        onChange={handleFilter}
                    />
                    <span className="left-pan"><i className="fa fa-microphone"></i></span>
                </div>

                {filteredData.length !== 0 && (
                    <div className="dataResult">
                        {filteredData.slice(0, 15).map((value, index) => {
                            return (
                                <Link
                                    href={route('daftarwisata.kota', { namakota: value.namakota })}
                                    method="get"
                                    key={index}
                                >
                                    <div className="list border-bottom" key={index}>
                                        <div className="d-flex flex-column ml-8 first-letter:">
                                            <span>{value.namakota}</span>
                                        </div>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                )}
            </div>
        </div>
    );
}

export default SearchBar;
