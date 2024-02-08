import React, { useState } from 'react';
import logo from './images/SuperSale_logo.png';
import userLogo from './images/user.png';
import editPen from './images/edit.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import './style.css';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const Name = localStorage.getItem('fullname');
  const Email = localStorage.getItem('email');
  const MobNumber = localStorage.getItem('mobileNum');

  const handleLogout = () => {
    localStorage.removeItem('fullname');
    localStorage.removeItem('email');
    localStorage.removeItem('mobileNum');
    localStorage.setItem('isLoggedIn', false);
    setIsOpen(false);
    // console.log('button clicking')

  }

  return (
    <div className="relative">
      <div className="flex justify-between items-center mx-5">
        <div className='border rounded-lg tracking-wide text-white text-2xl my-4 px-4'>
          {/* <img className="w-80 h-14 object-cover -ml-8" src={logo} alt="Logo" /> */}
          <h1>SUPERSALE</h1>
        </div>
        <div className="toggle_btn" onClick={toggleMenu}>
          <FontAwesomeIcon icon={isOpen ? faTimes : faBars} className="text-white cursor-pointer" />
        </div>
      </div>
      <div className={`menu fixed inset-0 flex justify-end items-center z-50
      ${isOpen ? '' : 'closed'}`}>
        <div className="bg-myBlue border border-myBlueDark p-4 rounded-l-lg h-full w-70 relative">
          <div className='mt-52' >
            <div className='flex border-0 rounded-lg bg-myBlueDark px-2 py-2 justify-center align-middle gap-2 mb-4'>
              <img className='w-12 h-12' src={userLogo} alt="icon" />
              <div className='leading-tight text-sm w-[185px] text-white'>
                <p>{Name || 'Name'}</p>
                <p>{MobNumber || '987654321'}</p>
                <p>{Email || 'something@gmail.com'}</p>
              </div>
              <img className='w-12 h-12' src={editPen} alt="icon" />
            </div>
            <ul>
              <li className='border-0 mt-1 text-white text-xl rounded-md text-center bg-myBlueDark font-medium py-1'>SHIPPING ADDRESS</li>
              <li className='border-0 mt-1 text-white text-xl rounded-md text-center bg-myBlueDark font-medium py-1'>CLAIM YOUR CERTIFICATE</li>
              <li className='border-0 mt-1 text-white text-xl rounded-md text-center bg-myBlueDark font-medium py-1'>TERMS & CONDITIONS</li>
              <li className='border-0 mt-1 text-white text-xl rounded-md text-center bg-myBlueDark font-medium py-1'>PRIVACY POLICY</li>
              <li className='border-0 mt-1 text-white text-xl rounded-md text-center bg-myBlueDark font-medium py-1'>FAQ'S</li>

            </ul>
            <div className='border-0 mt-[365px] text-white text-xl rounded-md text-center bg-myBlueDark font-medium py-1'>
                <button onClick={handleLogout} className="text-white">Logout</button>
              </div>
            </div>

          <div className="absolute top-4 right-2">
          <FontAwesomeIcon icon={faTimes} className="text-black-500 w-5 cursor-pointer rounded-full border border-grey p-2 text-lg text-white close-icon" onClick={closeMenu} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
