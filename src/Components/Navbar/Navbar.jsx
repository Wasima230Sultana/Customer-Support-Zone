import React from 'react';

const Navbar = () => {
    return (
        <div className='bg-base-100 shadow-5xl'>
             <div className='max-w-[1000px] mx-auto'>
        <div className="navbar bg-base-100 ">
          <div className="flex-1">
            <a className="btn btn-ghost text-xl font-bold ">CS — Ticket System</a>
          </div>
          <div className="flex items-center">
            <div className='hidden md:block'>
              <a className='mr-3 text-xs' href="">Home</a>
              <a className='mr-3 text-xs' href="">FAQ</a>
              <a className='mr-3 text-xs' href="">Changelog</a>
              <a className='mr-3 text-xs' href="">Download</a>
              <a className='mr-3 text-xs' href="">Contact</a>

            </div>
            <button className="text-[#ffffff] font-semibold text-xs btn bg-linear-to-r from-[#632EE3] to-[#9F62F2]">
              + New Ticket
            </button>
          </div>
        </div>
      </div>
        </div>
       
    );
};

export default Navbar;