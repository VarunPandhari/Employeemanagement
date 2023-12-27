import React from 'react'
import user from '../assets/user.png'
import moptro from '../assets/moptro.png'
import { NavLink } from 'react-router-dom'

const Landing = () => {
    return (
        <>
            <div className="flex justify-end p-5">
                <img className='w-[18%]' src={user} alt="" />
            </div>

            <div className="flex justify-center p-5">
                <img className='w-[25%]' src={moptro} alt="" />
            </div>

            <div className='flex flex-col  justify-center items-center mt-10 w-full'>

                <div className='bg-[#2d4c4c99] p-3 w-[90%] rounded-full opacity-85'>
                    <h2 className='text-[#FFFFFFB3] text-center text-lg'>Employee Productivity Dashboard</h2>

                </div>

                <div className='text-white bg-[#2d4c4c4c] p-3 w-[90%] rounded-xl mt-4'>

                    <ul className='flex flex-col gap-6'>
                        <li>
                            <p className='inline'>Productivity on Monday</p>  <p className='inline ml-10 text-green-400'>4</p>
                            <progress className='block' id="file1" value="4" max="200"/>
                        </li>
                        <li>
                            <p className='inline'>Productivity on Tuesday</p>  <p className='inline ml-10 text-green-400'>92</p>
                            <progress className='block' id="file1" value="92" max="200"/>
                        </li>

                        <li>
                            <p className='inline'>Productivity on Wednesday</p>  <p className='inline ml-10 text-green-400'>122</p>
                            <progress className='block' id="file1" value="122" max="200"/>
                        </li>
                        <li>
                            <p className='inline'>Productivity on Thursday</p>  <p className='inline ml-10 text-green-400'>93</p>
                            <progress className='block' id="file1" value="93" max="200"/> 
                        </li>
                        <li>
                            <p className='inline'>Productivity on Friday</p>  <p className='inline ml-10 text-green-400'>89</p>
                            <progress className='block' id="file1" value="89" max="200"/> 
                        </li>

                        <li>
                            <p className='inline'>Productivity on Saturday</p>  <p className='inline ml-10 text-green-400'>98</p>
                            <progress className='block' id="file1" value="98" max="200"/>
                        </li>


                    </ul>

                </div>

            </div>

            <div className='flex justify-around mt-20 bg-[#2d4c4c4c] p-2 rounded-2xl w-[95%] m-2'>
                <NavLink to="/home">

                    <div className=''>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="green" viewBox="0 0 24 24" strokeWidth={1.5} stroke="green" className="w-12 h-12">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                        </svg>

                    </div>
                </NavLink>

                <NavLink to="/employee">

                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="green" viewBox="0 0 24 24" strokeWidth={1.5} stroke="green" className="w-12 h-12">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                        </svg>

                    </div>
                </NavLink>
            </div>
        </>
    )
}

export default Landing
