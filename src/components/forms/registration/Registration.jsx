import React, { useState } from 'react';
import { FaArrowRight } from "react-icons/fa";
import Otp from '../otp/Otp';

const Registration = () => {
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNum, setMobileNum] = useState('');
  const [check, setCheck] = useState(false);
  const [showOtp, setShowOtp] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleNameChange = (e) => {
    setFullname(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleNumChange = (e) => {
    setMobileNum(e.target.value);
  };

  const handleCheck = (e) => {
    setCheck(e.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!fullname || !email || !mobileNum) {
      alert('Please fill in all fields');
      return;
    }
    if(!check){
      alert('Please Agree to terms and conditions');
      return;
    }
    localStorage.setItem('fullname', fullname);
    localStorage.setItem('email', email);
    localStorage.setItem('mobileNum', mobileNum);
    localStorage.setItem('isLoggedIn', 'true');
    setIsLoggedIn(true);
    setFullname('');
    setEmail('');
    setMobileNum('');
    setShowOtp(true);
  };

  return (
    <>
      {showOtp && isLoggedIn ? (
        <Otp />
      ) : (
        <div className={`fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50 ${showOtp ? 'hidden' : ''}`}>
          <div className="w-96 bg-white rounded-lg shadow-lg p-8">
            <div>
              <h1 className='text-3xl font-bold mb-4 mx-6 text-blue-500'>Registration</h1>
            </div>
            <input
              className='p-2 rounded-lg my-2 border border-blue-600 shadow-inner-blue mx-6'
              type="text"
              placeholder='Full Name'
              value={fullname}
              onChange={handleNameChange}
            />
            <input
              className='p-2 rounded-lg my-2 border border-blue-600 shadow-inner-blue mx-6'
              type="text"
              placeholder='Email ID'
              value={email}
              onChange={handleEmailChange}
            />
            <input
              className='p-2 rounded-lg my-2 border border-blue-600 shadow-inner-blue mx-6'
              type="text"
              placeholder='Mobile Number'
              value={mobileNum}
              onChange={handleNumChange}
            />
            <div className="flex items-center my-2 mx-6">
              <input
                type="checkbox"
                id="terms"
                name="terms"
                className="mr-2"
                checked={check}
                onChange={handleCheck}
              />
              <label htmlFor="terms" className="text-sm">I agree to the terms and conditions</label>
            </div>
            <button className='flex items-center justify-center bg-blue-500 text-white p-2 rounded-lg my-2 hover:bg-blue-600 mx-8 font-bold tracking-wider' onClick={handleSubmit}>
              Receive OTP <FaArrowRight className='ml-2' />
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Registration
