import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <div>
            <div className='max-w-screen-2xl lg:mx-auto mx-20 flex justify-between items-center py-5'>
                <div><h1>Simple-Firebase</h1></div>
                <div className='flex justify-center items-center gap-10'>
                    <NavLink to={"/"}>Home</NavLink>
                    <NavLink to={"/login"}>Login</NavLink>
                </div>
            </div>
        </div>
    )
}

export default Header