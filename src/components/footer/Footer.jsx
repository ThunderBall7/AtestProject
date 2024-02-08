import React from 'react';

const Footer = () => {
  return (
    <div style={{ backgroundColor: 'black', color: 'white', borderTop: '1px solid white', borderBottom: '1px solid white', position: 'fixed', bottom: 0, left: 0, width: '100%', zIndex: 2 }}>
      <marquee behavior="scroll" direction="left" style={{ margin: 0, padding: '1px', fontSize: '18px', textDecoration: 'italic' }} >
       | Manish Maurya || SuperSale || Save ₹20 Coin || SuperSale | Manish Maurya || SuperSale || Save ₹20 Coin || SuperSale | Manish Maurya || SuperSale || Save ₹20 Coin || SuperSale |
      </marquee>
    </div>
  );
};

export default Footer;
