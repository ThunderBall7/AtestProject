
import React from 'react';
import withApiCall from '../Hoc/Hoc';
import './style.css'
// import { useNavigate } from "react-router-dom";


const Product = ({ data, loading, error, handleIsloggedIn }) => {
  // const navigate = useNavigate();


  const handleIslogIn = () => {
      const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

      if (isLoggedIn) {
        console.log('User is logged in buying things now.');
        // navigate("/Products_Info");
      } else {
        console.log('User is not loggggggedin');
      }
      handleIsloggedIn();
    };

    if (loading) {
      return (
        <div className="text-center">
          <div role="status">
            <svg
              aria-hidden="true"
              className="inline w-8 h-8 text-gray-200 spin"
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="50" cy="50" r="45" fill="none" strokeWidth="5" stroke="#fff" strokeLinecap="round" />
            </svg>
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      );
    }
  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <div className="flex flex-col gap-4 mx-auto h-[80vh]">
      {data.map((elem, index) => (
        <div key={elem.id || index} className="flex w-96 max-[390px]:w-[95%] mx-auto h-[120px] border border-blue-600 bg-white rounded-lg">
          <img src={elem.src} alt={elem.heading} className="w-32 max-[390px]:w-[30%] h-auto mr-4 object-cover rounded-lg" />
          <div className="flex justify-between">
            <div className='mr-4'>
              <h1 className="text-lg font-semibold">{elem.heading}</h1>
              <div className="flex flex-col justify-start">
                <span className="text-red-500 text-2xl font-bold">₹{elem.newPrice}</span>
                <span className="text-gray-600 line-through">₹{elem.price}</span>
              </div>
              <p className="text-sm text-gray-500 max-[390px]:text-[12px]">Offer starts in <span className='text-red-500 font-semibold	'>12:12:01</span></p>
            </div>
            <button className="bg-blue-500 text-white py-1 px-1 w-20 h-8 rounded hover:bg-white hover:text-blue-500 text-sm self-end mt-auto mb-1"
            onClick={handleIslogIn}
            >Buy Now</button>

          </div>
        </div>
      ))}
    </div>
  );
};

const ProductComponent = withApiCall(Product, './data.json');

export default ProductComponent;
