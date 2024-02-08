import React, { useState } from 'react';
import { FaArrowRight } from "react-icons/fa";

const Otp = ({ handleVerifyOtp }) => {
  const [otpCode, setOtpCode] = useState('');
  const [showOtp, setShowOtp] = useState(true);

  const handleOtp = (e) => {
    setOtpCode(e.target.value);
  };

  const handleVerify = () => {
    localStorage.setItem('otpCode', otpCode);
    setShowOtp(false);
  };

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50 ${showOtp ? '' : 'hidden'}`}>
      <div className="w-96 bg-white rounded-lg shadow-lg p-8">
        <div>
          <h1 className="text-3xl font-bold mb-4 mx-6 text-blue-500">OTP Verification</h1>
        </div>
        <input
          className="w-64 p-2 rounded-lg my-2 border border-blue-600 shadow-inner-blue mx-6"
          type="text"
          placeholder="Enter OTP"
          value={otpCode}
          onChange={handleOtp}
        />
        <p className='text-sm mx-auto text-center'>Haven't Received OTP yet? <span className='underline'>Resend it.</span></p>
        <button
          className="flex items-center justify-center bg-blue-500 text-white p-2 rounded-lg my-2 hover:bg-blue-600 mx-8 font-bold tracking-wider gap-4"
          onClick={handleVerify}
        >
          Verify OTP < FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Otp;
