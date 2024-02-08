import React, { useEffect, useState } from 'react'
import ProductComponent from '../products/Products'
import Registration from '../forms/registration/Registration'

const Home = () => {

  const [showRegistration, setShowRegistration] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(loggedIn);
  }, [isLoggedIn]);

  const handleIsloggedIn = () => {
    const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(!loggedIn);

    if (!loggedIn) {
      setShowRegistration(true);
    }
     // console.log('this comp is calledd')
  };
  return (
    <>
    <div className='mt-4'>
      <p className='text-center mb-1 text-white line tracking-widest'>Shop to save ₹20 coin</p>
      <ProductComponent handleIsloggedIn={handleIsloggedIn} />
      {showRegistration &&  <Registration />}
    </div>
    </>
  )

  };

export default Home