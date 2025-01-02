import React from 'react'

export const Navbar = () => {
  return (
    <nav>
            <div className="navbar bg-base-100 flex flex-wrap items-center justify-between p-2">
       
        <div className="navbar-center flex flex-column lg:flex">
            <ul className="menu menu-horizontal px-1">
            <li><a>Home</a></li>
            <li><a>About us</a></li>
            <li><a>Products</a></li>
            <li><a>Contact Us</a></li>
            </ul>
        </div>
        <div className="navbar-end">
           login
        </div>
        </div>
    </nav>
  )
}
