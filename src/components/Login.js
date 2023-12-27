import React from 'react'
import logo from '../assets/logo.png'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const [mail, setMail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = () => {
        var p = document.getElementById("para");
        if (!mail || !password) {
            p.innerHTML = "fields cannot be empty";

        }

        else if (mail != 'admin@gmail.com' || password != "123") {
            p.innerHTML = "email or password incorrect";

        }
        else if (mail == 'admin@gmail.com' && password == "123") {
            navigate("/home");
        }
        setTimeout(() => {
            p.innerHTML = "";
        }, 2000);

      

    };


    return (
        <div>

            <div className="container flex flex-col justify-normal items-center mt-[50%] gap-20">

                <div className="logo">
                    <img src={logo} alt="" />

                </div>

                <div className="form flex flex-col gap-5 w-[30vb]">
                    <div className='bg-gray-100 p-3 rounded-3xl'>
                        <input type="text" className='bg-transparent border-none outline-none w-full' placeholder='Email' value={mail} onChange={(e) => { setMail(e.target.value) }} />
                    </div>

                    <div className='bg-gray-100 p-3 rounded-3xl'>
                        <input type="text" className='bg-transparent border-none outline-none' placeholder='Password' value={password} onChange={(e) => { setPassword(e.target.value) }} />
                    </div>

                    <button onClick={handleLogin} className='bg-green-700 p-3 rounded-3xl mt-5 text-white'>Login</button>
                    <p className='text-white text-center text-sm' id='para'></p>
                    <h2 className='text-center text-green-600'>Forgot password ?</h2>
                </div>


            </div>


        </div>
    )
}

export default Login
