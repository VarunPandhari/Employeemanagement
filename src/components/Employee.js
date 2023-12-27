import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import user from '../assets/user.png';
import moptro from '../assets/moptro.png';
import data from '../data.js';
import Cards from './Cards';

const Employee = () => {
    const [tours, setTours] = useState(data);
    const [filter, setFilter] = useState('');


    const filterEmployees = () => {
        if (!filter.trim()) {

            setTours(data);
        } else {

            const filteredTours = data.filter((tour) =>
                tour.name.toLowerCase().includes(filter.toLowerCase())
            );
            setTours(filteredTours);
        }
    };

    return (
        <>
            <div className="flex justify-end p-5">
                <img className="w-[18%]" src={user} alt="" />
            </div>

            <div className="flex justify-center p-5">
                <img className="w-[25%]" src={moptro} alt="" />
            </div>

            <div className="flex justify-center">
                <div className="bg-[#2d4c4c99] p-3 w-[90%] rounded-full opacity-85 flex justify-between items-center">
                    <input
                        className="w-full p-1 bg-transparent border-none text-white"
                        type="text"
                        name="employee"
                        id="emp"
                        value={filter}
                        placeholder="Search by Name"
                        onChange={(e) => setFilter(e.target.value)}
                        onBlur={filterEmployees}
                        onKeyDown={(e) => {

                            if (e.key === 'Enter') {
                                filterEmployees();
                            }
                        }}
                    />
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="white"
                        className="w-6 h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                        />
                    </svg>
                </div>
            </div>
            <div className='h-[520px] overflow-y-auto'>
                <Cards tours={tours} />

            </div>

            <div className="flex justify-around mt-4 bg-[#2d4c4c4c] p-2 rounded-2xl w-[95%] m-2">
                <NavLink to="/home">
                    <div>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="green"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="green"
                            className="w-12 h-12"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                            />
                        </svg>
                    </div>
                </NavLink>

                <NavLink>
                    <div>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="green"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="green"
                            className="w-12 h-12"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                            />
                        </svg>
                    </div>
                </NavLink>
            </div>
        </>
    );
};

export default Employee;
